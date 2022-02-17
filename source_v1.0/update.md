
#更新


#### 在线更新方法

```
#企业级私有版本
composer update ecdo/zhila
```

#### 下载更新

```
在用户中心下载最新版本替换
替换后执行以下 资源/数据表 更新即可
```


#### 资源/数据表更新

**静态资源和模板 更新**

```
#更新静态资源
php artisan zhila:reset assets
```

```
#更新自带模板
php artisan zhila:reset themes
```



```
#数据表更新
php artisan migrate
```



