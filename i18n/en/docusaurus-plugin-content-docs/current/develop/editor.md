---
sidebar_position: 5
---

# 编辑器

内置 summernote

在view中的调用方法

```
<div class="mb-3" >
    <label for="content">内容</label>
    <x-suda::editor id="summernote" name="content" :height="$editor_height" :content="$item->content" />
</div>
```
参数说明

```
id: 编辑器的ID
name: 对应textarea 的name属性
height: 编辑器的默认高度，默认是200
content: 编辑器的内容，默认为空
placeholder: 编辑器的占位提示，默认为空
```

编辑器需要用到样式和JS的支持，所以需要在对应 view 中配置 ```@stack('styles-head')``` 和 ```@stack('scripts')``` 为分别引入样式文件和JS文件。


