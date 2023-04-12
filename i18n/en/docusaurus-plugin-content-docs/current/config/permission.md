---
sidebar_position: 7
---

# Permissions

Based on menu and roles。

### Detect permission

Each menu and submenu has a mandatory attribute slug, which can not only confirm the uniqueness of the menu, but also a key element of permission checking.

For example, the menu structure is as follows, then ```startup_menu.index``` and ```startup_menu.help``` are the permissions to the controller

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
            'title'     => 'Entry',
            'slug'      => 'index',
            'url'       => 'index',
            'icon_class'=> 'zly-home',
            'target'     => '_self',
            'order'     => 0,
            
        ],
        [
            'title'     => 'Help',
            'slug'      => 'help',
            'url'       => 'help',
            'icon_class'=> 'zly-home',
            'target'     => '_self',
            'order'     => 0,
            
        ],
    ],
    
],
```

Controller: 

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

Function ```gate``` will detect permission.

Support Laravel ```Gate```

### Setting

Login in dashboard，Setting->Role