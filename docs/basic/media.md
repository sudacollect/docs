#图片文件管理

**图片资源数据表**

medias 存储图片数据  
mediatables 图片数据关系表

具体可查看数据表字段。

**1. 定义media**

```
//Model定义
use Gtd\Suda\Traits\MediaTrait;

class Album extends Model
{
	use MediaTrait;
	public function media_images()
    {
        return $this->hasMany('Gtd\Suda\Models\Mediatable','mediatable_id','id')->where('mediatable_type','App\Extensions\Demo\Models\Album')->where('position','album')->with('media');
    }
}
```

其中mediatable_type 对应的配置在config/suda_custom.php中新增

```
'media'=>[
	'types_model'=>[
		
		//增加一行
		'album'=>'App\Extensions\Startup\Models\Album',
	]
]
```

在控制器中使用时

```
$album->with('media_images');
```

**2. 上传组件**

在blade中直接使用

```
// album 表示对应图片的关联类型
// 4 表示最大上传数量
// 2 表示每行显示的上传框是2个, 即显示2行
// $media表示图片信息，增加时可为空
@uploadBox(['album','4','2',$media])
```

定义图片的路由信息（必须）

```
@push('scripts')
<script type="text/javascript">
    $(document).ready(function(){
        $.fn.mediabox({
                media_type: 'editor',//类型
                modal_url: 'sdone/modal/media/editor',//打开图片窗口
                upload_url: 'sdone/upload/image/editor'//上传链接
            });
    })
</script>
@endpush
```

说明: uploadBox 组件使用时，需要配合图片选框.



**3. 图片选框**

在了解以上内容后，配合uploadBox的使用，图片选框的设置非常简单


1.设置路由

```
//调取图片上传界面
Route::get('你的自定义路径/{media_type}','MediasController@modal');

//图片上传处理
Route::post('{你的自定义路径}/{media_type}','MediasController@uploadImage');


```

这里的 media_type 必须写成传参的方式才可以执行。

内置的modal方法和uploadImage方法的第二个参数就是media_type

2.设置你的图片控制器


```
namespace 你的路径\Controllers;

//把这里改为自己需要使用的控制器，才能获取到，并且可以设置到$this->user;
use App\Extensions\Demo\Controllers\Admin\AdminController;

use Gtd\Suda\Traits\MediaBoxTrait;

class MediasController extends DashboardController
{
    use MediaBoxTrait;
    
    function mediaSetting(){

			//参数说明
			//guard: guard key, config/auth.php
			//onlyUser: 默认false, 是否只显示当前用户
			//resize: 默认true,自动生成缩略图
			//ratio: 默认false,是否缩放图片
		  $this->guard = 'operate';
    }

}
```

说明：

在MediaBoxTrait中已经定义了图片选框所需要的方法，这里控制器的设置方法是为了在方法中可以获取对应的用户信息，因为保存图片需要用户类型和用户ID。

这样可以支持在多个应用场景中使用图片选框, 例如商家后台、用户中心可以区分。



