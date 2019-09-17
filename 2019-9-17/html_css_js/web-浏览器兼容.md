## 兼容常见问题

### 浏览器兼容问题一：不同浏览器的标签默认的外补丁和内补丁不同

解决方案：CSS里    *{margin:0;padding:0;}

### 浏览器兼容问题二：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大

解决方案：CSS里    *{margin:0;padding:0;}

### 浏览器兼容问题三：设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度

解决方案：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。

出现这个问题的原因是IE8之前的浏览器都会给标签一个最小默认的行高的高度。即使你的标签是空的，这个标签的高度还是会达到默认的行高

### 浏览器兼容问题四：行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug

解决方案：在display:block;后面加入display:inline;display:table;

### 浏览器兼容问题五：图片默认有间距

解决方案：使用float属性为img布局

### 浏览器兼容问题六：标签最低高度设置min-height不兼容

解决方案：如果我们要设置一个标签的最小高度200px，需要进行的设置为：{min-height:200px; height:auto !important; height:200px; overflow:visible;}

### 浏览器兼容问题七：透明度的兼容CSS设置

IE6认识的hacker 是下划线_ 和星号 *

IE7 遨游认识的hacker是星号 *