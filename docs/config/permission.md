---
sidebar_position: 6
---

# 权限设置

config/suda_custom.php

```
<?php

return [
    // 扩展后台首页的布局
    'widget_extends'=>[
        'left'=>[
            // 'start'=>\Gtd\Suda\Widgets\Start::class,
        ],
        'right'=>[
            // 'welcome'=>\Gtd\Suda\Widgets\Welcome::class,
        ]
    ],
    
    // 自定义导航菜单
    'navi'=>[
        // [
        //     'url'=>'index',
        //     'target'=>'_self',
        //     'icon'=>'ion-pricetag',
        //     'name'=>'Goods'
        // ],
    ],

    // 上传类型
    // 上传组件的使用方式 @uploadBox(['good',1,1])
    // 后台接受 request->post['good'] = media_id 图片ID
    'media' => [
        'good'=>'App\Extensions\Goodmanager\Models\Good',
    ]
];
```




