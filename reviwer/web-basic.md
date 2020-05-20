## webpack/gulp

webpack是前端构建工具，成为模块打包机，支持模块化，构建前端常见文件：js,css,html,图片等，通过loader(加载器)和plugins(插件)对资源进行处理

gulp侧重于前端开发流程的控制管理，可以配置不同的task实现不同的功能，从而构建完整的前端开发流程

区别：gulp旨在规范前端开发流程，模块化不是侧重点，webpack更强调模块化开发，文件压缩预处理等是附加功能

## 闭包

闭包是能够访问其他函数的内部变量，连通函数内部与外部桥梁

## html兼容

1. IE双边距bug，左右浮动时设置左右边距会双倍，多个浮动，第一个会出现双倍；给浮动元素价格display:inline
2. img底部3像素问题；设为块级元素display:block、改变基线vertical-align: middle、字体设置为0
3. 超链接hover失效；使用正确的顺序l(link)v(isited)h(over)a(ctive)
4. IE z-index问题，父级设置position:relative
5. Min-height 最小高度 ！Important 解决
6. IE6不支持PNG透明背景，解决办法: IE6下使用gif图片

## return

retrun true； 返回正确的处理结果。

return false；分会错误的处理结果，终止处理。阻止默认事件，比如超链接跳转

return；把控制权返回给页面。

## 浏览器显示页面过程

1. 域名解析
2. 服务器处理
3. 网站处理
4. 浏览器处理与绘制

## 作用域

作用域是针对变量的，比如创建一个函数，函数里面又包含一个函数，此时有三个作用域

```
全局作用域-》函数1作用域=》函数2作用域
```

特点：在当前作用域范围内查找不到的变量会向上查找

## 原型链

```
function Page(age){
	this.age = age
}
Page.prototype.name = name;
var a = new Page('a');
var b = new Page('b');
```

构造函数都有一个原型prototype，这个原型是实例化对象时创建的实例的原型，而且实例对象的_proto_都指向此原型属性，：每个js对象除了null外，都会关联另一个对象，这就是原型，每个对象都会继承原型中的属性

每个原型都有个construct属性，指向该原型的构造函数

原型链

```
a._proto_-----》Page.prototype
Page.prototype._proto_-----》Object.prototype
Object.prototype._proto-----》null
```

