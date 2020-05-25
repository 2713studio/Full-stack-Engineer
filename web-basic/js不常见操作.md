## void 0

void在ts中表示无效的，空的类型，比如函数的没有返回值的时候，可以设定返回类型为void

```
void *; // 表示任意值返回的都是undefined
```

why:用void 0 代替undefined？

1. 在es5中，undefined在局部作用域中是可以被重写的
2. void 0节省字节，比undefined短

