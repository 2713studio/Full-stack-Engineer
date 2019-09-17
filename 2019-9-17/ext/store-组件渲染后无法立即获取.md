## store无法获取

场景：在使用bind绑定viewmodel中的store后，组件例如grid，afterrender方法中无法获取store，无法绑定相关事件，需要定时几毫秒后执行获取store的操作才可以！

办法：使用store直接绑定，如下所示

	store: Ext.create('Ext.data.Store', {
        proxy: {
            type: 'ajax',
            actionMethods: {
                create: 'POST',
                read: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            url: CFG.getServerUrl() + '/manage/pageDisplayInf',
            reader: {
                type: 'json',
                rootProperty: 'date'
            }
        }
        // autoLoad: true
    }),
    selModel: {
        mode: 'MULTI',
        type: 'checkboxmodel', //表格选中模式，有行复选框选中checkboxmodel、行选中rowmodel、单元格选中cellmodel
        checkOnly: false, //点击此行其他列是否选中复选框，true位必须点击复选框才有效
    },
