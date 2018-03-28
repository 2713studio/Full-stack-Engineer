## angular跨域请求

### 两种方法

#### 使用json文件，反响代理接口路径

1. 首先需要建立一个JSON文件,文件名”proxy.config.json”
	
		{
		  "/api":{
		    "target":"http://106.15.179.92"
		  }
		}

2. 然后配置”package.json”文件

		"scripts": {
		  "ng": "ng",
		  "start": "ng serve  --proxy-config proxy.config.json",
		  "build": "ng build  --prod --aot",
		  "test": "ng test",
		  "lint": "ng lint",
		  "e2e": "ng e2e"
		}

#### 使用nginx反向代理

主要配置文件conf/nginx.conf，感动其中的‘server’如下

	
        listen       3200;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
            proxy_pass  http://localhost:4200;
 
        }
	    location /v1 { #添加访问目录为/apis的代理配置
			rewrite  ^/vi/(.*)$ /$1 break;
			proxy_pass   http://localhost:5555;
        }

意思是将4200和5555端口全部代理到3200下面，形成同域处理！
