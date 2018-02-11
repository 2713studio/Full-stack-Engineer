## 将grid表格数据绑定到form数据当中

1. 直接load行数据

		var rec = grid.getStore().getAt(rowIndex);
		this.getForm().loadRecord(rec);