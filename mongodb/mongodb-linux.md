## 搭建mongodb

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/ "官方教程")

### 安装所需插件

    yum install libcurl4 openssl

	tar zxvf mongodb-linux-x86_64-3.6.3.tgz

### 设置log路径

	// 创建实例目录
	mkdir -p /data/mongoDB/db
	// 创建实例日志目录
	mkdir -p /data/mongoDB/logs

### 运行

	mongod --dbpath /data/mongoDB/db --logpath /data/mongoDB/logs/mongod.log --fork
注：fork方式表示关闭窗口，后台依然运行，必须启用‘--logpath’

监听日志：tail -f /data/mongoDB/logs/mongod.log
[https://www.cnblogs.com/fps2tao/p/7698224.html](https://www.cnblogs.com/fps2tao/p/7698224.html "tail详解")

### bin路径下启动mongo shell

	./mongo

### 关闭服务
    
    use admin
    db.runCommand("shutdown")
	// 另一种
	db.shutdownServer();
注：没开启auth模式下，必须在localhost下才能关闭，而且必须在admin下

### 远程连接

	启动时添加参数--bind_ip_all
	启动时添加参数--bind_ip=0.0.0.0
	无法连接：尝试增加云服务安全组

### 添加权限验证

	第一次启动mongo时，不能开始验证，需要添加用户后，重启服务
	添加--auth参数
	参数可以使用Studio 3T视图操作，具体代码可以查看
注：mongdb是一个基于角色权限的管理，角色跟着数据库走，权限跟着角色走

## 问题

### 重启时报错

1. child process failed, exited with error number 48

	删除dbpath下的所有实例文件，然后重新启动

	netstat -tunlp |grep 27017查询到pid后kill掉，然后重启




