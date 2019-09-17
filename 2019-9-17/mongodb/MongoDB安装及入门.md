## MongoDB

### 与关系型DB的存储模型对应关系

1. Database	Database
2. Table    Collection
3. Row      Document
4. Column   Key/value or Document

### 理论基础

NoSQL 数据库的理论基础是CAP 理论，分别代表 Consistency（强一致性），Availability（可用性），Partition Tolerance（分区容错），分布式数据系统只能满足其中两个特性：

- C:系统在执行某项操作后仍然处于一致的状态。在分布式系统中，更新操作执行成功之后，所有的用户都能读取到最新的值，这样的系统被认为具有强一致性。
- A:用户执行的操作在一定时间内，必须返回结果。如果超时，那么操作回滚，跟操作没有发生一样。
- P:分布式系统是由多个分区节点组成的，每个分区节点都是一个独立的Server，P属性表明系统能够处理分区节点的动态加入和离开。

在构建分布式系统时，必须考虑CAP特性。传统的关系型DB，注重的是CA特性，数据一般存储在一台Server上。而处理海量数据的分布式存储和处理系统更注重AP，AP的优先级要高于C，但NoSQL并不是完全放弃一致性（Consistency），NoSQL保留数据的最终一致性（Eventually Consistency）。最终一致性是指更新操作完成之后，用户最终会读取到数据更新之后的值，但是会存在一定的时间窗口，用户仍会读取到更新之前的旧数据；在一定的时间延迟之后，数据达到一致性。

## 入门

### 启动MongoDB实例

环境变量设置成功之后，在C盘中创建一个文件夹data，用于存储MongoDB的数据库文件。然后，打开一个命令行工具，输入mongod 启动MongoDB实例，默认监听的TCP端口是 27017 。

	mongod

MongoDB同时启动一个HTTP服务器，监听27017端口，如果MongoDB 实例安装在本地，那么在浏览器中输入：http://localhost:27017/

It looks like you are trying to access MongoDB over HTTP on the native driver port.

mongod 是整个MongoDB最核心的进程，负责数据库的创建，删除等管理操作，运行在服务器端，监听客户端的请求，提供数据服务。

### 链接到MongoDB 实例

不要关闭MongoDB实例，新打开一个命令行工具，输入mongo ，该命令启动mongo shell，shell 将自动连接本地(localhost)的MongoDB实例，默认的端口是27017：

	mongo

mongo进程是构造一个Javascript Shell，用于跟mongod进程交互，根据mongod提供的接口对MongoDB数据库进行管理，相当于SSMS(SQL Server Management Studio)，是一个管理MongoDB的工具。

### 查看当前连接的DB

	db
	db.getName()

### 查看MongoDB实例中的db 和 collection

	show dbs
	show collections
	db.getCollectionNames()

### 切换db

	use foo

### 在foo数据库中创建users集合，向集合中插入一条document

	use foo
	db.users.insert({"name":"name 1",age:21})
	db.users.find()

### 关闭MongoDB 实例

在mongo shell中，执行以下命令，关闭MongoDB实例

	use admin
	db.shutdownServer()

### 帮助命令

	help

db.help()查看数据库级别的帮助
db.mycoll.help()查看集合级别的帮助

## mongod 命令常用参数

### 常用参数
mongod 是MongoDB系统的主要守护进程，用于处理数据请求，数据访问和执行后台管理操作，必须启动，才能访问MongoDB数据库。
在启动mongod时，常用的参数是：

- --dbpath <db_path>：存储MongoDB数据文件的目录
- --directoryperdb：指定每个数据库单独存储在一个目录中（directory），该目录位于--dbpath指定的目录下，每一个子目录都对应一个数据库名字。Uses a separate directory to store data for each database. The directories are under the --dbpath directory, and each subdirectory name corresponds to the database name.
- --logpath <log_path>：指定mongod记录日志的文件
- --fork：以后台deamon形式运行服务
- --journal：开始日志功能，通过保存操作日志来降低单机故障的恢复时间
- --config（或-f）<config_file_path>：配置文件，用于指定runtime options
- --bind_ip <ip address>：指定对外服务的绑定IP地址
- --port <port>：对外服务窗口
- --auth：启用验证，验证用户权限控制
- --syncdelay<value>：系统刷新disk的时间，单位是second，默认是60s
- --replSet <setname>：以副本集方式启动mongod，副本集的标识是setname

### MongoDB的启动方式
以命令方式启动，默认的dbpath是 C:\data\db

	mongod --dbpath=C:\data\db

以配置文档的方式启动

	mongod -f C:\data\db\mongodb_config.config

以daemon方式启动
	
	mongod -fork

查看mongod的启动参数

	db.serverCmdLineOpts()

### mongo命令常用参数

mongo 是一个交互式的js shell，提供了一个强大的js 环境，为DBA管理MongoDB，developer查询MongoDB数据提供接口。通过mongo shell和MongoDB进行交互，查询和修改MongoDB数据库，管理MongoDB数据库，维护MongoDB的副本集和分片集群，是一个非常强大的工具。

在启动mongo shell时，常用的参数是：

- --nodb: 阻止mongo在启动时连接到数据库实例；
- --port <port> ：指定mongo连接到mongod监听的TCP端口，默认的端口值是27017；
- --host <hostname> ：指定mongod运行的server，如果没有指定该参数，那么mongo尝试连接运行在本地（localhost）的mongod实例；

<db address>：指定mongo连接的数据库

- --username/-u <username> 和 --password/-p <password>：指定访问MongoDB数据库的账户和密码，只有当认证通过后，用户才能访问数据库；

- --authenticationDatabase <dbname>：指定创建User的数据库，在哪个数据库中创建User时，该数据库就是User的Authentication Database；