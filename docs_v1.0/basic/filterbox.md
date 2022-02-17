#右侧滑出框



> 可在控制后台参照文章的更多筛选功能
> 
> 内置函数已经支持调用滑出框和按钮动作、分页的ajax操作


##View 定义

###定义一个按钮

```
<button class="btn btn-default btn-xs pull-right more-filter" data-element=".data-list" style="position:absolute;right:15px;top:5px;"><i class="icon ion-md-options"></i>&nbsp;更多筛选</button>
```

关键参数 ```more-filter``` 用于赋予动作

关键参数 ```data-element``` 定义搜索结果的替换位置


###引入 filter 文件

```
@include('view_layout::article.filter')
```

```
<div class="zhila-filter-section" id="filter-options">
    <a href="javascript:void(0)" class="filter-close"></a>
    <h5 class="title"><i class="zly-screen"></i>&nbsp;更多筛选</h5>

    <div class="col-xs-12 content">

		<!-- 可修改区域 start -->
        <form action="{{ admin_url('article/filter') }}" class="filter-form">

            <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}" >
                <label for="title" class="control-label">
                    标题
                </label>
                <input type="text" name="title" class="form-control input-sm" id="title" placeholder="请输入标题">
            </div>

            <div class="form-group">
            		<!-- 按钮不可修改 -->
                <button class="btn btn-primary btn-sm filter-submit">立即筛选</button>
                <button class="btn btn-default btn-sm filter-reset">重置条件</button>
            </div>
        
        </form>
		<!-- 可修改区域 end -->
        
    </div>


</div>
```

### 定义JS

```
@push('scripts')
<script type="text/javascript">
    
    $(document).ready(function(){
        $('.more-filter').zfilter();
    });
</script>
@endpush
```


### ArticleController 中定义的方法

```
public function processFilter(Request $request)
{
    if(!$request->filter){
        return $this->responseAjax('error','查询异常,请重新尝试.');
    }
    
    //根据获取的条件，进行查询获取相应的文件
    //$data = Article::where()...
    
    $this->setData('data_list',$data);
	 
	 //直接输出HTML内容
    return $this->display('article.list_content')->render();
}
```

