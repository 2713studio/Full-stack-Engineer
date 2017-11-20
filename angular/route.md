## angular路由单独封装

### 单独定义路由文件 app-routing.module.ts
	import { NgModule } from '@angular/core';
	import { RouterModule, Routes } from '@angular/router';
	
	const routes:Routes=[
	    {path:'',redirectTo:'',pathMatch:''}
	]
	@NgModule({
	    imports:[RouterModule.forRoot(routes)],
	    exports:[RouterModule]
	})
	
	export class AppRoutingModule{}

### 在app.module.ts中引用

	import { AppRoutingModule }     from './app-routing.module';
	imports: [
	    BrowserModule,
	    AppRoutingModule
	  ],