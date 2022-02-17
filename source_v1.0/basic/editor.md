#编辑器

> 编辑器功能集成了图片上传的插件，并且隐藏了summernote自带的image上传功能。
> 如果需要启用图片上传插件，需要参照[图片选框的实现方案](https://docs.quyouinc.com/basic/media/)，先启用图片选框即可。


载入编辑器的样式表

```
@push('styles-head')
<link href="{{ zhila_asset('editor/summernote.css') }}" rel="stylesheet">
@endpush
```

载入编辑器相关的JS

```
@push('scripts')

//启用这个参数可以设置编辑器的高度
<script type="text/javascript">
    $(document).ready(function(){
        zhila.editor_height = {{ $editor_height }};
    })
</script>

<script src="{{ zhila_asset('editor/summernote.min.js') }}"></script>
<script src="{{ zhila_asset('editor/lang/summernote-zh-CN.js') }}"></script>

//这个是图片选框插件，已经在editor中集成好，如果要自定义，根据summernote文档自己写一个editor.js即可
<script src="{{ zhila_asset('js/plugins/summernote-ext-media.js') }}"></script>
<script src="{{ zhila_asset('/js/plugins/editor.js') }}"></script>

<script type="text/javascript">
    //编辑器生效
    $(document).ready(function(){
        $.fn.zeditor('#summernote');
    });
    
</script>
@endpush
```


