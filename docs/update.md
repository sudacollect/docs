
#更新


#### 开源版本

```
#在线更新
composer update gtdxyz/suda
```

#### 企业私有部署

```
1. 在用户中心下载最新版本替换
2. 替换后执行 composer update gtd/suda
```

#### 资源/数据表更新


```
#静态资源
php artisan suda:reset assets
```

```
#自带模板
php artisan suda:reset themes
```

```
#数据表更新
php artisan migrate
```



