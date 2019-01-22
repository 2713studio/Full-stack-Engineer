## 是手机等处于局域网的浏览器可访问npm start跑起来的服务端

### 更改文件内容

路径：node_modules/webpack-dev-server/lib/Server.js

	Server.prototype.checkHost = function(headers){
		……
    	return true;
	}
### 修改配置文件package.json

    "start": "ng serve --host 0.0.0.0"