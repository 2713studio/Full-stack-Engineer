### 命令行安装

```
docker search nginx
docker pull nginx
```

### 启动服务

```
docker run --name nginx -p 80:80 -d nginx
```
### 容器目录

```
docker exec -it nginx bash
```
### 容器资源路径
日志文件位置：/var/log/nginx/
配置文件位置： /etc/nginx/conf.d/
资源存放的位置： /usr/share/nginx/html/

知道了资源路径，就可以自定义挂载配置了

### 挂载启动服务



```
docker run --name nginx -p 80:80 -v /home/nginx/conf/default.conf:/etc/nginx/conf.d/default.conf -v /home/nginx/html:/usr/share/nginx/html -v /home/upload:/usr/share/nginx/upload -d nginx
```

```
docker run --name nginx -p 80:80 -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/html:/usr/share/nginx/html -v /home/upload:/usr/share/nginx/upload -d nginx
```

```
docker run \
-p 8055:80 \
--name nginx \
-v ~/xx/nginx/conf/nginx.1.conf:/etc/nginx/nginx.conf \
-v ~/xx/nginx/www/:/usr/share/nginx/html \
-d nginx
```

分别挂载了nginx配置文件和web目录

### 多网站启动
指的是nginx服务器下有多个网站需要代理，此时通过docker创建多个容器来达到目的；
只需要重新更新配置文件，然后创建一个docker容器即可；
例如，我想创建一个jk的网站，需要在配置文件中设置代理配置，然后在www目录下上传网站文件，然后重新运行一个docker容器即可：

```
 docker run \
 -p 8056:8081 \
 --name nginx-jk \
 -v ~/xx/nginx/conf/nginx.1.conf:/etc/nginx/nginx.conf \
 -v ~/xx/nginx/www/:/usr/share/nginx/html \
 -d nginx
```

#### 注：直接更改配置文件，需要挂载conf.d目录下的配置文件

```
docker run -d -p 80:80 --name nginx -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/default.conf:/etc/nginx/conf.d/default.conf -v ~/nginx/logs:/var/log/nginx nginx
```

#### 挂载配置文件配置文件服务，死活找不到文件，原来路径有说法

```
location /images1/images2/ {
        root   /usr/local/;
        autoindex on;
    }
    
他会去你的服务器的/usr/local/images1/images2/ 下找文件  而不是 /usr/local/下去找文件
```

