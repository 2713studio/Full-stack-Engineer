## viewmodel绑定data数据

### 初始化ViewModel

	Ext.define('QNCMS.view.user.personal-verifyinfoModel', {
	    extend: 'Ext.app.ViewModel',
	    alias: 'viewmodel.user-personal-verifyinfo',
	    data: {
	        name: 'QNCMS'
	    }
	
	});

更改data的值，获取vm对象后，使用setData方法

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

	