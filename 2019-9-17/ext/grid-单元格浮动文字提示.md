## grid store中record编辑


    {
        text: '擅长领域',
        dataIndex: 'speciality',
        flex: 1,
        align: 'center',
        renderer: function (value, metaData, record, rowIndex, colIndex) {
            metaData.tdAttr = 'qclass="x-tip" data-qtitle="名称：" data-qwidth="200" data-qtip="' +
                value + '"';
            return value;
        }
    }
	