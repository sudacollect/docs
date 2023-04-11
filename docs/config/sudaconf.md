---
sidebar_position: 1
---

# 基本配置

config/sudaconf.php 文件配置说明
```
<?php

return [

    
    // 密码加密链接符
    // 如果需要修改，请在 suda:install 之前修改
    'password_link'     => 'zp',
    
    // 后台访问路径，建议修改
    'admin_path'        => 'admin',

    // 后台登录方式，支持email,phone,username
    'admin_loginname'   => 'email',
    
    // [实验功能]后台单独的域名
    'admin_host'        => '',
    
    
    // 后台缓存方式，默认file
    'admin_cache'       => 'file',
    
    // 后台默认菜单，默认suda
    'default_menu'      => 'suda',

    // 菜单使用pro样式，将会启用窄侧边栏菜单
    // 'sidemenu_style' => 'pro',
    
    // 不建议修改
    'apps' => ['admin','site','mobile'],

    // 控制面板默认显示的三个组件
    // 建议企业定制开发根据需要自行定制
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
    
    // 不建议修改
    'controllers'=>[
        'namespace'=>[
            'admin' => 'Admin',
            'site'  => 'Site',
            'mobile'=> 'Mobile',
        ]
    ],
    
    // 上传类型
    // 这里不建议修改，如果需要扩展，可以在suda_custom.php中新增
    'media'=>[
        'types_model'   => [
            // 'page'=>'Gtd\Suda\Models\Page',
            // 'article'=>'Gtd\Suda\Models\Article',
        ]
    ],

    // 默认上传参数
    // 不建议修改
    'image' => [
        'disk'  => 'public',
        'size'=>[
            'small'     => 200,
            'medium'    => 400,
        ]
    ],

    // 图片资源加速域名
    // 使用OSS或者开启CDN的可以配置对应域名
    'static_host'       => '',

    // 是否强制SSL
    'force_secure'      => null,

    // 10.x版本不再支持此特性
    // 不建议修改
    # auto_mobile => false,

    // 移动默认新增的前缀
    // 不建议修改
    'mobile_prefix'         => 'mobile',

    // 不建议修改
    'except_mobile'  => [],
    
    // 10.x不再支持此特性，语言设置以 config/app.php 为准
    'locale'                => 'zh_CN',

    // 核心assets目录
    'core_assets_path'      => '/vendor/suda/assets',


    // 默认前端模板
    'theme'=>[
        'site'  =>'default', //pc website
        'mobile'=>'default', //mobile website
    ],


    
    // 本地自定义应用的路径 app/Extensions (自动首字母大写，配置使用小写字母)
    'extension_dir' => 'extensions',
    
    // [实验功能] 为应用中心配置单独的域名
    'extension_host' => '',

    // 应用管理员的登录入口
    // 只有角色设置为应用管理员才生效
    // 应用管理员的登录方式
    'extension_admin_path' => 'appcenter',
    'extension_login_name' => 'email',

];

```
