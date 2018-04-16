## image组件添加单击事件

    listeners: {
        //监听click事件
        el: {
            click: function () {
                console.log(this)
            }
        }
    }