## 父子组件通许方法

### Input方法

子组件定义Input变量，接收父组件出入的变量，过程如下：

1. 子组件引入Input模板

		import { Component, OnInit, Input} from '@angular/core';

2. 子组件定义Input变量

		@Input() isModalShow = false;

3. 子组件模板中引用变量

		<div class="modal" [class.is-active]="isModalShow"></div>

4. 父组件定义子组件的Input变量

		isModalShow = false;

5. 在调用子组件的地方直接引用

		<app-app-alert [isModalShow]="isModalShow"></app-app-alert>

### Output方法

子组件定义Output方法，将改变的变量通过EventEmitter模块通知父组件

1. 引入模板

		 { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

2. 子组件定义输出变量

		@Output() closedd = new EventEmitter<boolean>();

3. 在需要传递给父组件对的地方调用发送方法

		this.closedd.emit(this.isModalShow);

4. 父组件绑定一个事件处理器，来响应子组件的事件

		<app-app-alert (closedd)="closedd($event)"></app-app-alert>

5. 父组件控制器内定义方法
	
	  closedd(agreed: boolean) {
	    this.isModalShow = agreed;
	  }
	