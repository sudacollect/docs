---
sidebar_position: 8
---

# 模板主题

为系统或应用设计制作模板。

### 模板结构

例如 public/theme/site/default

```
├── designs  
│   ├── css  
│   │   ├── *.css    
│   ├── images   
│   ├── js  
│   │   ├── **/*.js  
│   └── icons
├── views  
│   ├── admin  
│   │   ├── *.blade.php      
│   ├── site  
│   │   ├── *.blade.php  
│   └── other  
├── README  
├── theme.php  
└── screenshot.png  
```

### 配置文件

```php
<?php

return[
    
    'default'=>[
        'name'=>'默认主题',
        'description'=>'主题描述',
        'version'=>'1.0',
        'suda_version'=>'>1.0',//=表示只是配当前版本,>表示必须大于某个版本,<表示必须小于某个版本
        'theme_url'=>'http://your-site.com', //主题在线地址
        'author'=>'suda',
        'author_email'=>'name@your-site.com',
        'author_url'=>'http://your-site.com',
        'widgets'=>[
            'sidebar'=>[
                'name'=>'sidebar',
                'max'=>3,
            ],
            'content'=>[
                'name'=>'content',
                'max'=>2,
            ]
        ]
    ]
    
];
```

### screenshot

```screenshot.png``` 建议尺寸 500*500像素




