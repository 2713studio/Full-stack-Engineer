## 单元格添加超链接

	{
        text: '未处理举报',
        dataIndex: 'account_status',
        flex: 1,
        align: 'center',
        renderer: function () {
            return '<a href="javascript:;">5</a>'
        },
        listeners: {
            click: 'onCellNoHandleClick'
        }
    }

	// 显示未处理举报弹窗
    onCellNoHandleClick: function (tabview, el, rowIndex, colIndex, e) {
        let me = this,
            tagName = e.target.tagName || '';
        if (tagName.toLowerCase() == 'a') {
            let libraryNum = tabview.getStore().getAt(rowIndex).get('library').libraryNum;
            me.showNoHandleTipWindows(libraryNum);
        }
    }

	