#权限管理

系统内以菜单结构为基础，内置角色权限的管理功能。

应用菜单设置部分请参考 [<应用开发>](https://docs.quyouinc.com/v2.0/dev-extension/)

当完成应用安装后，可以在```系统设置-角色设置```中设置应用权限。

以Demo应用来说明

菜单结构如下

```
return [
    
    'demo_menu'=>[
        'single'    => true,
        'title'     => '演示应用',
        'slug'      => 'demo_menu',
        'url'       => 'extension/demo/index',
        'icon_class'=> 'zly-stack',
        'target'     => '_self',
        'order'     => 0,
        
        'children' => [
            [
                'title'     => '演示首页',
                'slug'      => 'demo_index',
                'url'       => 'extension/demo/index',
                'icon_class'=> 'zly-home',
                'target'     => '_self',
                'order'     => 0,
            ]
        ],
    ],
    ...
```

在控制器中的使用方法

```
$this->gate('demo_menu.demo_index',false);


gate方法：

参数1: 菜单结构

参数2: 表示是否是ajax请求, 如果true, 则返回对应的json格式结果

```


### 自定义Policy

**重写AuthService**

不建议此方式，可能会因为Laravel的版本升级或者 ZEST 的版本升级导致某些功能失效。

当然如果你对 Laravel 的结构设计非常熟悉了解，也可以采用此方法来实现自己的AuthService.


> 了解 [Laravel/Authorization](https://laravel.com/docs/5.8/authorization)

