## npm包管理 ##
npm随着node安装自行进行安装，不用单独install

### 使用淘宝镜像 ###
使用镜像代理

*三种使用方法*

1. npm --registry https://registry.npm.taobao.org
2. npm config set registry https://registry.npm.taobao.org
3. **npm install -g cnpm --registry=https://registry.npm.taobao.org**

可通过npm config get registry来验证是否安装成功

## npm install安装提示不能识别@ ##

在需要安装的包名加上双引号，npm install '@***'
仅在cmd下需要添加双引号

## 安装node-sass使用镜像
	
	npm install node-sass --save-dev

越墙方式:需要在.npmrc(C:\Users\Administrator\.npmrc)文件中再加入如下内容，让这些连接也都只连接淘宝镜像：

	sass_binary_site=https://npm.taobao.org/mirrors/node-sass/