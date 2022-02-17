#分类


**1. Model 设置**

Model中的设置

```
use Illuminate\Database\Eloquent\Model;
use Ecdo\Zhila\Traits\HasTaxonomies;

class Article extens Model

{
	use HasTaxonomies;
	
    //post_category 为自定义的分类识别字符串
	public function categories(){
        return $this->morphMany('Ecdo\Zhila\Models\Taxable', 'taxable')->with(['taxonomy'=>function($query){
            $query->where('taxonomy','post_category')->with('term');
        }]);
    }
}

```


获取某一分类下的内容

```
//request $category_id
Article::where(['enable'=>1])->whereHas('categories',function($query) use ($category_id){
                $query->where('taxonomy_id',$category_id);
            })
```



**2. 控制器 设置**

```
<?php

namespace Ecdo\Zhila\Http\Controllers\Admin\Article;

use Illuminate\Http\Request;
use Ecdo\Zhila\Http\Controllers\Admin\DashboardController;

use Ecdo\Zhila\Models\Article;
use Ecdo\Zhila\Traits\TaxonomyTrait;


class CategoryController extends DashboardController
{
    use TaxonomyTrait;

    public $redirect_url = 'article/categories';
    public $taxonomy_name = 'post_category';
    
    function __construct(){
        parent::__construct();
        
        $this->title('管理分类');
        $this->setMenu('article','article_category');

        
        //增加自定义的权限控制
        $this->middleware(function (Request $request, $next) {
            $this->gate('article.update',app(Article::class));
            
            return $next($request);
        });
        
    }
    

}

```

参数 ```$redirect_url ``` 设置成功和失败时的跳转URL

参数 ```$taxonomy_name ``` 设置分类的名称

设置分类的列表和管理

```
public function viewConfig(){

        return [

            'list'=>'zhila::taxonomy.category.list',
            'create'=>'zhila::taxonomy.category.add',
            'update'=>'zhila::taxonomy.category.edit',
        ];

    }
```

设置相关的链接

```
//设置自定义的链接
public function buttonConfig(){

    $buttons = [];

    $buttons['create']  = 'article/category/add';
    $buttons['update']  = 'article/category/update';
    $buttons['save']    = 'article/category/save';
    $buttons['delete']  = 'article/category/delete';
    $buttons['sort']    = 'article/category/editsort';
    
    return $buttons;
}
```

可根据需要设置路由即可


### 常用方法

```
use Ecdo\Zhila\Models\Taxonomy;

//显示所有分类
public function showCategories()
{
    $taxonomyObj = new Taxonomy;
    $catgories = $taxonomyObj->lists('post_category');
    $this->setData('categories',$catgories);
    return $this->display('article.category.list');
}
```



```
//编辑分类
public function showEdit()
{
    $term = Taxonomy::where('id',$id)->where('taxonomy','post_category')->with('term')->first();
    
    if(!$term){
        return $this->responseAjax('error','分类不存在');
    }
    
    $this->setData('term',$term);
    $this->title('编辑分类');
    return $this->display('article.category.edit');
}
```


```
//自定义保存分类
public function save(Request $request)
{
    //前置检查 start
    
    //前置检查 end
    
    if($id) {
        //编辑
        
        $taxonomy = Taxonomy::where('id',$request->id)->first();
            
        $taxonomy->where('id',$taxonomy->id)->update([
            'term_id'   => $taxonomy->term_id,
            'taxonomy'  => 'post_category',
            'parent'    => $request->parent,
            'desc'      => $request->desc,
            'sort'      => $request->sort,
        ]);
        
        Term::where('id','=',$taxonomy->term_id)->update([
            'name'=>$request->name,
            'slug'=>$request->slug,
            'taxonomy'=>'post_category',
        ]);
    
    } else {
        //新建
        
            $term = new Term;
        $term->fill([
            'name' => $request->name,
            'slug' => $request->slug,
            'taxonomy'=>'post_category'
        ])->save();
        
        $taxonomy = Taxonomy::where('taxonomy','post_category')->where('term_id',$term->id)->first();
        if(!$taxonomy){
            $taxonomy = new Taxonomy;
            $taxonomy->fill([
                'term_id'=>$term->id,
                'taxonomy'=>'post_category',
                'parent'=>$request->parent,
                'desc'=>$request->desc,
                'sort'=>$request->sort,
            ])->save();
        }else{
            $taxonomy->where('id',$taxonomy->id)->update([
                'term_id'=>$term->id,
                'taxonomy'=>'post_category',
                'parent'=>$request->parent,
                'desc'=>$request->desc,
                'sort'=>$request->sort,
            ]);
        }
    }
}
```





