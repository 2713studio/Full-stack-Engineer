## lb4创建restfulAPI流程

1. lb4 app
2. lb4 model
3. lb4 datasource

	mongo格式：

		{
		  "name": "admin",
		  "connector": "mongodb",
		  "url": "",
		  "host": "148.70.46.98",
		  "port": 27017,
		  "user": "xiexiao",
		  "password": "123456",
		  "database": "2713studio"
		}
	
4. lb4 repository
5. lb4 controller

## 问题

### node启动后，无法使用IP访问

根目录下index.js中 更改localhost为'0.0.0.0',重新启动即可。