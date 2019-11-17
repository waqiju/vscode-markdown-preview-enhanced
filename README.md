# 个人定制

在原作者的基础上，依据个人习惯，修改了小部分行为。

适配自己的笔记习惯。


『对7z、zip格式文件的支持』
1. 支持拖拽复制到指定目录。
pdf格式也做了类似的支持

bindMarkdownEditorDropEvents() extension.ts
pasteHrefFile() preview-content-provider.ts

2. 支持在preview窗口点击后使用系统默认应用软件打开，而非是atom editor打开

preview-content-provider.ts clickTagA


## 修改插件的name，阻止vscode的自动插件更新

![](/doc/image/README_20191117_130942.png)


## 支持无后缀的文件名

在src目录下，搜索 isMarkdownFile 函数

![](/doc/image/README_20191117_143056.png)

## 从操作系统的剪切Buffer中，把保存到指定路径，并插入到编辑文本中

使用paste-image插件，完美解决


## 插入附件

Hook 文件重命名

![](/doc/image/README_20191117_140543.png)

重命名的规则，tid

Hook 插入文本

![](/doc/image/README_20191117_140642.png)
