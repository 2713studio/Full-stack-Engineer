## ext grid model请求数据时，编辑参数

    beforeload: function (store, operation, eOpts) {
        var new_params = {
            ro_id: 0,
            tu_id: sessionStorage.getItem('userid')
        };
        Ext.apply(store.proxy.extraParams, new_params);
    },

### store初始化参数

store初始化请求参数详情

start：每次刷新的起始值，刷新后会自动变化，所以如果需要更新store，需要初始化一下start值，和page雷同

pageSize：表示limit值，一般需要在store配置里面声明，之后limit就可以省略了