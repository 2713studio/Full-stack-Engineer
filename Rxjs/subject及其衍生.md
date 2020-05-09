# Subject

是观察者模式的实例，也是基础，管理者订阅清单，在接收到值得时候通知所有订阅者。

```jsx
var subject = new Rx.Subject();

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.next(1);
// "A next: 1"
// "B next: 1"
subject.next(2);
// "A next: 2"
// "B next: 2"
```

# BehaviorSubject

在组件A订阅了subject实例后，发布者发布了一条消息，此后在组件B中订阅实例，如果还是subject实例的话，组件B是接受不到订阅前的消息的，此时就需要BehaviorSubject实例来满足这一需求

```jsx
var subject = new Rx.BehaviorSubject(0); // 0 为起始值
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
// "A next: 0"
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB); 
    // "B next: 3"
},3000)
```

BehaviorSubject实例存储着一种状态，在出现新的订阅者是，会发送最新的状态给它，比如闹钟响铃是个事件，有心的闹钟创建，就回收到之前设定好的闹钟，这就是状态，所以要在订阅的时候，要知晓发布者之前的状态，就应该用BehaviorSubject。

# ReplaySubject

在出现新的订阅者后，需要接收到最新的几条消息，就用到了ReplaySubject：

```jsx
var subject = new Rx.ReplaySubject(2); // 重複发送最后 2 个元素
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB);
    // "B next: 2"
    // "B next: 3"
},3000)
```

此处区分一下Behavior和Replay，Behavior在创建的时候带有初始值，第一次创建订阅者的时候会得到这个状态，而后续的每次订阅者都会得到最新一发布的信息；而Replay实例只是重复发布消息这一事件。

# AsyncSubject

此实例会在complete后接受最后一个消息：

```jsx
var subject = new Rx.AsyncSubject();
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();
// "A next: 3"
// "A complete!"

setTimeout(() => {
    subject.subscribe(observerB);
    // "B next: 3"
    // "B complete!"
},3000)
```