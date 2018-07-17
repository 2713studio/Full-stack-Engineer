## 定义一个公共组件

比如加载等待页面……

### 使用cli快速定义组件

	ng g component common/load-page

common:表示app中的子模块
load-page:表示子模块中的一个页面，会在new-cmp文件夹下穿件mvc结构的文件s

### load-page.component.ts

引入input

	import { Component, OnInit, Input } from '@angular/core';

定义输入元素，用于接收父组件传过来的值

	@Input() isLoading: boolean;

### 调用方式

父组件中
	
    <app-load-page [isLoading]="isLoading"></app-load-page>

子组件中

	<div class="modal" [class.is-active]="isLoading">
	...
	</div>
	