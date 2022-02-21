#安装

### Requirements

* Laravel >= 8.x
* PHP >= 7.3
* MySQL >= 5.7

### 1. Composer

```
composer require gtdxyz/suda
```

*Or download && install*

从 [Suda Releases](https://github.com/sudacollect/suda/releases) 下载最新的安装包

解压后把 suda 文件夹放到 <项目根目录>（和app、storage等相同目录）

**修改 composer.json**

1) 在require 或者 require-dev 下面增加

```
"repositories": [{
        "type": "path",
        "url": "./suda"
 }],
```

2) 在 require 内新增

```
 "gtdxyz/suda": "*",
```

tips: 这种方式将不会跟随在线版本更新，需要手动进行版本升级


### 2. Auth && Locale



**1）增加guard**

*修改 config/auth.php*

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

**2）中文修改**

*修改 config/app.php*

```
'locale' => 'zh_CN',
```
将时区修改为GMT+8

```
'timezone' => 'Asia/Shanghai',
```


**3）数据库配置**

*数据库编码推荐 utf8mb4*

配置数据库连接

表前缀 config/database.php
数据库账号密码 .env


### 4. Update

```
composer update
```

### 5. Install


```
php artisan suda:install
```

安装完成后，可修改 *config/sudaconf.php* 参数

自定义的后台登录入口

```
'admin_path' => 'admin',//可以修改成其他路径
```


### Default Login

账号 admin@gtd.xyz

密码 suda#2021
