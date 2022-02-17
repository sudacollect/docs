#配置说明

*config/sudaconf.php*

设置默认模板

```
'theme'=>[
        'site'  =>'default',
        'mobile'=>'default',
    ],
```

基础静态资源

```
'assets_path'=>'/vendor/suda/assets',
```

语言包

```
'locale'=>'zh-CN',
```

是否显示版权信息

```
'with_copyright'=>false,
```

强制https

```
'force_secure'=>false,
```

静态资源（图片,css,js)的加速设置，可以设置为CDN地址

```
'static_host'=>'',
```

图片的默认存储方式  
图片的三个尺寸的大小，当上传尺寸大于以下尺寸时，会自动生成对应的图片

```
'image' => [
        'storage'=>'local',
        'size'=>[
            'small'=>200,
            'medium'=>400,
        ]
    ],

```

控制面板首页组件

```
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

默认控制器的路径

```
'controllers'=>[
        'namespace'=>[
            'admin'=>'Admin',
            'site'=>'Site',
            'mobile'=>'Mobile',
        ]
    ],

```

控制台登录的用户名，可设置为phone使用手机登录

```
'operate_loginname'=>'email',
```

控制台访问路径，可以修改

```
'admin_path' => 'admin',
```

可以单独为控制台设置缓存方式

```
'admin_cache' => 'file',
```

默认菜单组

```
'default_menu'       => 'suda',
```

是否启用专业菜单组

```
//'sidemenu_style' => 'pro',
```

# 图片关联模型

```
'media'=>[
        'types_model'=>[
            'page'=>'Gtd\Suda\Models\Page',
            'article'=>'Gtd\Suda\Models\Article',
        ]
    ],
```


