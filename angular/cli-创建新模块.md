## 定义一个新的页面组件

### 使用cli快速定义组件

	ng g component feature/new-cmp

feature:表示app中的子模块
new-cmp:表示子模块中的一个页面，会在new-cmp文件夹下穿件mvc结构的文件s

### app.component.html

    <router-outlet></router-outlet>

只留一个接收路由调过来的组件，跳转方式通过rout-link去定义需要跳转的组件

### 定义一个带路由的子模块

1. 创建带路由的模块

		ng g m ChangePassword --routing

2. 创建组件

		ng g c ChangePassword

会在根目录change-password下创建带路由的子模块