## 组件内更改样式

```
:host ::ng-deep{
	.local{ // 自定义的类名
		.aaa{ // 组件自带类名
			// code here
		}
	}
}
```

### nz-select下拉框被modal遮挡问题

不使用服务创建，直接在组件中声明出来modal空间，然后通过isvisible来控制显示隐藏，显示的组件在nz-content中引用，存放到ng-tempalte中