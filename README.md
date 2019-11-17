# 个人定制

在原作者的基础上，依据个人习惯，修改了小部分行为。

适配自己的笔记习惯。


## Development

git clone 到插件目录

在根目录，npm install

如果还有问题，使用vscode打开工程，Debug运行一下。

插件目录

```
[用户目录]/.vscode/extensions
```


## 修改插件的name，阻止vscode的自动插件更新

![](/doc/image/README_20191117_130942.png)


## 支持无后缀的文件名

在src目录下，搜索 isMarkdownFile 函数

![](/doc/image/README_20191117_143056.png)

## 从操作系统的剪切Buffer中，保存图片到指定路径，并插入到编辑文本中

使用paste-image插件，完美解决


## 插入附件

Hook 文件重命名

![](/doc/image/README_20191117_140543.png)

重命名的规则，tid

Hook 插入文本

![](/doc/image/README_20191117_140642.png)


## 使用系统默认应用软甲打开7z、zip格式文件

支持在preview窗口点击后使用系统默认应用软件打开，而非是atom editor打开

搜索 clickTagA 函数

![](/doc/image/README_20191117_144620.png)


## 快捷键

打开关闭Preview Windows
ctrl + alt + m

打开Image Helper
ctrl + alt + i

![](/doc/image/README_20191117_150900.png)


## Extend Markdown Parser

![](/doc/image/README_20191117_165402.png)

markdown.replace()
markdown是js原生的string
replace是正则表达式替换

js里面正则表达式的pattern string，可以用(/)来开头和结尾
/g 意思是全局匹配
/m 意思是多行匹配
