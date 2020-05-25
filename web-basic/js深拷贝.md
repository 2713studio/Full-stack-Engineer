js中，数据类型分为基本数据类型和引用数据类型，基本数据的值存储在栈内存中，引用类型的数据，栈内存中仅仅存储了一个引用，真正的数据存储在堆内存中

### 基本数据类型

```
const a = 3;
const b = a;
```

此时更改b的值，a的值是不会变化的，因为变量a，b在栈内存中是两个不同的区域，不互相影响

### 引用数据类型

```
const o = {
	a:1,
	b:3
}
const o1 = o;
```

此时更改o1的值，o的值也会跟着变化，因为o和o1在栈内存中存了两个引用，这两个引用指向堆内存中的同一个数据，所以，更改了一个就的话，所有引用该数据的变量都会变化

### 浅拷贝

浅拷贝就是指拷贝对象的引用，而不是深层次的拷贝引用的堆内存中的数据，重新在堆内存中copy出一份数据，所以浅拷贝的变量更变会带来所有引用该堆内存中数据的改变。

### 深拷贝

实际项目中，经常遇到参数传值和引用类型数据的单独处理运用情况，肯定不能使用浅拷贝吧所有的变量都引用同一个数据，所以有了深拷贝的存在

深拷贝作用在引用数据类型上，Object Array

深拷贝不会拷贝引用类型的引用，而是将引用类型在堆内存中的数据拷贝一份，形成一个新的堆数据，这样就可以防止数据串联修改的冲突

### 深拷贝实现

#### 乞丐版JSON.stringify() JSON.parse()

可以实现引用类型的深拷贝，`const a = JSON.parse(JSON.stringify(b))`

问题：无法拷贝undefined，function，RegExp等类型的数据，所以叫做乞丐版

#### object,assign

可以实现第一层数据的深拷贝，`const a = object.assign({},b)`

问题：如果数组或者对象里面有多层结构，那么二层及以后的结构中如果出现引用数据类型，则无法实现深拷贝

### 自定义递归拷贝

```javascript
function deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
    // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
         // 判断如果当前的值是null的话；直接赋值为null
        } else if(target===null) {
            result = null;
         // 判断如果当前的值是一个RegExp对象的话，直接赋值    
        } else if(target.constructor===RegExp){
            result = target;
        }else {
         // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
     // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
     // 返回最终结果
    return result;
}
```

可行

#### lodash库

lodash很热门的函数库，提供了 lodash.cloneDeep()实现深拷贝