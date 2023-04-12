---
sidebar_position: 7
---

# 视图

介绍 blade template 的规则。

安装 suda 后，系统将具有不同规则和目录来处理 blade template 文件。

---

深入了解学习 [Blade Tempalte](https://laravel.com/docs/10.x/blade)

---

### 目录


#### suda 默认的视图

> [suda_assets]/resources/views/admin  
[suda_assets]/resources/views/site

使用方法

```
$this->display('view_suda::admin.help')
```

#### extension 应用视图

本地开发应用
> app/Extensions/[应用目录]/resources/views

使用方法

```
$this->display('view_extension::[应用目录].help')
```

#### theme 模板视图

本地开发应用
> public/theme/admin/[模板目录]/views  
public/theme/site/[模板目录]/views

使用方法

```
$this->display('theme_admin::help')
$this->display('theme_site::help')
```

说明：系统会自动获取当前模板, theme_admin 中 admin 指的系统内的模块。


### 调用规则

判断顺序依次是：
- ```/resources/views```
- ```/public/theme/[模板目录]/views```
- ```最后是根据系统规则定义的view```

:::note

如果需要覆盖重写 suda 系统内的 view， 只需要在  ```/resources/views``` 下创建相同目录和文件即可。

:::



