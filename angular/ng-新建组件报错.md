## 新建组件报错

Error: More than one module matches. Use skip-import option to skip importing the component into the closest module.
More than one module matches. Use skip-import option to skip importing the component into the closest module.

### 根目录下多个module文件导致的

需要在新建时指定module即可

ng g c add-sample  --module=app