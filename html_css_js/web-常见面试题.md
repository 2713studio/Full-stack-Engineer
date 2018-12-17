## web面试题

### 操作节点

1. 创建新节点

    	createDocumentFragment // 创建dom片段
		createElement // 创建一个元素
		createTextNode // 创建文本节点

2. 操作节点

		appendChild() //添加
		removeChild //移除
		replaceChild //替换
		insertBofore //插入

3. 查找

		getElementsByTagName() //通过标签名查找
		getElementsByName() //通过元素的name属性查找
		getElementById() //通过元素的id查找

### 闭包

定义：一个父函数里面包含了一个子函数，子函数调用了父函数内部的变量，如果子函数在外部被调用，就产生了闭包。简单的说，闭包就是能够读取其他函数内部变量的函数。

作用：1、读取其他函数内部的变量；2、变量保存在内存中

注意：使用过多的闭包会消耗大量内存，造成网页的性能问题，可以在函数执行完成之前把不需要的局部变量删除。

### 浏览器存储

1. 存储大小

		cookie：4kb
		webStorage：5MB

2. 存储有效期

		cookie：根据自己的设置时间
		sessionStorage：关闭窗口后失效
		localStorage：永久有效除非js删除或者浏览器删除

3. 作用域

		cookie和localStorage是在同源窗口，同一个浏览器共享
		sessionStorage只在同一个标签页共享

### document加载方法区别

load：所有页面元素都加载完成

ready：页面的文档结构加载完成，不包括图片视频等非文字内容。

ready的速度比load快,在原生的jS中不包括ready()这个方法，只有load方法就是onload事件

源生js实现ready方法

    function ready(fn) {
        if (document.addEventListener) { //标准浏览器
            document.addEventListener('DOMContentLoaded', function () {
                //注销时间，避免重复触发
                document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                fn(); //运行函数
            }, false);
        } else if (document.attachEvent) { //IE浏览器
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState == 'complete') {
                    document.detachEvent('onreadystatechange', arguments.callee);
                    fn(); //函数运行
                }
            });
        }
    }

### 网站性能优化

1. 资源文件js css 图片合并压缩
2. 减少页面dom操作，操作多的话可以考虑使用虚拟dom
3. 减少http请求
4. 使用cdn加速

	作用：cdn可以处理整个网站 70%-95%的访问量，从而解决网站的并发量，简单的说就是通过在不同地点缓存内容，然后通过负载平衡等技术将用户请求定向到最近的缓存服务器上获取内容，提高用户访问网站的响应速度。
5. 减少cookie大小

### http常见状态码

1. 1开头信息状态码
2. 2开头 （请求成功）表示成功处理了请求的状态代码
3. 3开头 （请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。
4. 4开头 （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。
5. 5开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。

### GET 与POST区别

1. get可保存为书签
2. get可能被缓存
3. 编码类型：get->application/x-www-form-urlencoded;post->application/x-www-form-urlencoded或者multipart/form-data（二进制）

### 从浏览器地址栏输入url到显示页面的步骤

1. 浏览器根据请求的URL，交给DNS域名解析，找到真实的ip，交给域名解析。
2. 服务器交给后端处理完成后返回的数据，浏览器接收文件HTML,CSS,JS图片等。
3. 浏览器对加载的资源进行语法解析，建立相应的数据内部结构。
4. 解析html，创建dom树，自上而下的顺序
5. 解析css，优先级：浏览器默认设置<用户设置<外部样式<内联样式<HTML中的style样式；
6. 将css与dom合并，构建渲染树
7. 布局重绘重排，页面完成渲染。

### 对浏览器内核的理解

主要分为渲染引擎和js引擎

渲染引擎：主要负责取得网页的（html，xml，图片等），整理信息结合css渲染页面，计算网页的显示方式，浏览器内核的不同对网页的语法解释也会有所不同，所以渲染效果也会有所不同，这也是我们需要做兼容性处理的原因。

js引擎：解析和执行js来达到网页的动态交互效果。JS是单线程语言；JS的Event Loop是JS的执行机制。深入了解JS的执行,就等于深入了解JS里的event loop

JS的执行机制是：

- 首先判断JS是同步还是异步,同步就进入主进程,异步就进入event table
- 异步任务在event table中注册函数,当满足触发条件后,被推入event queue
- 同步任务进入主线程后一直执行,直到主线程空闲时,才会去event queue中查看是否有可执行的异步任务,如果有就推入主进程中

