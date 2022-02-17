#安装说明

Zest 系统开发组件 

* Laravel = 5.8|6.x
* PHP >= 7.1.3
* MySQL >= 5.7

### 1. 安装 Loaders

加密版本请先安装 loaders

| 平台   | 下载地址   | 
|:----|:----|
| linux   | [ixed.7.1.lin](https://docs.quyouinc.com/loaders/linux-x86_64/ixed.7.1.lin) | 
| linux   | [ixed.7.2.lin](https://docs.quyouinc.com/loaders/linux-x86_64/ixed.7.2.lin) | 
| windows   | [ixed.7.1.win](https://docs.quyouinc.com/loaders/windows-x86_64/ixed.7.1.win)   | 
| windows   | [ixed.7.2.win](https://docs.quyouinc.com/loaders/windows-x86_64/ixed.7.2.win)   | 
| MacOs   | [ixed.7.1.dar](https://docs.quyouinc.com/loaders/macosx/ixed.7.1.dar)  | 
| MacOs  | [ixed.7.2.dar](https://docs.quyouinc.com/loaders/macosx/ixed.7.2.dar)  | 

以 Linux 配置为例

部署ixed.7.1.lin

```
php/lib/php/extensions/no-debug-non-zts-20131226/ixed.7.1.lin
```

配置php.ini

```
extension = ixed.7.1.lin
```
重启 nginx/php-fpm 完成配置


### 2. 安装包

请在用户中心下载列表中下载安装包.

### 3. 数据库

**MySQL 5.7+版本,数据库编码 utf8mb4**

修改数据表前缀 config/database.php

修改数据库账号密码 .env

### 4. 执行更新

```
composer update
```


### 5. 安装 Zest


```
php artisan zhila:install
```

安装完成后，可修改 config/zhila.php 中参数

例如 可修改成自定义的后台登录入口

```
'admin_path' => 'admin',
```

*安装完成后参照《使用授权》完成授权码的安装即可启用。*

