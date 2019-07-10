## 什么是闭包

闭包是函数和声明该函数的词法环境的组合。

### 作用域

    function init() {
        var name = 'hali';
        function speek() {
            console.log(name);
        }
        speek();
    }

    init(); 

init() 创建了一个局部变量 name 和一个名为 displayName() 的函数。displayName() 是定义在 init() 里的内部函数，仅在该函数体内可用。displayName() 内没有自己的局部变量，然而它可以访问到外部函数的变量，所以 displayName() 可以使用父函数 init() 中声明的变量 name 。但是，如果有同名变量 name 在 displayName() 中被定义，则会使用 displayName() 中定义的 name 。

### 闭包

	function makeFunc() {
	    var name = "Mozilla";
	    function displayName() {
	        alert(name);
	    }
	    return displayName;
	}
	
	var myFunc = makeFunc();
	myFunc(); 

JavaScript中的函数会形成闭包。 闭包是由函数以及创建该函数的词法环境组合而成。这个环境包含了这个闭包创建时所能访问的所有局部变量。在我们的例子中，myFunc 是执行 makeFunc 时创建的 displayName 函数实例的引用，而 displayName 实例仍可访问其词法作用域中的变量，即可以访问到 name 。由此，当 myFunc 被调用时，name 仍可被访问，其值 Mozilla 就被传递到alert中。

### 进一步闭包

    function makeAdder(x) {
        return function (y) {
            return x + y;
        }
    }
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    console.log(add5(1));
    console.log(add10(1));

从本质上讲，makeAdder 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一个和 10 求和。

**add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。**

### 实用的闭包

闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。这显然类似于面向对象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。

因此，通常你使用只有一个方法的对象的地方，都可以使用闭包。

例如绑定鼠标事件

    function makeNumber(number) {
        return function () {
            document.write(number);
        }
    }
    var make1 = makeNumber(1);
    var make2 = makeNumber(2);
    var make3 = makeNumber(3);
    document.getElementById('btn1').onclick = make1;
    document.getElementById('btn2').onclick = make2;
    document.getElementById('btn3').onclick = make3;

### 模拟私有属性

JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

下面的示例展现了如何使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为 **模块模式**（module pattern）

	var Counter = (function() {
	  var privateCounter = 0;
	  function changeBy(val) {
	    privateCounter += val;
	  }
	  return {
	    increment: function() {
	      changeBy(1);
	    },
	    decrement: function() {
	      changeBy(-1);
	    },
	    value: function() {
	      return privateCounter;
	    }
	  }   
	})();
	
	console.log(Counter.value()); /* logs 0 */
	Counter.increment();
	Counter.increment();
	console.log(Counter.value()); /* logs 2 */
	Counter.decrement();
	console.log(Counter.value()); /* logs 1 */

在之前的示例中，每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：Counter.increment，Counter.decrement 和 Counter.value。

该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 privateCounter 的变量和名为 changeBy 的函数。这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。

这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 privateCounter 变量和 changeBy 函数。

*我们可以把这个函数储存在另外一个变量makeCounter中，并用他来创建多个计数器。*

	var count1 = makeCounter();
	var count2 = makeCounter();
	var count3 = makeCounter();

### 遍历漏洞

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        // onclick绑定的是闭包函数，三个闭包的此法环境共享，都是最后一个element
        // 所以，最后的值都是3
        // 可使用foreach避免，因为forEach的每次循环都是单独的词法环境，互相不受影响
        btns[i].onclick = function () {
            console.log(i);
            this.innerHTML = element;
        }
    }

原因是赋值给 onfocus 的是闭包。这些闭包是由他们的函数定义和在 setupHelp 作用域中捕获的环境所组成的。这三个闭包在循环中被创建，但他们共享了同一个词法作用域，在这个作用域中存在一个变量item。当onfocus的回调执行时，item.help的值被决定。由于循环在事件触发之前早已执行完毕，变量对象item（被三个闭包所共享）已经指向了helpText的最后一项。

解决方法：

- 特别是使用前面所述的函数工厂：类似定时器，定义多个闭包环境，分别调用
- 匿名闭包：将for循环每次执行的词法环境放到一个匿名函数中，然后立即执行；类似于(function(){// 放入for循环执行的逻辑})();
- 避免使用过多的闭包，可以用let关键词：给每个element使用let声明

### 性能考量

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是，每个对象的创建）。

考虑以下示例：

	function MyObject(name, message) {
	  this.name = name.toString();
	  this.message = message.toString();
	  this.getName = function() {
	    return this.name;
	  };
	
	  this.getMessage = function() {
	    return this.message;
	  };
	}
在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

	function MyObject(name, message) {
	  this.name = name.toString();
	  this.message = message.toString();
	}
	MyObject.prototype = {
	  getName: function() {
	    return this.name;
	  },
	  getMessage: function() {
	    return this.message;
	  }
	};
但我们不建议重新定义原型。可改成如下例子：

	function MyObject(name, message) {
	  this.name = name.toString();
	  this.message = message.toString();
	}
	MyObject.prototype.getName = function() {
	  return this.name;
	};
	MyObject.prototype.getMessage = function() {
	  return this.message;
	};
在前面的两个示例中，继承的原型可以为所有对象共享，不必在每一次创建对象时定义方法。参见 对象模型的细节 一章可以了解更为详细的信息。