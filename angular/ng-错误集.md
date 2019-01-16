### 新建组件报错

Error: More than one module matches. Use skip-import option to skip importing the component into the closest module.
More than one module matches. Use skip-import option to skip importing the component into the closest module.

**根目录下多个module文件导致的**

需要在新建时指定module即可

ng g c add-sample  --module=app

### 模块懒加载emit消息发送失败

provides多次引用消息变量EventEmitter，导致不是一个消息，只在跟模块引用一次，其他地方全部删除