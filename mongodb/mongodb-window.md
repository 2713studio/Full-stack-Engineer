## 现在安装window版本的mongodb

## 创建配置文件

	systemLog:
	    destination: file
	    path: C:\Program Files\MongoDB\Server\4.0\data\log\mongod.log
	storage:
	    dbPath: C:\Program Files\MongoDB\Server\4.0\data\db
	security:
	    authorization: enabled

## 安装服务

cd 到bin目录下

	./mongod.exe db --config "C:\mongodb\mongod.cfg" --install

## 启动服务

	net start MongoDB

## 问题

