---
sidebar_position: 6
---

# 控制器

### AdminController

后台入口控制器，是其他控制器的父级，主要负责处理：

- middleware 判断是否登录和后台用户
- $this->user 参数，后台登录用户
- $this->gate('menu.item') 权限判断方法

```
Gtd\Suda\Http\Controllers\AdminController
```

### DashboardController

控制台入口控制器

- 控制台入口
- 控制台菜单
- 控制台视图和资源

```
use Gtd\Suda\Http\Controllers\AdminController;
Gtd\Suda\Http\Controllers\Admin\DashboardController extends AdminController
```

### ExtensionController

应用控制器父级。 应用开发中后台需继承这个控制器。

- 获取当前应用信息
- 处理应用资源

```
Gtd\Suda\Http\Controllers\Admin\ExtensionController;
```

### 控制器示例

```
<?php

namespace YourExtension;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

use Gtd\Suda\Http\Controllers\Admin\DashboardController;

use Gtd\Suda\Models\Media;

class YourController extends DashboardController
{

    public function index(Request $request)
    {
        // 判断权限
        $this->gate('youru_menu.index');

        // 面包屑导航
        $this->breadParent('控制面板','/');
        $this->breadSet('我的应用','');

        // 页面标题
        $this->title('我的应用');
        // 设置当前菜单
        $this->setMenu('your_menu','index');

        // 设置页面数据
        $this->setData('your_test',['your'=>'test']);
        $this->setData('your_data',['your'=>[
            'a' => 'a',
            'b' => 'b',
        ]]);

        // responseJson
        // self.refresh 表示当前页面刷新
        return $this->responseAjax('fail','操作错误',$redirect_url?$redirect_url:'self.refresh');
        return $this->responseAjax('success','操作成功',$redirect_url?$redirect_url:'self.refresh');

        // 跳转
        return $this->redirect('404', 'pages not found');

        // 当前路由直接返回错误
        return $this->dispatchError(404, 'pages not found');

        

        // 输出显示
        // your.index 存储目录 [应用目录]/resources/views/admin/your/index
        return $this->display('your.index');
    }
}
```

