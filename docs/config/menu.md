---
sidebar_position: 3
---

# 左侧菜单

内置有三种基础的方案可以修改菜单设置。

### 1. 后台菜单管理

```
{!! menu(group,view ['current_menu'=>$current_menu]) !!}
```

在系统后台可以直接创建菜单，菜单的组成由 ```菜单组``` 和 ```菜单项``` 组成。


参数1 group_name

调用菜单组就只需要将第一个参数 ```group_name``` 修改成对应的菜单组名称。

例如
```
{!! menu('suda', 'sidebar',[]) !!}
```

参数2 view

是指菜单的view样式，默认支持```sidebar```和```topbar```两种方案。


参数3 options, 以数组的形式传入。  

支持的参数

```current_menu``` 表示当前菜单

```locale``` 表示当前语言

```sidemenu_style``` 有 flat 和 icon 两种选项表示是显示文字菜单和图标菜单


### 2. 自定义导航菜单


config/suda_custom.php 配置自定义导航菜单，主要用于定制特殊入口使用

```
'navi'=>[

            [
                'name'=>'测试菜单',
                'icon'=>'ion-home',
                'url'=>'menu',
                'target'=>'',
                // 'slug'=>'tool',
                'children'=>[
                    'child'=>[
                        'name'=>'子菜单',
                        'icon'=>'ion-home',
                        'url'=>'menu',
                        'target'=>'',
                        'slug'=>'child'
                    ]
                ]
            ],

        ],

```

**说明**

> 菜单配置必须配置Slug

> 使用方式：通过 custom-navi 可以在顶部增加应用入口


### 3. 应用菜单

参考 [应用开发说明](https://docs.gtd.xyz/docs/extension)
