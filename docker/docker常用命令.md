```
docker ps //查看运行中的容器，-a查看所有容器
docker images //查看所有镜像
docker rm name/id // 删除容器，参数为容器名称或者id
docker rmi name/id //删除镜像，参数为镜像名称或者id
docker stop name //停止容器，删除时必须先停止
docker restart name //重启容器
docker cp 镜像名:/**:~/** 复制镜像的文件
docker exec -it 容器名 bash 进入到容器的命令行模式
docker run -d -p 1:1 --name 容器名 镜像名 // 创建一个新容器
docker logs name/id 查看日志
```

