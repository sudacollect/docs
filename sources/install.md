#安装说明

SUDA-速搭 系统开发组件 

* Laravel >= 6.x
* PHP >= 7.2
* MySQL >= 5.7

### 1. composer 安装

```
composer require gtdxyz/suda
```

### 2. 安装包

请在用户中心下载列表中下载安装包.

也可自行安装好之后, 需要修改文件如下：

config/app.php


1）将语言修改成中文

```
'locale' => 'zh_CN',
```
将时区修改为GMT+8

```
'timezone' => 'Asia/Shanghai',
```

2）更改数据库配置

config/database.php 和 .env


3）增加guard

config/auth.php

增加guard

```
    
'operate' => [
        'driver' => 'session',
        'provider' => 'authsuda',
 ],
```

增加providers

```
'authsuda' => [
        'driver' => 'authsuda_provider',
        'model' => Gtd\Suda\Models\Operate::class,
],
```


### 3. 数据库

修改数据表前缀 config/database.php

修改数据库账号密码 .env

**MySQL 5.7+版本,数据库编码 utf8mb4**

### 4. 执行更新

```
composer update
```

### 5. 安装 SUDA


```
php artisan suda:install
```

安装完成后，可修改 config/sudaconf.php 中参数

例如 可修改成自定义的后台登录入口

```
'admin_path' => 'admin',
```


### 6. 初始登陆账号和密码

账号 admin@gtd.xyz

密码 suda#2021
