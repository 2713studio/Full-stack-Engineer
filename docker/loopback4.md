### 安装node

```
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs
```

### 安装lb脚手架

```
npm i -g @loopback/cli
```

### 生成镜像

```
// 项目根目录下
docker build -t lb4 .
docker images
```

### 开启容器

```
docker run --name lb4 -p 3000:3000 -d lb4
docker ps 
```
### 
