## typeof

用于判断数据类型，返回值为6个字符串，分别为string、Boolean、number、function、object、undefined。

  	var a = [34,4,3,54],
        b = 34,
        c = 'adsfas',
        d = function(){console.log('我是函数')},
        e = true,
        f = null,
        g;

    console.log(typeof(a));//object
    console.log(typeof(b));//number
    console.log(typeof(c));//string
    console.log(typeof(d));//function
    console.log(typeof(e));//boolean
    console.log(typeof(f));//object
    console.log(typeof(g));//undefined

但是你可能会发现，typeof在判断null、array、object以及函数实例（new + 函数）时，得到的都是object。这使得在判断这些数据类型的时候，得不到真是的数据类型。由此引出instanceof。

## instanceof

instance中文翻译为实例，因此instanceof的含义就不言而喻，判断该对象是谁的实例，同时我们也就知道instanceof是对象运算符。
这里的实例就牵扯到了对象的继承，它的判断就是根据原型链进行搜寻，在对象obj1的原型链上如果存在另一个对象obj2的原型属性，那么表达式（obj1 instanceof obj2）返回值为true；否则返回false。


    console.log('instanceof');
    console.log(a instanceof Array);
    console.log(Array.isArray(a));

## 总结：

想必到这里大家也都明白两者的含义和用法，总之，typeof和instanceof都是用来判断变量类型的，两者的区别在于：

- typeof判断所有变量的类型，返回值有number，boolean，string，function，object，undefined。
- typeof对于丰富的对象实例，只能返回"Object"字符串。
- instanceof用来判断对象，代码形式为obj1 instanceof obj2（obj1是否是obj2的实例），obj2必须为对象，否则会报错！其返回值为布尔值。
- instanceof可以对不同的对象实例进行判断，判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true。