### 命令行安装

```
docker search redis
docker pull redis
```

### 启动服务

```
docker run --name redis -p 6379:6379 -d redis --requirepass "123456"
```
### 容器目录

```
docker exec -it redis bash
redis-cli
```
