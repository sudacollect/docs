#模态框

控制器定义

```
public function index()
{
    
    $this->title('应用演示');
    
    $this->setData('modal_title','这里是标题');
    //定义标题上的小图标
    $this->setData('modal_icon_class','zly-setting-o');
    
    return $this->display('index_demo');
}
```

在 index_demo.blade.php 中定义

```
@extends('view_layout::component.modal')

@section('content')

<div class="modal-body">
	<!-- 这里是内容区域 -->
</div>

<div class="modal-footer">
	<button type="submit" class="btn btn-primary">确认</button>
</div>

@endsection

```
