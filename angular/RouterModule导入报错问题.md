# Can't bind to 'routerLink' since it isn't a known property of 'a'

详情：导入RouterModule后，仍然报错

原因：没有在声明组件的地方导入模块，组件为使用routerLink属性的组件

举例：在组件A中使用routerlink属性进行路由跳转，则必须在声明组件A的模块中import路由模块。