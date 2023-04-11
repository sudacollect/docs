---
sidebar_position: 7
---

# 权限设置

基于路由和菜单的权限设计。

### 先看实现原理

每个菜单和子菜单都有一个必备的属性slug, 既可以确认菜单的唯一性，也是权限检查的关键要素。

例如菜单结构如下，那么startup_menu.index 和 startup_menu.help 就是到控制器的权限

```
'startup_menu'=>[
    'single'    => true,
    'title'     => 'Startup',
    'slug'      => 'startup_menu',
    'url'       => 'index',
    'icon_class'=> 'ion-apps',
    'icon_bg_color'=> '#000000',
    'font_color'=> '#ff0000',
    'target'     => '_self',
    'order'     => 0,
    
    'children' => [
        [
            'title'     => '入口',
            'slug'      => 'index',
            'url'       => 'index',
            'icon_class'=> 'zly-home',
            'target'     => '_self',
            'order'     => 0,
            
        ],
        [
            'title'     => '帮助',
            'slug'      => 'help',
            'url'       => 'help',
            'icon_class'=> 'zly-home',
            'target'     => '_self',
            'order'     => 0,
            
        ],
    ],
    
],
```

在控制器中，可以这样使用

```
<?php
namespace App\Extensions\Startup\Controllers\Admin;
...
class HomeController extends AdminController
{    
    public function help()
    {
        $this->gate('startup_menu.index');

        $this->setMenu('startup_menu.help');
        return $this->display('help');
    }
}

```

通过内置的 ```gate``` 方法可以自动判断用户权限集中是否具有此“菜单”的权限。

### 后台设置

进入系统菜单，系统->角色设置，可以新增或编辑角色，例如我们新增运营管理员