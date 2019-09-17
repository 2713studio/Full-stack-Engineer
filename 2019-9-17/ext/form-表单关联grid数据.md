## 将grid表格数据绑定到form数据当中

1. 直接load行数据

		var rec = grid.getStore().getAt(rowIndex);
		this.getForm().loadRecord(rec);

2. 通过vm文件中的data属性

	获取vm对象后，使用setData方法
	
		let me = this;
	    me.getViewModel().setData({
	        'userdata': me.getView().userdata
	    });
	
	然后使用bind属性绑定userdata的值
	
		{
	        xtype: 'displayfield',
	        reference: 'realName',
	        fieldLabel: '真实姓名',
	        bind: {
	            value: '{userdata.realName}'
	        }
	    }