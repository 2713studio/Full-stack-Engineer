## Inject注入组件

如果需要调用另一个组件的内部变量，可以在控制器中注入组件，和注入服务方式相同

在构造函数中:

```
constructor(
@Inject(T) private m:T){}
```

T：组件名，需要在头部导入

注：Inject首字母为大写