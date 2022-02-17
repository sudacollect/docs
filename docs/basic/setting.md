#系统设置

> 为了系统的安全稳健和效率，建议有限度的使用。

Setting全局变量的四个重要参数：group、key、type、values

例如在控制器中的使用方法

```
<?php
namespace App\Extensions\Demo\Controllers\Admin\User;

use Request;
use Gtd\Suda\DashboardController;
use Gtd\Suda\Models\Setting;


class UserController extends DashboardController
{
  public function settingSave(Request $request){
                
        $data = [
            'key'=>'user_setting',
            'group'=>'user',
            'type'=>'text',
            'values'=>'user_values',
        ];
        
        $settingModel = new Setting;
        
        if($first = Setting::where(['key'=>'user_setting','group'=>'user'])->first()){
            Setting::where(['key'=>'user_setting','group'=>'user'])->update($data);
        }else{
            $settingModel->fill($data)->save();
        }
        
        //更新Setting缓存
        //Setting::updateSettings();
        
        return $this->responseAjax('success','保存成功','user/setting');
    }
    
    public function getSetting(){
        $settings = Setting::where(['key'=>'user_setting','group'=>'user'])->first();
    }
}
```


