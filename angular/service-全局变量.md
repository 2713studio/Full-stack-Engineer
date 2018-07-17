## 封装全局变量

全局变量的封装，其实是定义一个通用服务，引用服务可以使用服务中定义的变量

### 生成服务文件
	
	ng g component app-global.service.ts

### app-global.service.ts(定义一个ResUrl变量)

	import { Injectable } from '@angular/core';

	@Injectable()
	export class AppGlobalService {
	    RESURL: string;
	    constructor() {
	        this.RESURL = 'http://localhost:8001';
	    }
	    getResUrl(): string {
	        return this.RESURL;
	    }
	}

### 在其他组件中使用

#### app.module.ts中引用服务
	
	import { AppGlobalService } from './app-global.service';
	……
	providers: [AppGlobalService]

#### **.component.ts中使用服务

	import { AppGlobalService } from '../../app-global.service';
	constructor(private appGlobal: AppGlobalService) {
	    this.loadingSrc = appGlobal.getResUrl() + '/images/loadings/load1.gif';
	  }