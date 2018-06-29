## grid刷新表格数据

### combo刷新

	onRoleChange: function (self, newValue, oldValue, eOpts) {
        console.log(newValue)
        var me = this,
            gridStore = me.getView().down('grid').store;
        gridStore.reload({
			// 带入新参数
            params: {
                ro_id: newValue
            }
        });
    }