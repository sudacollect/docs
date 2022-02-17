#标签


> 标签的使用可以参照[分类管理](https://docs.quyouinc.com/basic/taxonomy/)来进行使用，进行深度定制。


**1. Model 设置**

Model中的设置

```
use Illuminate\Database\Eloquent\Model;
use Ecdo\Zhila\Traits\HasTaxonomies;

class Article extens Model

{
	use HasTaxonomies;
	
	public function tags(){
        return $this->morphMany('Ecdo\Zhila\Models\Taxable', 'taxable')->with(['taxonomy'=>function($query){
            $query->where('taxonomy','post_tag')->with('term');
        }]);
    }
}

```


获取某一标签下的内容

```
//request $tag_id
Article::where(['enable'=>1])->whereHas('tags',function($query) use ($category_id){
                $query->where('taxonomy_id',$tag_id);
            })
```



**2. 控制器 设置**

```
<?php

namespace Ecdo\Zhila\Http\Controllers\Admin\Article;


use Illuminate\Http\Request;

use Ecdo\Zhila\Http\Controllers\Admin\DashboardController;


use Ecdo\Zhila\Models\Article;
use Ecdo\Zhila\Traits\TagTrait;


class TagController extends DashboardController
{
    use TagTrait;
    
    public $redirect_url = 'article/tags';
    public $taxonomy_name = 'post_tag';
    
    function __construct(){
        parent::__construct();
        
        $this->title('标签管理');
        $this->setMenu('article','article_tag');
        
    }
    

}


```

参数 ```$redirect_url ``` 设置成功和失败时的跳转URL

参数 ```$taxonomy_name ``` 设置标签的名称

设置分类的列表和管理

```
public function viewConfig(){

        return [

            'list'=>'zhila::taxonomy.tag.list',
            'create'=>'zhila::taxonomy.tag.add',
            'update'=>'zhila::taxonomy.tag.edit',
        ];

    }
```

设置相关的链接

```
//设置自定义的链接
public function buttonConfig(){

    $buttons = [];

    $buttons['create']  = 'article/tag/add';
    $buttons['update']  = 'article/tag/update';
    $buttons['save']    = 'article/tag/save';
    $buttons['delete']  = 'article/tag/delete';
    $buttons['sort']    = 'article/tag/editsort';
    
    return $buttons;
}
```

可根据需要设置路由即可。






