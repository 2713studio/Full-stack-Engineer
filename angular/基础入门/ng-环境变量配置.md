## angular7环境变量配置

1. 新建配置文件

	名字：environment.86.ts

	路径：src\environments\environment.86.ts

2. serve启动配置

	
	configurations配置下添加：

		"pro86": {
          "browserTarget": "qiannianwang1.0.0:build:pro86",
          "proxyConfig": "proxy.config86.json",
          "host": "0.0.0.0",
          "optimization": false,
          "sourceMap": false
        }

	"optimization"：打包优化配置关闭，防止开发时卡顿

	"sourceMap"：资源解析关闭，防止开发时卡顿

3. build配置

		"pro86": {
          "fileReplacements": [{
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.86.ts"
          }],
          "optimization": true,
          "outputHashing": "all",
          "sourceMap": false,
          "extractCss": true,
          "namedChunks": false,
          "aot": true,
          "extractLicenses": true,
          "vendorChunk": false,
          "buildOptimizer": true,
          "budgets": [{
            "type": "initial",
            "maximumWarning": "2mb",
            "maximumError": "5mb"
          }]
        }
	