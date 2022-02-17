#编辑器

> 编辑器功能集成了图片上传的插件，并且隐藏了summernote自带的image上传功能。
> 如果需要启用图片上传插件，需要参照[图片选框的实现方案](https://docs.quyouinc.com/v2.0/basic/media/)，先启用图片选框即可。


载入编辑器

```
@php
$editor_height = 500;
@endphp
@include('view_app::component.editor',['height'=>$editor_height])
```


