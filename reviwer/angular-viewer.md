[TOC]

### 什么是Angular

Angular是基于typescript编程语言的，开源的网络应用开发框架。是由谷歌倡导开发和维护的。它使用简单，功能强大，可以快速搭建前端网络应用。

### 如何进行路径的变换

可以使用router的navigate方法。

### 可以使用router的navigate方法。

Service是Angular中的singleton对象。里面包含了方法和数据, 这些数据会存在于整个程序的生命周期之中。

###  Observables和promises的区别是什么

Promises一旦创建，它的执行就会发生。

observable是不是这样，它的执行只有在subscription被创建的时候才会触发。

Promise只能处理一个事件。Observable是可以处理多个事件。

### 解释一下angular里面的template

Template是用html写的，可以作为一个整体被多个tag调用。

### Angular中的directives是什么?

Directives是angular的一个核心功能之一。这门技术允许程序员写特定功能的html语义。

有三种类型的directives。

一种是attribute. 一种是组件， 一种是结构化。

### Angular的核心部件有哪些?

共有9个

1. components
2. data binding
3. dependency injection
4. directives
5. metadata
6. modules
7. routing
8. services
9. template

### 什么是angular material?

这是Angular的用户界面组件库。

### 什么是aot编译?

aot是ahead of time。就是Angular的内部编译机制。  

### 什么是数据绑定？在Angular中有几种方式?

连接程序中的数据跟视图的方式称为数据绑定。

3种

1. 事件绑定，这种方式使得应用程序可以对用户的输入做出反应
2. 是属性绑定。这种方式是从应用数据向html传递数据
3. 双向绑定。这种绑定可以支持用程序数据的修改影响视图，同时视图上数据的改动也会影响到应用程序的数据

### 列举一下Angular中的filter类型。

1. Currency.
2. Date.
3. Filter.
4. Json.
5. limitTo
6. lowercase
7. number
8. orderBy

### 什么是spa，比较一下single page application跟传统的web application.

Single page application, 是指在整个应用中只有一个页面。这种方式相较传统的网络应用要快很多。开发上的时间成本也要小很多。

### 什么过程把Typescript转化成JavaScript?

这个过程叫transpiling。

### 如何使用Angular的expressions?

使用双大括号。

### Angular中的组件和directives的生命周期是怎样的?

constructor, ng on changes, ng on init, ng do check ng on destroy.

### Dirty check是怎么回事?

Dirty check是比较新的数据跟老的数据的差别，如果看到有改变, 就用新的数据更新现有的视图。

### Angular中有哪些事件?

click, copy, cut, dbclick, keydown, keypress, keyup, mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseup, blur

### Angular中的bootstrapping是什么?

Bootstrapping是用来初始化或者启动网络应用的。它包含自动和手工两种。

### Provider, service和factory的区别是什么?

Provider允许你在APP config里面配置你的应用。

Service就是用来创建一个服务的。

Factory是用来创建和配置服务的。