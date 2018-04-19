## angular路由单独封装

### 单独定义路由文件 app-routing.module.ts
	import { NgModule } from '@angular/core';
	import { RouterModule, Routes } from '@angular/router';
	
	const routes:Routes=[
	    {path:'',redirectTo:'',pathMatch:''}
		//pathMatch属性，来告诉路由器如何用URL去匹配路由的路径，否则路由器就会报错。
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

### 路由参数

1. 对应路由变化

		{ path: 'modal/:s', component: LoadPageComponent },

2. 手动改变路由

		this.router.navigate(['/modal','1']);

3. 获取路由参数

		import { ActivatedRoute, Params } from '@angular/router';
		import 'rxjs/add/operator/switchMap';
	
		private route: ActivatedRoute(依赖注入)
	
		this.route.params
	    .subscribe(s => this.id=s['id']);

	v1: this.route.snapshot.paramMap.get('id')；
	
	v2：v1中所提建议不能处理路由没变，id发生变化时的情况，

	v3：取消订阅方法：

		1、import { Subscription } from 'rxjs/Subscription';//导入包
		2、subscribr: Subscription; //声明
		3、this.subscribr.unsubscribe();//取消方法，调用对象的是订阅时候的返回值！

### 通配符（用以路由匹配错误时）

	{ path: '**', component: PageNotFoundComponent }

note:务必放在路由配置的最后一行，否则会导致后续路由配置不起作用

### 路由拦截器

1. 定义一个拦截器文件

		import { Injectable } from '@angular/core';
		import {
		    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
		} from '@angular/common/http';
		
		import { Router } from '@angular/router';
		import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
		import { Observable } from 'rxjs/observable';
		import { mergeMap, catchError } from 'rxjs/operators';
		
		/** Pass untouched request through to the next request handler. */
		@Injectable()
		export class NoopInterceptor implements HttpInterceptor {
		
		    constructor(private router: Router) {
		    }
		    intercept(req: HttpRequest<any>, next: HttpHandler):
		        Observable<HttpEvent<any>> {
		        console.log(1);
		        // return next.handle(req);
		        return next.handle(req).pipe(mergeMap((event: any) => {
		            if (event instanceof HttpResponse && event.status !== 200) {
		                return ErrorObservable.create(event);
		            }
		            this.router.navigate(['login']);
		            return Observable.create(observer => observer.next(event)); // 请求成功返回响应
		        }),
		            catchError((res: HttpResponse<any>) => {   // 请求失败处理
		                switch (res.status) {
		                    case 401:
		                        break;
		                    case 200:
		                        console.log('业务错误');
		                        break;
		                    case 404:
		                        break;
		                    case 403:
		                        console.log('业务错误');
		                        break;
		                }
		                return ErrorObservable.create(event);
		            }));
		    }
		}

2. 在app.module中引用

		import { NoopInterceptor } from './noop-interceptor';
		providers: [AppGlobalService, { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }]
