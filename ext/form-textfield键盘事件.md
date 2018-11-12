## 常见的keyup,keydown.keypress

通常需要两个步骤，否则无效

1. 开启监听

 		enableKeyEvents:true

	默认是关闭状态，则不监听键盘事件，所以要先开启

2. 添加事件

		listeners: {
			keypress: 'onAccountChange'
		}