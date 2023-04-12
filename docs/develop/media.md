---
sidebar_position: 3
---

# 图片上传

图片和文件上传

### 媒体类型

```media_type:string``` 是系统内针对上传来源的一个设定。必须指定 media_type 。

但是大多数情况下你无需关注这个参数。

以下是系统保留类型，请勿重复定义。

```
page,
article,
media,
setting,
editor,
operate,
user,
upload,
```

定义媒体类型的方法是在 ```config/suda_custom.php``` 中新增，具体可参考基础配置部分的说明。

### 设置图片上传

#### ```MediaBoxTrait``` 简介

内置函数方法

```
trait MediaBoxTrait
{
    public $user;  //必须在控制器定义
    public $guard=''; //必须在控制器定义
    public $media_guards=[]; //guard数组
    public $media_type; //必须定义
    public $only_user = false; //只读取某个用户的数据
    public $media_users = [];  //只读取某个用户的数据
    public $resize = true;  // 是否生成缩略图
    public $ratio = false;  // 是否缩放
    public $hidden = '0';   //是否隐藏

    public function mediaSetting($guard='',$media_type='',$only_user=false,$resize=true,$ratio=false)
    public function loadModal(Request $request, string $media_type='default'): View
    public function uploadMedia(Request $request,$media_type="default")
    public function showMedia(Request $request,$id)
    public function removeMedia(Request $request,$media_type="default")
}
```

#### 配置控制器

参考下面代码，最简单的配置只需要配置 ```guard``` 即可

系统会自动读取 ```Auth::guard($this->guard)->user()``` 获取用户并赋值 ```$this->user```

```
<?php
namespace Gtd\Suda\Http\Controllers\Admin\Media;

use Gtd\Suda\Http\Controllers\Admin\DashboardController;

use Gtd\Suda\Traits\MediaBoxTrait;

class MediasController extends DashboardController
{
    use MediaBoxTrait;
    
    public function mediaSetting()
    {
        $this->guard = 'operate';
    }

}

```

#### 配置路由

这个路由配置必须。

可以对比控制器的配置，所有函数方法都在 ```MediaBoxTrait``` 定义好了，所以路由调用的函数方法名称不能修改。

```
// 图片选择窗口
Route::get('medias/load-modal/{media_type}', ‘MediasController@loadModal');
Route::get('medias/modal/{media_type}', ‘MediasController@modal');

// 上传
Route::post('medias/upload/image/{media_type?}', ‘MediasController@uploadMedia');
// 删除
Route::post('medias/remove/image/{media_type?}', ‘MediasController@removeMedia');

```

#### view 调用

引入上传组件

```
<div class="row mb-3">             
    <label for="image" class="col-sm-2 col-form-label text-end">
        图片上传
    </label>

    <div class="col-sm-4">
        @uploadBox(['media@logo',1,1,$media])
        <span class="help-block">360*120 pixel</span>
    </div>
</div>
```

```uploadBox``` 参数说明

```
参数1: 媒体类型，如果没有特殊定义，默认使用 media 即可
参数2: 最大上传数量
参数3: 组件内每行显示数量
参数4: 媒体数据 类型是 \Gtd\Suda\Models\Media, 支持不传或者null
```

使用案例如下：

```
@uploadBox('media',1,1)

// 常用用法，提交到控制器的数据字段为 $request->images['logo']
@uploadBox('media@logo',1,1)

// 自定义媒体类型 page
@uploadBox('page',2,2)
```

#### JS参数

最后一步，上传组件的核心参数，图片弹窗的链接、上传链接等。参考如下：

```
@push('scripts')
<script type="text/javascript">
    $(document).ready(function(){
        $.mediabox({
            box_url: "{{ admin_url('medias/load-modal/') }}",
            modal_url: "{{ admin_url('medias/modal/') }}",
            upload_url: "{{ admin_url('medias/upload/image/') }}",
            remove_url: "{{ admin_url('medias/remove/image/') }}"
        });
    });
</script>
@endpush
```
这里配置的参数地址，就是路由配置定义的四个地址。


### 总结

图片上传功能的配置结构，目标是要不仅支持后台默认的图片上传功能，还要支持在不同功能模块和不同用户权限下的使用，这是此功能被复用的一种实现方案。
