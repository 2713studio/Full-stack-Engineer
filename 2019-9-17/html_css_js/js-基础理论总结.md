

## JS声明函数的三种方式

### 函数表达式

通过var将通过function创建的函数存储在变量或者对象属性中，被称为匿名函数，通过console.log(fn.name)输出的是个空字符串

    var h = function () {
      // h
	}
	
	console.log(h)
	    
	h = function () {
	      // h1
	}

	输出h

### 函数声明

回生命一个具名函数，且函数可以在所在的作用内的任意位置调用，用具体的名字，通过console.log(fn.name)输出的是方法名

	function h() {
	      // h
	}
	
	console.log(h)
	    
	function h() {
	      // h1
	}

### Function

不推荐使用

## 伪数组、类数组
- 具有length属性；
- 按索引方式存储数据；
- 不具有数组的push()、pop()等方法；
### slice

slice() 方法可从已有的数组中返回选定的元素。

- start：必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

- end：可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。该方法并不会修改数组，而是返回一个子数组。

- call（）和apply（）方法都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。apply和call方法的第一个参数都是特定的作用域第二个参数不同，apply第二个参数可以是Array的实例，也可以是arguments对象。call方法需要逐个列出需要传递的参数。

- arguments对象指数与数组类似（它并不是Array的实例），但是可以使用方括号语法访问每一个元素，使用length来确定传递进来多少个参数。

- Array.prototype.slice.call()可以理解为：改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置。
console.log([1,2,3].slice());

### 转换数组

Array.prototype.slice.call(arguments)能将具有length属性的对象(key值为数字)转成数组。[]是Array的示例，所以可以直接使用[].slice（）方法。

    var obj = {0:'hello',1:'world',length:2};
	console.log(Array.prototype.slice.call(obj,0));
	//["hello", "world"]

没有length属性的对象

	var obj = {0:'hello',1:'world'};//没有length属性
	console.log(Array.prototype.slice.call(obj,0));//[]

## call和apply的用法

call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。

JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

	function fruits() {}
	 
	fruits.prototype = {
	    color: "red",
	    say: function() {
	        console.log("My color is " + this.color);
	    }
	}

	banana = {
	    color: "yellow"
	}
	apple.say.call(banana);     //My color is yellow
	apple.say.apply(banana);    //My color is yellow
 
	var apple = new fruits;
	apple.say();    //My color is red

### apply、call 区别

对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样。例如，有一个函数定义如下：

	func.call(this, arg1, arg2);
	func.apply(this, [arg1, arg2])

### apply、call、bind比较

	var obj = {
	    x: 81,
	};
	 
	var foo = {
	    getX: function() {
	        return this.x;
	    }
	}
	 
	console.log(foo.getX.bind(obj)());  //81
	console.log(foo.getX.call(obj));    //81
	console.log(foo.getX.apply(obj));   //81

注意看使用 bind() 方法的，他后面多了对括号。

也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。

再总结一下：

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。

## 毗邻div的margin属性重叠问题

所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享之。毗邻的定义为：同级或者嵌套的盒元素，并且它们之间没有非空内容、Padding或Border分隔。

这就是原因了。“嵌套”的盒元素也算“毗邻”，也会 Collapsing Margins。这个合并Margin其实很常见，就是文章段落元素<p/>，并列很多个的时候，每一个都有上下1em的margin，但相邻的<p/>之间只会显示1em的间隔而不是相加的2em。这个很好理解，我就是奇怪为什么W3C要让嵌套的元素也共享Margin，想不出来在什么情况下需要这样的表现。 　　这个问题的避免方法很多，只要破坏它出现的条件就行。给 Outer Div 加上 padding/border，或者给 Outer Div / Inner Div 设置为 float/position:absolute(CSS2.1规定浮动元素和绝对定位元素不参与Margin折叠)。

## 变量提升

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
### 两个相同的实例

	x = 5; // 变量 x 设置为 5
	
	elem = document.getElementById("demo"); // 查找元素 
	elem.innerHTML = x;                     // 在元素中显示 x
	
	var x; // 声明 x
第二个

	var x; // 声明 x
	x = 5; // 变量 x 设置为 5
	
	elem = document.getElementById("demo"); // 查找元素 
	elem.innerHTML = x;                     // 在元素中显示 x

### 初始化不会提升

JavaScript 只有声明的变量会提升，初始化的不会。

以下两个实例结果结果不相同：

	var x = 5; // 初始化 x
	var y = 7; // 初始化 y
	
	elem = document.getElementById("demo"); // 查找元素 
	elem.innerHTML = x + " " + y;           // 显示 x 和 y

第二个

	var x = 5; // 初始化 x
	
	elem = document.getElementById("demo"); // 查找元素 
	elem.innerHTML = x + " " + y;           // 显示 x 和 y
	
	var y = 7; // 初始化 y

注：JavaScript 严格模式(strict mode)不允许使用未声明的变量。

## ||/&&-逻辑运算符

### ||

运算方法：

     只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。

     只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。

总结：真前假后

### &&

运算方法：

     只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;

     只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;

总结：假前真后

弄懂了以上说的还应该知道：

      js的6个蛋蛋：在js逻辑运算中，0、”“、null、false、undefined、NaN都会判为false，其他都为true。