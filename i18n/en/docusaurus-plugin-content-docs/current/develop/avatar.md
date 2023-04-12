---
sidebar_position: 4
---

# 头像上传

特殊的图片上传，支持选择区域裁剪

### 在 view 中的使用方法如下：

```
<div class="mb-3">
    <label for="inputEmail3" class="col-form-label">头像</label>
    <div class="form-control-static">
        @uploadCroppie('user',$user->avatar)
    </div>
</div>
```

参数说明：

```
参数1: 媒体类型，根据图片上传部分的文档设置媒体类型
参数2: 媒体数据 类型是 \Gtd\Suda\Models\Media, 默认为空
```


### 控制器处理

表单提交后，控制器对应配置和处理如下：

```
use Gtd\Suda\Traits\AvatarTrait;

class ProfileController extends DashboardController
{
    use AvatarTrait;

    public function save(Request $request)
    {
        ...
        
        $user = User::where(['id'=>$request->user_id])->first();

        // 参数1: 用户类型（媒体类型，参考图片上传部分的介绍）
        // 参数2: 图片数据
        // 参数3: 用户数据
        // 保存图片并和用户数据绑定
        $this->uploadCroppie('user',$request->avatar,$user);
        
        ...
    }
}

```
