## 表格分页

### 参数

	store: Ext.create('Ext.data.Store', {
        pageSize: 20, // 表示一页条数，必须设置
        proxy: {
            type: 'ajax',
            actionMethods: {
                create: 'POST',
                read: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
			startParam: 'start', // 起始位置实际参数名
            pageParam: 'pageIndex', // 起始页码变量实际参数名
            limitParam: 'pageSize', // 页码条数实际参数名
            url: CFG.getServerUrl() + '/demand/scrDemand',
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'totalCount'
            }
        },
        listeners: {
            load: function (self, records, successful, operation, eOpts) {
                records.forEach(element => {
                    element.data = Object.assign(element.data, element.data.demandInfo) || '';
                });
                self.setRecords(records);
            }
        },
        // autoLoad: true
    })

### 加载

	gridStore.reload({
        params: {
            pageIndex: 1,
            pageSize: 20
        }
    });