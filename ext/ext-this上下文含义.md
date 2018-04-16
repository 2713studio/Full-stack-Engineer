## Ext6中this各个上下文中的含义

1.  grid中listeners中监听时间中的this

		listeners: {
            select: function (rowModel, record, rowIndex, eOpts) {
                console.log(this)
            }
        }

	this:表示listeners所属的组件对象，此处表示grid的view对象

