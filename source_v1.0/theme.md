# 目录说明
*此方法适用于制作前后台风格模板。*


theme.php 模板配置文件
screenshot.png 模板预览图
design/ 模板的样式表和JS文件
views/ 模板的blade文件

# 制作方法
## 1.配置模板文件
theme.php

```
<?php

return[
    
    'your-theme-slug'=>[
        'name'=>'定制主题',
        'description'=>'这是定制主题',
        'version'=>'1.0',
        'zhila_version'=>'>1.0',//=表示只是配当前版本,>表示必须大于某个版本,<表示必须小于某个版本
        'theme_url'=>'http://zest.quyouinc.com', //主题在线地址
        'author'=>'ZEST',
        'author_email'=>'dev@ecdo.co',
        'author_url'=>'https://zest.quyouinc.com',
    ]
    
];

```

## 2.生成模板预览图

screenshot.png 建议 500*500 像素

## 3.设计和制作模板

进行设计和制作模板

### 3.1 设计模板

推荐使用 sketch.app

### 3.2 模板blade

$zhila 是模板可直接使用的变量，包括 title、keywords、description 以及关于当前模板的描述信息

例如：网页标题

```
<title>{{ metas($zhila) }}</title>
```

JS常量，可以像示例代码这样定义常用变量

```
<script>
        window.zhila = window.zhila || {};
        zhila.meta = { csrfToken: "{{csrf_token()}}",url:"{{url('/')}}" }
    </script>

```

blade 路径参数

```
@include('view_layout::layouts.sidebar')
```
view_layout 默认指向到当前模板的目录

如果是应用开发，使用 extension:: 默认指向到应用的resources/views/目录


## 4.更新模板

点击更新模板缓存即可看到最新的模板信息。


