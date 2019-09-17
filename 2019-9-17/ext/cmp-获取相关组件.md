## 根据当前组件获取相关位置组件

1. 当前对象的父对象(上级对象) 

		this.ownerCt: 

2. 当前对象的下一个相邻的对象 

		this.nextSibling(); 

3. 当前对象的上一个相邻的对象 

		this.previousSibling(); 

4. 当前容器中的第一个子对象 

		this.get(0); 
		this.items.first(); 

5. 当前容器的最后一个子对象 

		this.items.last(); 

6. 查找当前对象的所有上级匹配的容器 

		this.findParentByType(String xtype) 

7. 查找当前对象的所有下级匹配的组件 

		this.findByType(String xtype)