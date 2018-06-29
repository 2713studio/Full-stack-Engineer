## 使用scss

1. 安装node-sass

		"node-sass": "^4.9.0"

2. 修改angular-cli.json

		"defaults": {
		     "styleExt": "scss",
		}
		"styles": [
	        "styles.css"
	      ]

node:安装node-sass由于需要连接github在连接aws，很难成功，需要在.npmrc文件中再加入如下内容，让这些连接也都只连接淘宝镜像：
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

