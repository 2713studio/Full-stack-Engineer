## 通用规则

- 对象有__proto__属性，函数有prototype属性；
- 对象由函数生成;
- 生成对象时，对象的__proto__属性指向函数的prototype属性。
- 在没有手动修改__proto__属性的指向时，以上三条便是JavaScript默认原型链指向逻辑。

## 一般情况

	创建空对象时，实际上我们是用Object函数来生成对象的：
	>var o = {}
	>o.__proto__ === Object.prototype
	true
	
	我们也可以显式的使用Object函数来创建对象：
	>var o = Object()
	o.__proto__ === Object.prototype
	true
	
	当我们使用函数来创建自定义的对象时，上面的规则同样适用：
	>function MyObj(){}
	>typeof MyObj
	"function"
	>var mo = new MyObj()
	>mo.__proto__ === MyObj.prototype
	true

## 函数对象

既然JavaScript里“一切皆对象”，那函数自然也是对象的一种。对于函数作为对象来说，上面的规则同样适用：

	函数对象都是由Function函数生成的：
	>function fn(){}
	>fn.__proto__ === Function.prototype
	true

我们可以看到，把函数当做对象时，生成它的函数就是 Function函数。那Function函数本身呢？同样适用！

	Function函数本身作为对象时，生成它的函数是他自身！
	>Function.__proto__ === Function.prototype
	true

	Object函数既然是函数，那生成它的函数自然是Function函数咯：
	>Object.__proto__ === Function.prototype
	true

## prototype是谁？

一般函数默认的prototype是一个类型为"object"的对象，它有两个属性：constructor和 __proto__。其中constructor属性指向这个函数自身，__proto__属性指向Object.prototype，这说明一般函数的prototype属性是由Object函数生成的。

	一般函数默认的prototype是系统自动生成的一个对象：
	>function fn(){}
	>typeof fn.prototype
	"object"
	>fn.prototype
	{constructor: ƒ}
	    constructor: ƒ fn()
	    __proto__: Object
	
	>fn.prototype.constructor === fn
	true
	>fn.prototype.__proto__ === Object.prototype
	true

## 特殊的原型链

	console.log(`函数的原型链(fn.__proto__)指向Function函数的原型(Function.prototype):`);
    console.log(fn.__proto__ === Function.prototype);
    console.log('Object、Function函数的原型链指向Function的原型');
    console.log(Function.__proto__ === Function.prototype);
    console.log(Object.__proto__ === Function.prototype);
    console.log(`Function函数原型的原型链(Function.prototype.__proto__)指向Object函数的原型(Function.prototype):`);
    console.log(Function.prototype.__proto__ === Object.prototype);
    console.log(`对象的原型链(obj.__proto__)指向Object的原型(Object.prototype):`);
    console.log(obj.__proto__ === Object.prototype);
    console.log('Object函数的原型链指向null');
    console.log(Object.prototype.__proto__ == null);	

## 构造函数new的过程

1. 创建一个空对象
2. 空对象的__proto__指向构造函数的原型对象
3. 改变空对象的this指向
4. 返回构造函数的返回值，如果构造函数返回的为值类型，则忽略，自动返回构造函数本身，如果为引用类型，返回设定的值