---
sidebar_position: 1
---

# Intro

Let's start with  **Laravel Suda**.

## Versions

---

|  Laravel   | Suda  | PHP  |
|  ----  | ----  | ----  |
| 11.x  | 11.x(current) | 8.2+ |
| 10.x  | 10.x | 8.1+ |
| 9.x  | 9.x | 8.0.2+ |
| 8.x  | 8.x | 8.0+ |
| 7.x  | 5.2.1 | 7.2~7.4 |


### Requirments

- [Laravel](https://laravel.com/) version 10.x:
- [Composer](https://getcomposer.org) version 2.x:


### Install

Need to install Laravel before, reference to [Laravel](https://laravel.com/)

1. require Suda

```
composer require gtdxyz/suda
```
2. .env

```
#========= edit .env =========
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=database_user
DB_PASSWORD=pass
```

3. Suda

```
php artisan suda:install
```

4. suda config

```
#========= edit .env =========
# If Chinese,
'locale' => 'zh_CN',
'timezone' => 'Asia/Shanghai',


#========= edit config/filesystems.php =========

//add to links
public_path('suda') => storage_path('app/suda'),

#========= edit config/auth.php =========

'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
	 // ADD operate guard
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
	 
	 // ADD provider
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

## start


### Suda 10+

|  Item   | Content  | Remark  |
|  ----  | ----  | ----  |
| Login  | yourdomain.com/admin | change 'admin' in config/sudaconf.php|
| Account  | admin@suda.run |  |
| Password  | suda#2021 |  |
