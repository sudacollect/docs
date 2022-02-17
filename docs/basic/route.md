#路由

路由机制主要分为：

1. 控制台路由
2. 前端路由
3. 应用路由

控制台路由将会自动在所有链接上默认增加 admin_path 路径前缀

例如 `http://your-domain/{admin_path}/user`


---

前端路由配置 web.php 

---

应用路由主要是指应用包含控制台功能的时候，路由的组成方式是

```
admin_path/extension_slug/your-route
```


扩展学习

[Laravel 路由机制](https://laravel.com/docs/5.8/routing)



