---
sidebar_position: 5
---

# Custom

config/suda_custom.php

```
<?php

return [
    // custom widget
    'widget_extends'=>[
        'left'=>[
            // 'start'=>\Gtd\Suda\Widgets\Start::class,
        ],
        'right'=>[
            // 'welcome'=>\Gtd\Suda\Widgets\Welcome::class,
        ]
    ],
    
    // custom navi
    'navi'=>[
        // [
        //     'url'=>'index',
        //     'target'=>'_self',
        //     'icon'=>'ion-pricetag',
        //     'name'=>'Goods'
        // ],
    ],

    // custon media_type
    // example: @uploadBox(['good',1,1])
    // request->post['good'] = media_id 
    'media' => [
        'good'=>'App\Extensions\Goodmanager\Models\Good',
    ]
];
```




