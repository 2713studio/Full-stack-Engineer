# nginx

## 重定向

解决angular刷新404问题

这里其实是由if变过来的，意思是如果uri存在，那就访问uri的资源，如果uri不存在，那就访问该目录下index.html文件。如果看不懂我的解释，可以看这个https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#front-controller-pattern-web-apps

作者：丶淡恋小情绪x
链接：https://www.jianshu.com/p/d511ad2d07c5
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。

	location / {
	    root   html/hello-ng/;
	    # index  index.html;
	    try_files $uri $uri/ /index.html;
	}