js机制分析(wrong)

- setTimeout 是异步任务,被放到event table
- new Promise 是同步任务,被放到主进程里
- then里的函数是 异步任务,被放到event table

准确的划分方式是:

- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise，process.nextTick
- 执行一个宏任务,过程中如果遇到微任务,就将其放到微任务的【事件队列】里
- 当前宏任务执行完成后,会查看微任务的【事件队列】,并将里面全部的微任务依次执行完

谈谈setTimeout：

- 3秒后,setTimeout里的函数被会推入event queue,而event queue(事件队列)里的任务,只有在主线程空闲时才会执行。

最开始渲染引擎和js引擎没有太区分，后来越来越独立化，然后内核一般就是指渲染引擎了。

### html5有哪些新特性

1. 新增了 canvas，video，audio，nav，section，footer，header等元素。
2. 表单控件，calendar、date、time、email、url、search
3. 存储技术：localStorage，sessionStorage等
4. 新的技术：webworker, websocket, Geolocation

### iframed的缺点

1. iframe会阻塞页面的 onload事件
2. 搜索引擎不能够解读 iframe 页面，不利于 seo
3. iframe和主页面共享连接池，然而浏览器对相同域的链接是有限制的，所以这会影响页面的并行加载。
4. 如果想要绕开以上的2个问题，可以考虑通过js动态复职给 iframe添加src值。

### web标准以及w3c标准

- 标签闭合，标签小写，不乱嵌套，使用外链形式的css和js，结构层，表现层，行为层分离。

### Doctype作用，严格模式与混杂模式如何区分？它们有何意义?

- Doctype处于文档的最前面，用来告诉浏览器的解析器，文档的类型。
- 严格模式的js运行和排版是按照浏览器支持的最高标准的。
- 混杂模式就是兼容性模式，当页面兼容不好的时候，就可以选用这种模式，防止页面布局错落无法站点工作。

### 行内元素、块级元素

- 行内元素：a b span img input select strong
- 块级元素：div ul li ol dl dt dd h1 h2 h3 p
- 空元素：br hr link meta
- 块级元素独占一行，行内元素合一并行一行

### html的全局属性有哪些

- class：为元素设置类标识
- data-**：为元素添加自定义属性
- draggable：设置元素是否可以拖曳
- id：元素的id，同一个id文档内是唯一的
- style：元素样式
- title：鼠标上移显示信息

### canvas和svg的区别

- svg绘制出来的图片有独立dom节点，可以绑定事件，是矢量图，放大图片不会有锯齿。
- canvas绘制出来的图片是一个画布，等于就是一张图，放大会产生锯齿。

### css sprite是什么，有什么优缺点

就是将多个小图标拼接在一张图片上，减少对图片的请求，使用 background-size来定位到相关图片上。

优点：

- 减少HTTP请求数，极大地提高页面加载速度；
- 增加图片信息重复度，提高压缩比，减少图片大小；
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现；

缺点：

- 图片合并麻烦；
- 维护麻烦，修改一个图片可能需要从新布局整个图片，样式；

### display: none;与visibility: hidden;的区别

总的来说，他们的作用都是让元素不可见。区别在于：

- display：none会让元素完全从 dom 树中消失，渲染的时候不占据任何空间。
- visibility：hidden不会让元素从渲染树 dom 中消失，而且还是会占据一定的空间，只是内容不可见而已。

### link与@import的区别

1. link是html 的方式，@import是css的方式
2. link最大限度支持并行下载，@import过多嵌套导致串行下载
3. link可以通过rel="alternate stylesheet"指定候选样式
4. 总体来说：link优于@import

### 清除浮动的几种方式

1. clear：both，添加一个空标签div
2. 父级div定义伪类:after和zoom
3. 父级div定义overflow:hidden
4. 父级div也浮动，需要定义宽度
5. 结尾处加br标签clear:both

### 为什么要初始化css样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

### css3有哪些新特性

- 新增各种css选择器
- 圆角 border-radius
- 多列布局
- 阴影和反射
- 文字特效text-shadow
- 线性渐变
- 旋转transform
- 动画效果

### css盒子模型

有两种， IE盒子模型、W3C盒子模型；

