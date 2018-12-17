## angular懒加载

以src\app\home\home 组件为例，其中包含三个子组件

### 组件模块下新建routing.module.ts

	import { NgModule } from '@angular/core';
	import { RouterModule, Routes } from '@angular/router';
	
	import { HomeComponent } from './home.component';
	import { Block1Component } from '../block1/block1.component';
	import { Block2Component } from '../block2/block2.component';
	import { Block3Component } from '../block3/block3.component';
	
	const routes: Routes = [
	    {
	        path: 'home',
	        component: HomeComponent,
	        children: [
	            { path: '', redirectTo: '/home/(block1:block1)', pathMatch: 'full', },
	            { path: 'block1', outlet: 'block1', component: Block1Component },
	            { path: 'block2', outlet: 'block2', component: Block2Component },
	            { path: 'block3', outlet: 'block3', component: Block3Component }
	        ]
	    },
	    {
	        path: '',
	        redirectTo: '/home/(block1:block1)',
	        pathMatch: 'full'
	    }
	];
	
	@NgModule({
	    imports: [RouterModule.forChild(routes)],
	    exports: [RouterModule]
	})
	export class RoutingModule { }

1. 引入home页面组件和各个子组件
2. 设置路由和子路由以及默认路由：(outlet:path)
3. 引入路由模块

### 在页面中设置路由标签

	<p>下边是板块展示：</p>
	<router-outlet></router-outlet>
	<router-outlet name="block1"></router-outlet>
	<router-outlet name="block2"></router-outlet>
	<router-outlet name="block3"></router-outlet>

### 在module中引用路由和各个子模块

	import { NgModule } from '@angular/core';
	import { CommonModule } from '@angular/common';
	import { HomeComponent } from './home.component';
	import { RoutingModule } from './routing.module';
	import { Block1Module } from '../block1/block1.module';
	import { Block2Module } from '../block2/block2.module';
	import { Block3Module } from '../block3/block3.module';
	
	
	@NgModule({
	    imports: [
	        RoutingModule,
	        CommonModule,
	        Block1Module,
	        Block2Module,
	        Block3Module
	    ],
	    declarations: [HomeComponent]
	})
	export class HomeModule { }

### 在跟路由配置中配置懒加载

	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { Routes, RouterModule } from '@angular/router';
	import { LoginComponent } from './login/login.component';
	
	const routes: Routes = [
	  { path: '', loadChildren: './home/home/home.module#HomeModule' },
	  { path: 'login', component: LoginComponent, pathMatch: 'full' }
	];
	
	@NgModule({
	  imports: [BrowserModule, RouterModule.forRoot(routes)],
	  exports: [RouterModule]
	})
	export class AppRoutingModule { }

注：
1. 禁止在跟模块文件中引用home模块
2. 如果跟路由模块路径为'login',则懒加载模块的默认路径是从login/开始的







