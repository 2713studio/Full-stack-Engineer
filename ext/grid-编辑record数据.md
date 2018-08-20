## grid store中record编辑

	listeners: {
        load: function (self, records, successful, operation, eOpts) {
            let page = operation._page - 1;
            records.forEach((element, i) => {
                element.data.index = page * 20 + i + 1;
            });
            self.setRecords(records);
        }
    }

	