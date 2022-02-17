#头像管理


### view设置

在 view 中使用以下参数

```
@uploadCroppie(['user',$user->avatar])
```

其中 ```$user->avatar``` 用于编辑时显示头像

使用后，在form表单提交时，将会自动新增一个avatar字段


###控制器方法

在控制其中增加以下方法

```
$this->uploadCroppie($request->avatar,$user_id);
```

```
use Ecdo\Zhila\Http\Controllers\Media\ImageController;
use Ecdo\Zhila\Http\Controllers\Media\MediaController;
use Ecdo\Zhila\Models\Media;

....

protected function uploadCroppie($data,$user_id){
        
        if(!empty($data)){
            $imageHandler = new ImageController;
            
            $file = $imageHandler->makeFileFromBinary($data);
            $file->resize(200,200);
            $imageHandler->setFile($file->stream());
            
            $file_data = [];
            
            $file_data['extension'] = $imageHandler->getExtesionByMime($file->mime());
            $file_data['size'] = $file->filesize();
            $file_data['source_width'] = $file->width();
            $file_data['source_height'] = $file->height();
            $file_data['source_type'] = strtoupper($file_data['extension']);
            
            $imageHandler->setFileData($file_data);
            
            $save_data = [
                'user_type'=>'user',
                'user_id'=>$user_id,
                'media_type'=>'user',
                'resize'=>true,
                'ratio'=>false,
            ];
            
            $msg = '';
            $medias = $imageHandler->saveImage($save_data,$msg);
            
            if($medias){
                
                list($media_id,$media_path) = $medias;
                
                $media = Media::where('id',$media_id)->first();
                
                //#1 移除旧头像的关系
                $user = User::where('id',$user_id)->with('avatar')->first();
                if($user->avatar && $user->avatar->media_id != $media_id){
                    $user->removeMediatable($user->avatar->media_id,'avatar');
                }

                //#2 保存新的头像关系
                $user->createMediatables($media_id,'avatar');
                
            }
        }
        
```


### Model设置

增加相应方法

```
public function avatar()
    {
         return $this->hasOne('Ecdo\Zhila\Models\Mediatable','mediatable_id','id')->where('mediatable_type','App\Extensions\your-ext-name\Models\User')->where('position','avatar')->with('media');
    }
    
```
    
   