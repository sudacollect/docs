---
sidebar_position: 2
---

# 全局参数

> 为了系统的安全稳健和效率，建议有限度的使用。

Setting全局变量的四个重要参数：group、key、type、values

系统保留使用的group参数为：dashboard, site, extension
开发时请注意，不要覆盖这些组下面的参数

## 方法1: settingTrait

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
        //param4: 数据类型，支持text,serialize
        //serialize 并且 values 是数组，保存时自动进行seralize进行格式化保存
        $this->saveSettingByKey('user_setting','user',$values,'serialize');
        
        return $this->responseAjax('success','保存成功','user/setting');
    }
    
    public function getSetting(){
        $settings = = $this->getSettingByKey('user_setting','user');
    }
}
```

## 方法2: 控制器中的使用方法

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
        
        //更新Setting缓存
        //Setting::updateSettings();
        
        return $this->responseAjax('success','保存成功','user/setting');
    }
    
    public function getSetting(){
        $settings = Setting::where(['key'=>'user_setting','group'=>'user'])->first();
    }
}
```



