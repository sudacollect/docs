---
sidebar_position: 2
---

# 标签

标签的开发

建议安装分类管理工具 [FastTaxonomy](https://github.com/sudacollect/fasttaxonomy)

参照 《分类》 的管理，只需要替换为

```
use Gtd\Suda\Traits\TagTrait;
```

#### View 中使用

下拉框 -选择标签

```
// 默认多选
<x-suda::select-tag name="keyword[]" taxonomy="post_tag" max=5 :link="admin_url('tags/search/json')" />
```

```:link``` 为获取标签数据的API，可使用自定义标签数据.





