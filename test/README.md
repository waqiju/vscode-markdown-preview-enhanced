『个人定制』

在原作者的基础上，依据个人习惯，修改了小部分行为。

适配自己的笔记习惯。


『修改拖动图片的行为』

1. 重命名规则，tid

bindMarkdownEditorDropEvents() extension.ts

|__ pasteImageFile() preview-content-provider.ts

2. ```<img />``` 代替 ```![]()```


『支持无后缀的文件名』

extension.ts isMarkdownFile()

『对7z、zip格式文件的支持』
1. 支持拖拽复制到指定目录。
pdf格式也做了类似的支持

bindMarkdownEditorDropEvents() extension.ts
pasteHrefFile() preview-content-provider.ts

2. 支持在preview窗口点击后使用系统默认应用软件打开，而非是atom editor打开

preview-content-provider.ts clickTagA
