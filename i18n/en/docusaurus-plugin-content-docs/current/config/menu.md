---
sidebar_position: 3
---

# Menu

Three built-in menu schemes.

### 1. Admin Menu

```
{!! menu(group,view ['current_menu'=>$current_menu]) !!}
```

Creat directly in the admin of the system, and the composition of the menu consists of ```menu-group``` and  ```menu``` .


@param1 group_name

First parameter ```group_name``` 

Example:
```
{!! menu('suda', 'sidebar',[]) !!}
```

@param2 view

Display style，support ```sidebar```,```topbar```.


@param3 options, Array.  

options contains:

```current_menu``` 

```locale``` 

```sidemenu_style``` suport flat and icon


### 2. custom navi


config/suda_custom.php 

```
'navi'=>[

            [
                'name'=>'Test',
                'icon'=>'ion-home',
                'url'=>'menu',
                'target'=>'',
                // 'slug'=>'tool',
                'children'=>[
                    'child'=>[
                        'name'=>'Help',
                        'icon'=>'ion-home',
                        'url'=>'menu',
                        'target'=>'',
                        'slug'=>'child'
                    ]
                ]
            ],

        ],

```

:::caution

Must config Slug  

:::


### 3. Extension menu

Reference to [Extension](https://docs.gtd.xyz/docs/extension)
