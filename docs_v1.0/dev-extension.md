# 1.应用目录说明
```
目录
├── Demo
│   ├── Controllers (控制器)
│   │   ├── Admin
│   │   └── Site
│   ├── Models （模型层）
│   ├── publish （资源）
│   │   ├── assets （安装后拷贝至Public/extensions/demo目录）
│   │   └── database
│   │       └── migrations 安装后拷贝至 /database/migrations/extensions
│   ├── resources
│   │   └── views
│   │       ├── admin
│   │       └── site
│   │           └── layouts
│   └── routes
│   ├── config.php 配置文件
│   ├── icon.png 应用标志
│   ├── menu.php 菜单配置
```
>应用slug是唯一而且具有拍它性，建议保持slug的唯一性。

# 2.基本配置参数
config.php

```
<?php
return [
    'extkey'   => '',
    'name'      =>  '默认演示应用',
    'slug'      =>  'demo',
    'description'=> '此应用仅用于演示',
    'version'   =>  '1.0',
    
    'date'      => '2018年8月15日',
    'author'    =>  'ECDO',
    'email'     =>  'hi@ecdo.co',
    'website'   =>  'https://www.ecdo.co',
    
    
    'setting'    => [
        'default_page' => 'demo/index',
        'setting_page' => 'demo/setting',
        
    ],
    
];

```
extkey 应用唯一的Key，需要在后台申请填写  
name 应用名称  
slug 应用的唯一路径  
description 应用描述  
version 应用版本  
date 应用发布日期  
author 应用开发者  
email 应用开发者联系邮箱  
website 应用开发者官网  
setting 应用配置参数，支持配置默认的首页和设置页入口  

**icon.png 建议大小 500*500 像素正方形图片**

# 3.菜单设置

在应用目录下设置menu.php, 支持三种方式来设置菜单
menu.php

## 1) 独立菜单
独立菜单的重要设置项是：

1. 菜单数组的键值独立设置，建议以 应用slug_menu 的方式设置，如示例代码。
2. order是用于排序


```
<?php
return [
'demo_menu'=>[
        'title'     => '演示应用',
        'slug'      => 'demo_menu',
        'url'       => 'extension/demo/index',
        'icon_class'=> 'zly-stack',
        'target'     => '_self',
        'order'     => 0,
        
        'children' => [
            [
                'title'     => '演示首页',
                'slug'      => 'demo_index',
                'url'       => 'extension/demo/index',
                'icon_class'=> 'zly-home',
                'target'     => '_self',
                'order'     => 0,
            ],
        ],
    ],
];
```

## 2) 菜单组扩展

1. 其中 extend 属性设置为 true（必须设置
2. order属性是从小到大排列，设置越小排序越靠前

```
'demo_menu2'=>[
        'extend'    => true,
        'title'     => '演示应用',
        'slug'      => 'demo_menu2',
        'url'       => 'extension/demo/index',
        'icon_class'=> 'zly-stack',
        'target'     => '_self',
        'order'     => 99,

        'children' => [],
    ],
```

这样扩展的是菜单组，即在左侧菜单列表新增一个完整的菜单结构。

## 3) 菜单项扩展

例如扩展菜单组page下面的菜单项.

```
'zhila'=>[
	'page'=>[
        'children' => [
            [
                'title'     => '演示首页',
                'slug'      => 'demo_index',
                'url'       => 'extension/demo/index',
                'icon_class'=> 'zly-home',
                'target'     => '_self',
                'order'     => 0,
            ],
        ],
    ]
]
```
说明：
 
1. 必须是以```zhila```作为菜单组的key值
2. ```page```是对应菜单组的slug。在开发时对应扩展菜单的slug即可

# 4.路由配置
例如Demo应用的 routes/admin.php 如下，需要指定应用的控制器路径

```
$controller_prefix = "\\App\\Extensions\\Demo\\Controllers\\Admin\\";
Route::get('demo/index', $controller_prefix.'HomeController@index');

```

# 5.控制器
App\Extensions\Demo\Controllers\AdminController.php

```
<?php
namespace App\Extensions\Demo\Controllers;
use Ecdo\Zhila\Http\Controllers\Admin\ExtensionController;
class AdminController extends ExtensionController{
    
    //是否独立显示菜单
    public $single_extension_menu = true;
    
}

```
# 6.Model示例
App\Extensions\Demo\Models\Demo.php

```
<?php
namespace App\Extensions\Demo\Models;
use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    protected $table = 'demos';
    
}

```

# 7. 系统内置菜单slug

1. 控制面板 dashboard
2. 页面 page
3. 文章 article
4. 媒体 media
5. 用户 user
6. 外观 appearance
7. 系统 setting
8. 工具 tool


# 8. 扩展系统权限

Zest 目前已经集成了应用权限管理，支持设置应用的菜单权限，从而控制不同账号的人可以看到不同的应用菜单。

新增 auth_setting.php 放置在应用根目录下

```
<?php
//配置相应的权限
return [

    'store'=>[
        'name'=>'关联权限',
        'setting'=>'App\Extensions\Demo\Models\Store@getAll',
    ],

];
```

```
<?php
namespace App\Extensions\Demo\Models;

class Store
{
	
	public function getAll()
    {

        $stores = Store::where([])->get()->toArray();
        return $stores;

    }
	
}
```

返回的数组格式必须是以下格式,包含id和name

```
$stores = [
	
	[
		'id'=>1,
		'name'=>'门店1',
	],
	[
		'id'=>2,
		'name'=>'门店2',
	],
	
];
```

刷新应用后，在系统中配置应用权限时，即可看到配置项.

在控制其中获取用户的角色权限，将会得到自定义权限变量

```
$permissions['exts']['应用slug']['#auth']
```


# 9. 下载Demo应用

应用包放置在 `app\Extensions` 目录

[点击下载](https://docs.quyouinc.com/extension_demo-1.0.zip)
