#权限管理


内置的权限管理主要考虑以下内容

1. 菜单是否跟随权限显示和隐藏
2. 对功能入口的权限控制
3. 应用的权限问题

基于这样的需求，权限方案以 Policy 和 Permission 组合策略。

### 系统权限

在后台的控制器中使用

注册Policy

```
protected $policies = [
...
\Ecdo\Zhila\Models\Setting::class => SettingPolicy::class,
...
]
```

在控制器方法中使用, 如果授权失败自动跳转到403错误提示。

```
function viewSetting(){
	$this->gate('setting.view',app(\Ecdo\Zhila\Models\Setting::class));
	....
}

```

也可以这样使用

```
use Illuminate\Support\Facades\Gate;


function viewSetting(){
	if(Gate::allows('setting.view',app(\Ecdo\Zhila\Models\Setting::class)))
	{
		//继续执行
	}
	....
}

```

### 应用权限

应用的默认权限是跟随菜单的，即设置好菜单，即可使用权限功能。

应用菜单设置部分请参考 [<应用开发>](https://docs.quyouinc.com/dev-extension/)

当完成应用安装后，可以在系统设置-角色设置中对角色设置应用权限。

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
            ],
            [
                'title'     => '演示设置',
                'slug'      => 'demo_setting',
                'url'       => 'extension/demo/setting',
                'icon_class'=> 'zly-gear',
                'target'     => '_self',
                'order'     => 0,
            ],
        ],
    ],
    ...
```

应用安装后，就可以在系统角色管理中看到应用的权限配置。

在控制器中的使用方法

```
$this->gate('demo.demo_menu.demo_index',app(Setting::class));
```

说明:
演示案例使用的是 ```Setting::class```这不仅是为了方便演示，在实际系统内判断控制器入口也可以这么使用，会自动调用系统内置的权限来判断。

### 自定义Policy

**1.重写AuthService**

不建议此方式，可能会因为Laravel的版本升级或者 ZEST 的版本升级导致某些功能失效。

当然如果你对 Laravel 的结构设计非常熟悉了解，也可以采用此方法来实现自己的AuthService.

**2.应用内自定义权限**

如本页内容介绍，初步的话可以跟随菜单权限来使用，这样可以实现一般的权限要求。

如果你需要自定义权限，可以在使用以下的方法

```
<?php

namespace App\Extensions\Demo\Controllers;

use Ecdo\Zhila\Http\Controllers\Admin\ExtensionController;

use Illuminate\Support\Facades\Gate;

class AdminController extends ExtensionController{
    
    public $single_extension_menu = true;
    
    public function __construct(){

        parent::__construct();


        //增加policy映射关系
        Gate::policy(\App\Extensions\Models\DemoUser::class, \App\Extensions\Demo\Policies\DemoPolicy::class);
        
        //定义权限
        Gate::define('custom.view', 'App\Extensions\Demo\Policies\CustomPolicy@view');
    }
}
```

可以这样定义DemoPolicy

```
<?php

namespace App\Extensions\Demo\Policies;


use Ecdo\Zhila\Policies\BasePolicy;

class CustomPolicy extends BasePolicy
{
    
    protected function view()
    {
    	 //以下为直接使用的参数
    	 
    	 //$this->user = 当前用户
    	 //$this->model = 传入的 app(DemoUser::class)
    	 
    	 //demo.view解析
    	 //$this->policy_name = demo
    	 //$this->method_name = view 
    	 
        //可增加自定义的方法
        //return parent::checkPermission();
    }
    
    
}
```

其中 BasePolicy 会自动对```Gate::allows```传入的参数进行自动拆分

自定义方法时必须遵守这样的书写规则 ```demo.view```

第一个参数demo 对应的控制器或者Policy，例如 PostPolicy 对应 ```post.view```
第二个参数view 对应权限方法



> 了解 [Laravel/Authorization](https://laravel.com/docs/5.7/authorization)

