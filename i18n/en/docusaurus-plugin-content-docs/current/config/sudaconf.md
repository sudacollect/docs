---
sidebar_position: 1
---

# Config

config/sudaconf.php 
```
<?php

return [

    
    // Password str
    // better change before suda:install
    'password_link'     => 'zp',
    
    // Login path
    'admin_path'        => 'admin',

    // Login account, email,phone,username
    'admin_loginname'   => 'email',
    
    // [TEST] admin domain
    'admin_host'        => '',
    
    
    // Cache，default is file
    'admin_cache'       => 'file',
    
    // default menu suda
    'default_menu'      => 'suda',

    // sidebar style
    // 'sidemenu_style' => 'pro',
    
    // DO NOT CHANGE
    'apps' => ['admin','site','mobile'],

    // Dashboard widgets
    'widget'=>[
        'dashaboard'=>[
            'start'     =>\Gtd\Suda\Widgets\Start::class,
            'quickin'   =>\Gtd\Suda\Widgets\Quickin::class,
            'news'      =>\Gtd\Suda\Widgets\News::class,
            // 'dashhelp'=>\Gtd\Suda\Widgets\DashHelp::class,
        ],
        'entry'=>[
            'extension' =>\Gtd\Suda\Widgets\Entry\Extension::class,
        ],
    ],
    
    // DO NOT CHANGE
    'controllers'=>[
        'namespace'=>[
            'admin' => 'Admin',
            'site'  => 'Site',
            'mobile'=> 'Mobile',
        ]
    ],
    
    // media_type
    // custom type in suda_custom.php
    'media'=>[
        'types_model'   => [
            // 'page'=>'Gtd\Suda\Models\Page',
            // 'article'=>'Gtd\Suda\Models\Article',
        ]
    ],

    // upload setting
    // DO NOT CHANGE
    'image' => [
        'disk'  => 'public',
        'size'=>[
            'small'     => 200,
            'medium'    => 400,
        ]
    ],

    // CDN HOST
    'static_host'       => '',

    // Force SSL
    'force_secure'      => null,

    // 10.x deprecated
    # auto_mobile => false,

    // 10.x deprecated
    'mobile_prefix'         => 'mobile',

    // 10.x deprecated
    'except_mobile'  => [],
    
    // 10.x deprecated
    'locale'                => 'zh_CN',

    // assets
    'core_assets_path'      => '/vendor/suda/assets',


    'theme'=>[
        'site'  =>'default', //pc website
        'mobile'=>'default', //mobile website
    ],


    
    // default app/Extensions (capitalized)
    'extension_dir' => 'extensions',
    
    // [TEST] HOST
    'extension_host' => '',

    
    'extension_admin_path' => 'appcenter',
    'extension_login_name' => 'email',

];

```
