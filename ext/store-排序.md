## store排序

    
    load: function (self, records, successful, operation, eOpts) {
        self.sort('rId');
        self.filterBy(function (record, index) {
            if (record.get('rId') === 1 || record.get('rId') === 2) {
                return false;
            } else {
                return true;
            }
        });
        self.add({
            rId: 0,
            rName: '全部'
        })
        // self.load();  
    }

	