- 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
- 区 别： IE（低版本）的content部分把 border 和 padding计算了进去;

### css的优先级算法是怎么样的

优先级为: !important > id > class > tag且important 比 内联优先级高。

### base64的原理及优缺点

- 优点:可以将二进制数据转化为可打印字符，方便传输数据，对数据进行简单的加密，肉眼安全。
- 缺点：内容编码后体积变大，编码和解码需要CPU额外工作量。

### 作用域链的理解

作用域链中的变量都是向上访问的，变量访问到windows对象后终止，向下访问是不允许的。
简单的说，作用域就是变量函数的可访问范围。

### js原型，原型链有什么特点

每个对象在内部都是会初始化一个属性的，prototype（原型），当我们访问一个对象的属性时，如果这个对象不存在这个属性，那么他就会去 prototype中查找，然后 prototype中还有自己的 prototype，就这样一直找下去，这就是原型链的概念。

### 什么是事件代理，事件委托

假如我们有一个 ul 列表，里面有4个li，我们可以在 li 上绑定 click 事件，但是也可以在她们的 父节点 ul上绑定，这种在 父节点上绑定事件来代替子节点事件的方法，就叫做事件委托。

### this的理解

- this总是指向函数的直接调用者（而非间接调用者）
- 如果有new关键字，this指向new出来的那个对象
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window

### 事件模型是什么

w3c中定义的事件发生的过程的3个阶段：

捕获阶段（capturing）、目标阶段（targetin）、冒泡阶段（bubbling）

### ajax的优缺点

优点：

- 通过异步模式，提升了用户体验.
- 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用.
- Ajax在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。
- Ajax可以实现动态不刷新（局部刷新）

缺点：

- 安全问题 AJAX暴露了与服务器交互的细节。
- 对搜索引擎的支持比较弱。
- 不容易调试。

### 解决跨域问题

跨域问题可以从jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面等方面来解决。一般由后台设置允许跨域。

### 哪些操作会造成内存泄漏

内存泄漏是指 一些对象我们不在使用它的时候，他任然存在

- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
- 闭包使用不当。

### eval是什么

它的功能是把对应的字符串解析成JS代码并运行

应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）

由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval(’(’+ str +’)’)

### null和undefine的区别

undefine:表示不存在这个值，如果变量被声明了没有赋值。

null：变量被定义赋值了，但是为空的情况，没有任何属性方法和值

在验证null时，一定要使用　=== ，因为 ==无法分别null 和　undefined

### json的了解

json是JavaScript Object Notation的缩写，即JavaScript对象表示法，是一种轻量级的数据交换格式，易于阅读和编写，同时也易于机器解析和生成。json是存储和交换文本信息的语法，类似于XML。json采用完全独立与语言的文本格式，它的语言格式类似于c语言家族。这些特性也使的json成为理想的数据交换语言。

JSON字符串转换为JSON对象:

	var obj =eval('('+ str +')');
	var obj = str.parseJSON();
	var obj = JSON.parse(str);

JSON对象转换为json字符串：

	var last=obj.toJSONString();
	last=JSON.stringify(obj);

### 同步和异步的区别

同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。

### 渐进增强和优雅降级

渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

### attribute和property的区别是什么？

attribute是dom元素在文档中作为html标签拥有的属性；

property就是dom元素在js中作为对象拥有的属性。

### 谈谈对ES6的理解

es6是一个新的标准，它包含了许多新的语言特性和库，是JS最实质性的一次升级。
比如’箭头函数’、’字符串模板’、’generators(生成器)’、’async/await’、’解构赋值’、’class’等等，还有就是引入module模块的概念。

可以让this指向固定化，这种特性很有利于封装回调函数

1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。

- async/await 是写异步代码的新方式，以前的方法有回调函数和Promise。
- async/await是基于Promise实现的，它不能用于普通的回调函数。async/await与Promise一样，是非阻塞的。
- async/await使得异步代码看起来像同步代码，这正是它的魔力所在。

### 面向对象的编程和面向过程的编程，以及异同和优缺点

面向过程就是对一个问题提出解决思路，然后一步步的列出函数解决，依次调用。

面向对象就是将构成问题分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

面向对象是以功能来划分问题，而不是步骤

### Promise的理解

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点:

- 对象的状态不受外界影响，Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。