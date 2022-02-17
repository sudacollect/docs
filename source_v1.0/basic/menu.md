# 菜单方案

内置有三种基础的方案可以修改菜单设置。

### 系统菜单管理

```
{!! menu('menu_group_name','view' ['current_menu'=>$current_menu]) !!}
```

在系统后台可以直接创建菜单，菜单的组成由 ```菜单组``` 和 ```菜单项``` 组成。

调用菜单组就只需要将第一个参数 ```menu_group_name``` 修改成对应的菜单组名称即可。

参数2 view，是指菜单的view样式，默认支持```sidebar```和```topbar```两种方案。

参数3 options, 以数组的形式传入。  

支持的参数

```current_menu``` 表示当前菜单

```locale``` 表示当前语言

```sidemenu_style``` 有 flat 和 icon 两种选项表示是显示文字菜单和图标菜单

### 应用扩展菜单

参考[应用开发说明](https://docs.quyouinc.com/dev-extension/)

### 自定义导航菜单

参考[配置说明](https://docs.quyouinc.com/basic/config/) 

通过自定义navi参数，可以设置特殊的导航菜单.