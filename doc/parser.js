module.exports = {
    onWillParseMarkdown: function(markdown) {
      return new Promise((resolve, reject) => {
        // 把『xxx』替换为二级标题
        markdown = markdown.replace(/『(.*)』/gm, ($0, $1) => "## " + $1 );
        // 把行首空格替换为&nbsp; 使得可以显示出来
        markdown = markdown.replace(/^[ \t]+(?!$)/gm, ($0) => "&nbsp;".repeat($0.length));
        
        return resolve(markdown);
      });
    },
  
    onDidParseMarkdown: function(html) {
      return new Promise((resolve, reject)=> {
        return resolve(html)
      })
    }
  }