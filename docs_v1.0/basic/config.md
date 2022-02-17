#配置说明

*config/zhila.php*

设置默认模板

```
'theme'=>[
        'site'  =>'default',
        'mobile'=>'default',
    ],
```

基础静态资源

```
'assets_path'=>'/vendor/zhila/assets',
```

语言包

```
'locale'=>'zh-CN',
```

是否显示版权信息

```
'with_copyright'=>true,
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

控制面板首页feed信息

```
'widget'=>[
        'dashaboard'=>[
            'start'=>\Ecdo\Zhila\Widgets\Start::class,
            'news'=>\Ecdo\Zhila\Widgets\News::class,
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

默认菜单组，可以设置，这样控制台的默认菜单组可以修改

```
'default_menu'       => 'zhila',
```

# 图片关联模型

```
'media'=>[
        'types_model'=>[
            'page'=>'Ecdo\Zhila\Models\Page',
            'article'=>'Ecdo\Zhila\Models\Article',
        ]
    ],
```

# 扩展导航菜单

config/zhila.php 配置自定义导航菜单，主要用于定制特殊入口使用

```
'custom'=>[

        'navi'=>[

            [
                'name'=>'测试菜单',
                'icon'=>'zly-gear-s',
                'url'=>'menu',
                'target'=>'',
                // 'slug'=>'tool',
                'children'=>[
                    'tool_extend'=>[
                        'name'=>'子菜单',
                        'icon'=>'zly-gear-s',
                        'url'=>'menu',
                        'target'=>'',
                        'slug'=>'tool_extend'
                    ]
                ]
            ],

        ],

    ],

```

**说明**

> 菜单配置必须配置Slug

> 通过 custom-navi 的方式结合自定义开发，也可以实现类似 extension 的效果，适合定制要求特殊的开发需求。
