---
sidebar_position: 2
---

# Setting

> For the safety, robustness and efficiency of the system, it is recommended to use limited。

Four important parameters of Setting：group、key、type、values

Reserved by the system：dashboard, site, extension
Be careful not to override the parameters under these groups

## Method1: settingTrait

Function List

```
public function getSettingByKey( $key,$group = '', $default_value=null, $media_data = true )
```
type=serialize Serialization is automatically performed

Will be deserialized automatically when read

```
public function saveSettingByKey( $key, $group, $content, $type='text' )
```
remove_key = false will clear values， won't delete key.
```
public function deleteSettingByKey( $key, $group, $remove_key = true)
```

Examples: 

```
<?php
namespace App\Extensions\Demo\Controllers\Admin\User;
use Gtd\Suda\DashboardController;
use Gtd\Suda\Traits\SettingTrait;

class UserController extends DashboardController
{
    use SettingTrait;

    public function settingSave(Request $request)
    {
        $values = [1,2,3];

        //param1: key
        //param2: group
        //param3: values
        //param4: Data type，support: text,serialize
        //serialize automatically performed
        $this->saveSettingByKey('user_setting','user',$values,'serialize');
        
        return $this->responseAjax('success','Saved!','user/setting');
    }
    
    public function getSetting(){
        $settings = = $this->getSettingByKey('user_setting','user');
    }
}
```

## Method2: Controller

```
<?php
namespace App\Extensions\Demo\Controllers\Admin\User;

use Request;
use Gtd\Suda\DashboardController;
use Gtd\Suda\Models\Setting;


class UserController extends DashboardController
{
    public function settingSave(Request $request)
    {
        
        $values = [1,2,3];
        $data = [
            'key'   => 'user_setting',
            'group' => 'user',
            'type'  => 'serialize',
            'values'=> serialize($values),
        ];
        
        $settingModel = new Setting;
        
        if($first = Setting::where(['key'=>'user_setting','group'=>'user'])->first()){
            Setting::where(['key'=>'user_setting','group'=>'user'])->update($data);
        }else{
            $settingModel->fill($data)->save();
        }
        
        // update cache
        // Setting::updateSettings();
        
        return $this->responseAjax('success','Saved!','user/setting');
    }
    
    public function getSetting(){
        $settings = Setting::where(['key'=>'user_setting','group'=>'user'])->first();
    }
}
```



