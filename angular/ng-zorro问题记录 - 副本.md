## 创建组件指定module

```
ng g c *src1* -m=*src2*
```

src1：组件路径，起始路径为src/app/。

src2：module路径，起始路径为src/app/，例如需要在shared/shared.module下引入新建模块则路径为:shared/shared。