---
sidebar_position: 1
---

# 定义应用

应用定义和配置

### 应用目录结构

例如应用 app/Extensions/Startup

```
├── Controllers  
│   ├── Admin  
│   │   ├── HomeController.php    
│   ├── Site   
│   │   ├── ExampleController.php    
│   ├── AdminController.php  
│   └── SiteController.php  
├── Models  
│   ├── User.php  
│   └── UserMeta.php
├── publish  
│   ├── assets  
│   │   ├── css      
│   │   ├── js
│   │   ├── images
│   ├── database/migrations  
│   │   ├── *.php  
│   └── other
├── resources  
│   ├── views  
│   │   ├── admin      
│   │   ├── site
│   └── other
├── routes  
│   ├── admin.php    
│   ├── web.php  
│   └── api.php 
├── README  
├── config.php  
├── menu.php  
└── icon.png  
```

### 配置文件

```config.php```

```
<?php

 
return [
    'name'          => 'Startup',
    'slug'          => 'startup',
    'description'   => '演示应用',
    'version'       => '2.0',
    
    'date'          => '2018年8月15日',
    'author'        => 'suda',
    'email'         => 'dev@suda.run',
    'website'       => 'https://suda.run',
    
    'setting'    => [
        'default_page' => 'index',
        'setting_page' => 'index',
        // 'disable_role' => 1,
    ],
];

```

:::caution

应用目录必须和 slug 保持一致，目录采用首字母大写的方式

不支持 -,_ 链接符的写法，建议尽量控制在两个单词或者有限长度

:::


### 导航菜单

```custom_navi.php```

```
<?php

return [
    [
        'name'      => 'Startup'
        'url'       => 'extension/startup/index',
        'target'    => '_self',
        'icon'      => 'ion-telescope',
    ],
];
```


### 菜单配置

```menu.php```

```
<?php
/*
|--------------------------------------------------------------------------
| 菜单扩展
|--------------------------------------------------------------------------
|
| 目前支持扩展菜单项
| 1. 支持对当前已存在菜单的扩展
| 2. 支持扩展新的菜单项
|
*/

return [
    
    'startup_menu'=>[
        'title'     => 'Startup',
        'slug'      => 'startup_menu',
        'url'       => 'index',
        'icon_class'=> 'ion-apps',
        'icon_bg_color'=> '#000000',
        'font_color'=> '#ff0000',
        'group'     => 'startup_menu',
        'target'     => '_self',
        'order'     => 0,
        
        'children' => [
            [
                'title'     => '入口',
                'slug'      => 'index',
                'url'       => 'index',
                'icon_class'=> 'ion-home',
                'target'     => '_self',
                'order'     => 0,
                
            ],
            [
                'title'     => '帮助',
                'slug'      => 'help',
                'url'       => 'help',
                'icon_class'=> 'ion-home',
                'target'     => '_self',
                'order'     => 0,
                
            ],
        ],
    ],
    
];
```



### 路由配置

```routes/admin.php```

```
<?php

$controller_prefix = "\\App\\Extensions\\Startup\\Controllers\\Admin\\";

Route::group([
    'as'         => 'startup.',
    'prefix'     => 'startup',
], function ($router) use ($controller_prefix) {
    Route::get('index/{param?}', $controller_prefix.'HomeController@index');
    Route::get('help', $controller_prefix.'HomeController@help');

});

```

### 控制器配置

```AdminController.php```

```
<?php

namespace App\Extensions\Startup\Controllers;

use Gtd\Suda\Http\Controllers\Admin\ExtensionController;

class AdminController extends ExtensionController{
    
    public $single_extension_menu = true;
    
}

```

变量 ```$single_extension_menu``` 用于定义菜单是否独立显示。
