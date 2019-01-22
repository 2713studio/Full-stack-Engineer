## 页面刷新配置

编译后页面刷新出现找不到错误

app.module中添加包

		import { HashLocationStrategy, LocationStrategy } from '@angular/common';

		{ provide: LocationStrategy, useClass: HashLocationStrategy },

路由模块中

		imports: [RouterModule.forRoot(routes, { useHash: true })],