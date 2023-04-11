---
sidebar_position: 1
---

# 开始

开始使用 **Laravel Suda**.

## 版本兼容

---

|  Laravel   | Suda  | PHP  |
|  ----  | ----  | ----  |
| 10.x  | 10.x(dev) | 8.1+ |
| 9.x  | 9.x | 8.0.2+ |
| 8.x  | 8.x | 8.0+ |
| 7.x  | 5.2.1 | 7.2~7.4 |


### 环境要求

- [Laravel](https://laravel.com/) version 10.x:
- [Composer](https://getcomposer.org) version 2.x:


### 安装

您需要先安装 Laravel , 可以参考官方文档  [Laravel 文档](https://laravel.com/)

1. 引入 Suda

```
composer require gtdxyz/suda
```
2. 配置数据库

如果已经配置可以忽略

```
#========= edit .env =========
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=数据库
DB_USERNAME=数据库帐号
DB_PASSWORD=数据库密码
```

3. Suda 安装

```
php artisan suda:install
```

4. 修改配置文件

```
#========= edit config/app.php =========
# 中文修改建议
'locale' => 'zh_CN',
'timezone' => 'Asia/Shanghai',

#========= edit config/auth.php =========

'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
	 // 增加 operate guard
    'operate' => [
        'driver'    => 'session',
        'provider'  => 'operates',
    ],
],

'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],
	 
	 // 增加 provider
    'operates' => [
        'driver' => 'authsuda_provider',
        'model' => Gtd\Suda\Models\Operate::class,
    ],

    // 'users' => [
    //     'driver' => 'database',
    //     'table' => 'users',
    // ],
],

```

## 启动信息


### Suda 10.x

|  项目   | 内容  | 说明  |
|  ----  | ----  | ----  |
| 后台入口  | yourdomain.com/admin | 可以在 config/sudaconf.php 中修改后台路径|
| 登录帐号  | admin@suda.run |  |
| 登录密码  | suda#2021 |  |
