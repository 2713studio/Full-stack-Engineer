[TOC]



### VUE渐进式框架的理解

可能有些方面不如react，angular，但是他是渐进式的，你可以吧项目的两个组件使用vue实现，类似jq，也可以整个项目基于vue开发，类似于angular

### vue两个核心

数据驱动和组件化

### 钩子周期

分为八个阶段，创建前后，载入前后，更新前后，销毁前后

### 双向绑定原理

vue双向绑定通过数据劫持结合发布者-订阅者实现

要实现数据双向绑定首先要对数据进行劫持监听，所以要设置一个Observer监听数据所有属性，如果属性发生变化，告诉订阅者watcher是否要改变，因为订阅者有多个，我们需要一个消息订阅器Dep来专门收集订阅者，然后在监听者Observer和订阅者watcher之间进行统一的管理。然后还需要一个指令解析器Compile对每个元素进行扫描和解析，将相关指令初始化成一个订阅者watcher，并替换模板数据和对应的函数，当订阅者watcher接收到属性的变化时，会立即执行更新函数，从而更新视图

### 语法篇

#### v-if和v-show的区别

都是判断元素是否展示

v-if重新绘制和删除元素节点，v-show只是更改样式；v-if会卸载和销毁内部监听事件和子组件，v-show只是淡出的css切换；v-if消耗很高，不适合频繁使用

#### vue常用修饰符

##### 键盘事件

- .ctrl
- .alt
- .shift
- .meta

##### 鼠标修饰符

- .left
- .right
- .middle

会限制鼠标函数仅执行特定的鼠标事件

##### 其他修饰符

- .lazy：默认v-model每次input事件触发后都会数据同步，添加lazy后，转变为change事件同步数据(v-model.lazy="name")
- .number：将用户输入数据类型转为int类型（v-model.number="name"）
- .trim：自动过滤掉首尾空格（v-model.trim="name"）

#### v-on可以监听多个方法

#### key 的作用

可以提高虚拟DOM的更新效率

#### vue组件中的data为什么必须是函数

在new vue()中，data可以作为一个对象操作，在component中，data只能势函数，不能直接进行对象赋值

以为当data作为函数时，每个实例可以维护一个函数返回的独立的对象的拷贝也就是深拷贝，各个实例的data不会受到影响，是独立的

#### v-for和v-if优先级

for高于if

#### vue的指令和用法

1. v-if
2. v-for
3. v-bind：绑定属性
4. v-model：双向绑定

### vue核心-组件

##### vue子组件调用父组件方法

1. 在子组件中直接使用this.$parent.event
2. 在子组件中使用$emit想父组件发出一个信息触发父组件，父组件监听这个事件
3. 父组件传入子组件这个方法，子组件直接调用

##### vue父组件调用子组件方法

1. 利用ref属性操作子组件方法

```
父：
<child ref="childMethod"></child>
子：
method: {
  test() {
     alert(1)
  }
}
```

##### vue组件传值

###### 父组件给子组件传值

1. 父组件调用子组件时动态绑定属性<parent :dataList="datalist"></parent>
2. 子组件通过props接收属性props:['dataList']
3. 子组件使用数据this.$parent.属性/方法

子组件给父组件传值

1. 使用ref属性，父组件调用子组件是，绑定ref属性`<parent :ref="parent"></parent>`;父组件中使用this.$ref.属性/方法
2. 使用emit；子组件调用this.$emit('方法名'，值)；复制件通过子组件的方法名获取值

##### 组件传值

1. 通过vue-router路由参数传值
2. 通过本地缓存localStorage
3. 使用vuex数据管理传值

##### vue动态组件

多个组件通过一个挂载点进行组件切换，is的值是那个组件的名字，就回显示那个组件

##### keep-alive内置组件的作用

可以让当前组件或者路由不经历创建或销毁，而是进行缓存，凡是被keep-alive包围的组件，除了第一次外不会经历创建和销毁

##### 递归组件的用法

组件可以在自身模板中调用自己，不过只能通过name来实现

如果是递归，一定要有结束条件，否则会出现max stack size错误，要用v-if="false"来终止递归渲染

### 核心知识-路由

#### 定义vue-router的动态路由，获取参数

动态路由创建主要通过path配置来实现

```
{

  path: '/details/:id'
  name: 'Details'
  components: Details

}
```

访问details目录下的所有文件，比如details/a,details/b都会映射到details组件上

可以通过this.$route.params来获取路由参数

#### 路由守卫

- 全局守卫：beforeEach
- 后置守卫：afterEach
- 全局解析守卫：beforeResolve
- 路由独享守卫：beforeEnter

#### $route和$router

$route是路由处理对象。跳转的路由对象，是一个局部对象，包含了路由的一些基本信息，比如:path,params,hash,query,fullPath,matched,name等信息参数

$router是Router的一个实例，是全局路由对象，包含路由跳转和钩子函数等

#### 相应路由参数变化

##### watch检测

```
watch:{
	$route(to,from){
		console.log(to.path);
	}
}
```

##### 组件内的路由钩子函数

```
beforeRouteUodate(to,from,next){}
```

#### vue-router传参

##### 使用params

- 只能使用name，不能使用path
- 参数不会显示在路由上
- 浏览器强制刷新会清空参数

```
// 路由跳转
this.$router.push({
	name:'home', // 是能是组件的名称
	params:{
		number:1,
		code:'111'
	}
})
// 接收参数
this.$route.params.name
```

##### 使用query

- 可以使用path
- 参数会显示在路径上，刷新不会被清空

```
// 路由跳转
this.$router.push({
	name:Home, // 可以使路由的path
	query:{
		number:1,
		code:'111'
	}
})
// 接收参数
this.$route.params.query
```

### vuex

#### 不使用vuex的问题

1. 可维护性差，修改数据麻烦
2. 可读性降低，数据追溯很困难
3. 耦合度很高，大量上传派发，和组件化的初衷不符

#### vuex有哪几种属性

State,Getter,Mutation,Action,Module

#### vuex的State特性是什么

1. vuex即使一个仓库，仓库里放了很多对象，State就是数据源的存放地，对应vue中的data
2. state存放的数据是响应式的，vue组件从store中读取数据，若store的数据发生变化，依赖这个数据的组件也会更新
3. 通过mapState吧全局的state和getters映射到当前组件的computed计算属性当中

#### vuex中Getter特性

1. getter可以对state属性进行操作，他就是store的计算属性
2. 虽然在组织内也可以计算，到那时getters可以在多组件服用
3. 如果一个状态旨在一个组件内使用，可以不用getters

#### vuex中Mutation特性

1. action类似于mutation，不同的是
2. action提交的是mutation，不是直接更改状态
3. action可以包含任何异步操作

#### vue中ajax请求写在组件的methods中还是vuex的actions中

1. 如果请求的数据不被其他组件复用，仅仅在组件内使用，就不需要放到vuex的actions中
2. 如果复用，一般都需要复用，就需要放到actions中，并包装成promise返回，在调用处用async await