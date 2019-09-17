## 添加和更改数值

	listeners: {
        change: 'onStatusChange',
        afterrender: function (self, eOpts) {
            self.getStore().getData().items[0].set('text','请选择文章分类');
            self.getStore().add({
                value: '其它',
                text: '其它'
            });
        }
    }