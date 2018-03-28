## grid行按钮编辑

1. actioncolumn添加编辑按钮获取行数据

		xtype: 'actioncolumn',
        menuDisabled: true,
        sortable: false,

        items: [{
            iconCls: 'x-fa fa-pencil-square-o',
            tooltip: '编辑',
            handler: 'editNews'
        }]

	控制器方法：

		editNews: function (grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
	        console.log(event)
	    }

2. widgetcolumn添加编辑按钮获取行数据

		xtype: 'widgetcolumn', 
		widget: {
            xtype: 'button',
            tooltip: '查看此职位所投简历',
            bind: '{record.jobHunterCount}',
            handler:'showCVS'
        }

	控制器方法：

		showCVS: function (btn, event) {
	        console.log(btn.lookupViewModel().get('record'))
	    }

3. 自定义div点击获取行数据

		renderer: function (value, record) {
            return '<a href="javascript:;" style="padding: 5px 40%;" class="show-jianli">' + value + '</a>';
        }

	控制器方法：
	
		onCellClick:function(self, td, cellIndex, record, tr, rowIndex, e, eOpts){
	        var btn = e.getTarget('.show-jianli');
			if(btn){
				// do something
			}
	    }

	