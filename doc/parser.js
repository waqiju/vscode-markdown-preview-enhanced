module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject) => {
      split_md = markdown.split(/(?=```)/gm)
      markdown = "";

      // deal
      var i = 0;
      for (i = 0;i < split_md.length;++i)
      {
        const md = split_md[i]
        // 遇到这种模式 ``` xxx ``` yyyy，跳过不运行替换
        if (md.indexOf("```") === 0 && i + 1 < split_md.length)
        {
          markdown += md;
          continue;
        }   
        markdown += replace_note(md);
      }
      
      return resolve(markdown);
    });
  },

  onDidParseMarkdown: function(html) {
    return new Promise((resolve, reject)=> {
      return resolve(html)
    })
  }
}

function replace_note(markdown) {
  var result = markdown;
  // 把『xxx』替换为二级标题
  result = result.replace(/『(.*)』/gm, ($0, $1) => "## " + $1 );
  // 把行首空格替换为&nbsp; 使得可以显示出来
  result = result.replace(/^[ \t]+(?!$)/gm, ($0) => "&nbsp;".repeat($0.length));
  return result;
}