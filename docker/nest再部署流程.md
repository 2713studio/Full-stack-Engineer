#### 删除旧镜像

```
docker rmi name
```

#### 创建新镜像

```
docker build -t mgame .
```

#### 创建容器

```
docker run --name mgame -v /home/upload:/home/upload -p 3000:3000 -u root -d mgame
```

