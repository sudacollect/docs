#参数设置

*config/sudaconf.php*

> 部分场景下我们可能想要区分PC端和移动端浏览，不只是页面样式不同，甚至是完全一样的路径，不同的功能等。
> Suda 针对这种情况实现了一个 RedirectMobileMiddleware 用于做区分。

```
# 开启路径自动识别，开启后自动增加移动端路径前缀
# 例如 a.com/123 自动转为 a.com/mobile/123
'auto_mobile' => false,

#设置路径前缀
'mobile_prefix'=>'mobile',

#设置不需要增加移动前缀的路径
'except_mobile_prefix'=>[],
```

```
# 已经废弃
# Laravel 6之前的版本可能用得到
'force_secure'=>null,
```

图片加速

```
# 启用后图片将使用加速的地址
# 例如 cdn.a.com 用于图片加速
'static_host'=>'',
```

图片上传参数

```
'image' => [
    'storage'=>'local', //存储方式，目前只支持local
    'size'=>[
        'small'=>200, //缩略图小图尺寸
        'medium'=>400, //缩略图中图尺寸
    ]
],
```

Suda 内置的图片等静态资源

```
# 非必须无需修改
'core_assets_path'=>'/vendor/suda/assets',
```

### Theme

设置默认使用的主题

请不要修改

```
'theme'=>[
    'site'  =>'default', //pc website
    'mobile'=>'default', //mobile website
],
```

### Dashboard

```
# 密码链接字符，注意，修改后原密码失效
'password_link' => 'zp',
    
# 后台访问路径入口
'admin_path' => 'admin',

# 后台登录账号方式：email,username,phone目前支持三种
'admin_loginname'=>'email',
    
# 后台独立的域名
'admin_host' => '',
    
    
# 后台缓存方式
'admin_cache' => 'file',
    
# 默认菜单，可根据项目需要修改成自己的菜单结构
'default_menu' => 'suda',


# 侧边栏菜单是否启用两级联动效果，目前只支持一个参数: pro
# 默认关闭
'sidemenu_style' => 'pro',

```

### 后台首页

```
# 这个参数用于搭建后台首页，不需要修改
# 学习开发自定义widget后可设置为自定义的内容
# 可通过 suda_custom 进行扩展
'widget'=>[
    'dashaboard'=>[
        'start'=>\Gtd\Suda\Widgets\Start::class,
        'quickin'=>\Gtd\Suda\Widgets\Quickin::class,
        'news'=>\Gtd\Suda\Widgets\News::class,
    ],
    'entry'=>[
        'extension'=>\Gtd\Suda\Widgets\Entry\Extension::class,
    ],
],

```

```
# 这个参数不要修改
'controllers'=>[
    'namespace'=>[
        'admin'=>'Admin',
        'site'=>'Site',
        'mobile'=>'Mobile',
    ]
],
```

```
# 这个参数不要修改
# 通过 suda_custom 进行扩展
'media'=>[
    'types_model'=>[
        // 'page'=>'Gtd\Suda\Models\Page',
        // 'article'=>'Gtd\Suda\Models\Article',
    ]
],
```

## suda_custom 自定义设置

在 /config 目录下创建 suda_custom.php 文件

```
# 完整的例子
<?php

return [
    # 分为左右两栏，可增加自定义widget到控制台首页
    # 例如增加销量统计/商品排行榜等
    'widget_extends'=>[
        'left'=>[
            // 'start'=>\Gtd\Suda\Widgets\Start::class,
        ],
        'right'=>[
            // 'welcome'=>\Gtd\Suda\Widgets\Welcome::class,
        ]
    ],
    
    # 可增加自定义菜单到顶部导航栏
    # 用于多应用/模块的复杂系统
    'navi'=>[
        // [
        //     'url'=>'index',
        //     'target'=>'_self',
        //     'icon'=>'ion-pricetag',
        //     'name'=>'商品'
        // ],
        // [
        //     'url'=>'index',
        //     'target'=>'_self',
        //     'icon'=>'ion-reader',
        //     'name'=>'订单'
        // ],
        // [
        //     'url'=>'index',
        //     'target'=>'_self',
        //     'icon'=>'ion-person',
        //     'name'=>'会员'
        // ]
    ],
    
    # TODO: 未来这里会更新为新的方案
    # 自定义图片类型
    # 用于上传时指定上传参数，例如不指定时
    # 接受的参数时 $request->images 表示图片文件
    # 指定时，例如指定 page
    # 上传组件中设置page，然后接受的参数就是
    # $request->page 表示图片文件
    'media'=>[
        'types_model'=>[
            // 'page'=>'Gtd\Suda\Models\Page',
            // 'article'=>'Gtd\Suda\Models\Article',
        ]
    ],
];

```
具体以配置文件为准。


