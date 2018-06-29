## 数节点操作

### js选中某行节点

    refs = me.getReferences();
    roleTree = refs.roleTree;
    firstNode = roleTree.getView().getStore().getAt(0);
    someNode = roleTree.getView().getStore().findNode(key,value);

	roleTree.setSelection(firstNode);

### 获取节点参数

	someNode = roleTree.getView().getStore().findNode(key,value);
	someNode.get(key)
	