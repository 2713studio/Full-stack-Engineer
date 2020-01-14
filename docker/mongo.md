### 命令行安装

​    docker search mongo
​    docker pull mongo

###  命令行启动

​    docker run --name mongo -p 27017:27017 -d mongo --auth

​	--name：容器名称，可用作暂停和移除容器
​	-p：端口设定
​	-d：后台运行配置
​	--auth：启动权限认证

### 权限设定流程
使用可视化工具操作；
假设新安装的mongo数据库，第一次开始；

 1. 启动启动mongo容器，开启权限认证
 2. 使用docker进入mongo的cmd命令模式

	```
	docker exec -it mongo bash
	mongo
	```
3. 添加用户信息

	```
	>mongo
	>use admin;
	>db.createUser({user: 'root', pwd: '123456', roles: ['root']})
	```

直接进入admin，教程来自菜鸟：

```
$ docker exec -it mongo mongo admin
# 创建一个名为 admin，密码为 123456 的用户。
>  db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'}]});
# 尝试使用上面创建的用户信息进行连接。
> db.auth('admin', '123456')

# 然后直接在admin下添加数据库的管理员即可
```

### 新增数据库

通过mongo服务器上的命令行操作，创建新的数据并添加用户，此处必须在admin数据库下通过db.auth()方法认证才可以，否则会提示没有权限；
```
use xiexiao

db.createUser({
    user:"xiexiao",
    pwd:"123456",
    roles:[{
        role:"dbAdmin",
        db:"xiexiao"
    },{
        role:"readWrite",
        db:"xiexiao"
    }]
})
```

添加成功后：db.getUsers()查看当前库下所有的用户