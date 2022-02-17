#内置函数

同方法asset, 支持使用加速的CDN静态资源链接

```
passet($path,$secure=null)
```

定位到基础静态资源目录

```
zhila_path($path='')
```

定位模板目录

```
theme_path($path='')
```

图片显示

```
$data = Media::first();
$options=[
	size="尺寸大小,small,medium,large",
	imageClass="输出的图片样式",
	'title'=>'图片名称',
	'url'=>'是否只输出url'
];

zhila_image($data,$options=[],$cdn=true);

```

头像显示

```
zhila_avatar($avatar,$size,$return_url=false);
```

判断移动端

```
isMobile();
```

后台链接

```
//使用方法同url, 会自动增加后台路径前缀
admin_url();
```

应用路径

```
extension_path($path='');
```

应用静态资源

```
//第一个参数是应用的slug
extension_asset($slug,$path="");
```

