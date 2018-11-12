## linux下搭建nginx代理

1. 安装nginx

		//一键安装上面四个依赖
		yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel

2. 下载nginx的tar包

		//创建一个文件夹
		cd /usr/local
		mkdir nginx
		cd nginx
		//下载tar包
		wget http://nginx.org/download/nginx-1.13.7.tar.gz
		tar -xvf nginx-1.13.7.tar.g

	注：可以在官网直接下载然后通过ftp软件上传到linux服务器

3. 安装nginx

		//进入nginx目录
		cd /usr/local/nginx
		//执行命令 指定安装目录
		./configure --prefix=/usr/local/nginx 
		//执行make命令
		make
		//执行make install命令
		make install.

4. Nginx常用命令

		//测试配置文件
		安装路径下的/nginx/sbin/nginx -t
		//启动命令
		安装路径下的/nginx/sbin/nginx
		//停止命令
		安装路径下的/nginx/sbin/nginx -s stop
		或者 : nginx -s quit
		//重启命令
		安装路径下的/nginx/sbin/nginx -s reload

		//查看进程命令
		ps -ef | grep nginx
		//平滑重启
		kill -HUP Nginx主进程号

5. 开放端口

		//打开防火墙文件
		/etc/sysconfig/iptables
		/添加以下配置
		-A IN_public_allow -p tcp -m tcp --dport 80 -m conntrack --ctstate NEW -j ACCEPT
		重启防火墙
		service iptables restart

6. 卸载

		rm -rf /etc/nginx/
		rm -rf /usr/sbin/nginx
	删除目录

## linux下搭建nginx代理websocket

ws服务地址：ws://10.66.226.86:8080/qnnet/chatServer
nginx代理地址：10.66.5.125:80
nginx版本(>1.3)

1. 更改ws地址

		wsURL: string = 'ws://10.66.5.125:80/qnnet/chatServer';

2. 配置代理

    upstream websocket {
        server 10.66.5.123:8080;
    }
		
        location /qnnet/chatServer {
           proxy_pass http://10.66.5.123:8080/qnnet/chatServer;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "upgrade";
        }

## 配置子域名

添加一个80端口的监听即可

	server_name  wxbms.shqncs.com;