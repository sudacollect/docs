---
sidebar_position: 1
---

# 分类

分类的开发

建议安装分类管理工具 [FastTaxonomy](https://github.com/sudacollect/fasttaxonomy)

可使用 taxonomy 自定义开发分类管理或者是多级管理数据，例如部门。

```
Gtd\Suda\Traits\TaxonomyTrait
// 内置的方法
public function getList(Request $request)
public function create(Request $request,$parent_id=0)
public function update(Request $request,$id=0)
public function save(Request $request)
public function delete(Request $request,$id)
public function editSort(Request $request)

protected function getViews($type='list')
protected function getActions()

public function viewConfig(): array
public function actionConfig(): array

```


### 控制器

```
<?php

namespace Gtd\Suda\Http\Controllers\Admin\User;

...
use Gtd\Suda\Traits\TaxonomyTrait;

class OrganizationController extends DashboardController
{
    use TaxonomyTrait;

    public $taxonomy_name = 'org_category';
    public $taxonomy_title = '部门';

    // 视图层的配置
    // 可以根据需要自定义对应view路径
    public function viewConfig(){

        return [

            'list'      => 'view_suda::taxonomy.category.list',
            'create'    => 'view_suda::taxonomy.category.add',
            'update'    => 'view_suda::taxonomy.category.edit',
        ];

    }

    // 路由配置
    public function actionConfig(){

        $buttons = [];
    
        $buttons['create']  = admin_url('user/organization/add');
        $buttons['update']  = admin_url('user/organization/edit');
        $buttons['save']    = admin_url('user/organization/save');
        $buttons['delete']  = admin_url('user/organization/delete');
        $buttons['sort']    = admin_url('user/organization/editsort');
    
        return $buttons;
    }
    

}

```
### 路由配置参考

```

Route::get('user/organization', $controller_prefix.'User\OrganizationController@getList');
Route::get('user/organization/add/{pid?}', $controller_prefix.'User\OrganizationController@create');
Route::get('user/organization/edit/{id}', $controller_prefix.'User\OrganizationController@update');
Route::post('user/organization/save', $controller_prefix.'User\OrganizationController@save');
Route::post('user/organization/delete/{id}', $controller_prefix.'User\OrganizationController@delete');
Route::post('user/organization/editsort/{id}', $controller_prefix.'User\OrganizationController@editSort');

```

### 使用方法

#### eloquent relationship

```
use Illuminate\Database\Eloquent\Model;
use Gtd\Suda\Traits\HasTaxonomies;

class Article extens Model

{
	use HasTaxonomies;
	
    //post_category 为自定义的分类识别字符串
	public function categories(){
        return $this->morphMany('Gtd\Suda\Models\Taxable', 'taxable')->with(['taxonomy'=>function($query){
            $query->where('taxonomy','post_category')->with('term');
        }]);
    }
}

// with('categories')

```

获取某一分类下的内容

```
//request $category_id
Article::where(['enable'=>1])->whereHas('categories',function($query) use ($category_id){
                $query->where('taxonomy_id',$category_id);
            })
```



#### View 中使用

下拉框 -选择分类

```
// multiple/single 单选和多选
<x-suda::select-category type="multiple" taxonomy="post_category" :placeholder="选择分类" />
```
后台提交

```
$category = $request->category;
```


