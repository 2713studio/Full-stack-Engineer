## store排序

    dataList: {
        pageSize: 20,
        autoLoad: {
            start: 1,
            limit: 20
        },
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: CFG.getServerUrl() + '/perusermanControl/personalRealNameAudit',
            extraParams: {
                id: sessionStorage.getItem('userid')
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        sorters: [{
            property: 'submit',
            direction: 'desc'
        }],
        listeners: {
            load: function (self, records, successful, operation, eOpts) {
                console.log(records)
            }
        }
    }

	