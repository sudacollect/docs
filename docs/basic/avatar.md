#头像管理


### view设置

在 view 中使用以下参数

```
@uploadCroppie('user',$user->avatar)
```

其中 ```$user->avatar``` 用于编辑时显示头像

使用后，在form表单提交时，将会自动新增一个avatar字段


###控制器方法



在控制其中增加以下方法

```
use Gtd\Suda\Traits\AvatarTrait;

class ProfileController {
    use AvatarTrait;

    $this->uploadCroppie($request->avatar,'operate',$user_id);
}

//$request->avatar: 上传的图像信息
//operate: 用户类型，可自定义
//$user_id: 用户ID

```




### Model设置

增加相应方法

```
public function avatar()
    {
         return $this->hasOne('Gtd\Suda\Models\Mediatable','mediatable_id','id')->where('mediatable_type','App\Extensions\your-ext-name\Models\User')->where('position','avatar')->with('media');
    }
    
```
    
   