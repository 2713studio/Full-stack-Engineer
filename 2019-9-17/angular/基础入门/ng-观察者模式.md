## 观察者模式定义（Observer Pattern）

> 观察者模式是软件设计模式的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。 — 维基百科

观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

我们可以使用日常生活中，期刊订阅的例子来形象地解释一下上面的概念。期刊订阅包含两个主要的角色：期刊出版方和订阅者，他们之间的关系如下：

- 期刊出版方 - 负责期刊的出版和发行工作
- 订阅者 - 只需执行订阅操作，新版的期刊发布后，就会主动收到通知，如果取消订阅，以后就不会再收到通知

在观察者模式中也有两个主要角色：Subject (主题) 和 Observer (观察者) 。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。

![](https://segmentfault.com/img/bVK7Ps?w=414&h=273)
	
### 观察者模式实战

#### Subject 类定义：

	class Subject {
    
	    constructor() {
	        this.observerCollection = [];
	    }
	    
	    registerObserver(observer) {
	        this.observerCollection.push(observer);
	    }
	    
	    unregisterObserver(observer) {
	        let index = this.observerCollection.indexOf(observer);
	        if(index >= 0) this.observerCollection.splice(index, 1);
	    }
	    
	    notifyObservers() {
	        this.observerCollection.forEach((observer)=>observer.notify());
	    }
	}

#### Observer 类定义：

	class Observer {
    
	    constructor(name) {
	        this.name = name;
	    }
	    
	    notify() {
	        console.log(`${this.name} has been notified.`);
	    }
	}