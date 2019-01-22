### 新建组件报错

Error: More than one module matches. Use skip-import option to skip importing the component into the closest module.
More than one module matches. Use skip-import option to skip importing the component into the closest module.

**根目录下多个module文件导致的**

需要在新建时指定module即可

ng g c add-sample  --module=app

### 模块懒加载emit消息发送失败

provides多次引用消息变量EventEmitter，导致不是一个消息，只在跟模块引用一次，其他地方全部删除

### require报错

error TS2580: Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i @types/node`

在使用 require 语法前增加一个声明“declare const require: any”。

    declare const require: any; // <-- 新增
    const faker = require('faker');