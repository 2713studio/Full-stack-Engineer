## 使用angular-cli脚手架开发ng ##

    angular=>5.*;cli=>1.5.*

### 安装angular-cli ###

	npm install -g '@angular/cli'

### 生成init程序 ###

	ng new hello-ng

### 使用@angular/compiler-cli和rollup打包部署(AOT) ###

> 安装npm包

	- npm install '@angular/compiler-cli' '@angular/platform-server' --save
	- npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify --save-dev

> 配置tsconfig-aot.json文件

	{
	    "compileOnSave": false,
	    "compilerOptions": {
	        "sourceMap": true,
	        "allowJs": true,
	        "declaration": false,
	        "module": "es2015",
	        "moduleResolution": "node",
	        "emitDecoratorMetadata": true,
	        "experimentalDecorators": true,
	        "target": "es5",
	        "typeRoots": [
	            "node_modules/@types"
	        ],
	        "lib": [
	            "es2017",
	            "dom"
	        ]
	    },
	
	    "files": [
	        "src/app/app.module.ts",
	        "src/main.ts"
	    ],
	    "angularCompilerOptions": {
	        "outDir": "aot",
	        "skipMetadataEmit": true
	    }
	}

> 执行打包程序，把ts文件集中打包成js文件

	node_modules/.bin/ngc -p tsconfig-aot.json

> 更改aot下main.js引导方式

> 此处直接修改js文件，理论上应该修改ts文件重新打包一下！

    import { platformBrowser } from '@angular/platform-browser';
	import { AppModuleNgFactory } from './app/app.module.ngfactory';
	
	console.log('Running AOT compiled');
	platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

> 配置rollup-config.json压缩文件

	import nodeResolve from 'rollup-plugin-node-resolve';
	import commonjs from 'rollup-plugin-commonjs';
	import uglify from 'rollup-plugin-uglify';
	
	export default {
	    input: 'aot/src/main.js',
	    output: {
	        file: 'src/bundle.js',
	        format: 'cjs'
	    },
	    sourceMap: false,
	    // format: 'iife',
	    onwarn: function(warning) {
	        // Skip certain warnings
	
	        // should intercept ... but doesn't in some rollup versions
	        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
	
	        // console.warn everything else
	        console.warn(warning.message);
	    },
	    plugins: [
	        nodeResolve({ jsnext: true, module: true }),
	        commonjs({
	            include: 'node_modules/rxjs/**',
	        }),
	        uglify()
	    ]
	};

> 执行rollup

	node_modules/.bin/rollup -c rollup-config.js

> index.html页修改

    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
	<app-root></app-root>
    <script src="bundle.js"></script>

# V1.0.1 #

在执行node_modules/.bin/ngc -p tsconfig-aot.json的时候，会提示5055错误，原因是无法写入文件，因为会引起覆盖，尚未找到解决办法，目前的方法是

- 第一次执行生成apt文件夹，然后更改main.ts文件内容

        import { enableProdMode } from '@angular/core';
    	import { platformBrowser } from '@angular/platform-browser';
    	import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
    	
    	enableProdMode();
    	console.log('Running AOT compiled');
    	platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


- 更改tsconfig-aot.json文件配置，使输出到aot1文件夹

	    "angularCompilerOptions": {
	        "outDir": "aot1",
	        "skipMetadataEmit": true
	    }

- 更改aot1/src/main.js中的引用路径

		import { AppModuleNgFactory } from './app/app.module.ngfactory';

- 更改rollup-config.js入口路径
		
		input: 'aot1/src/main.js'

然后执行node_modules/.bin/rollup -c rollup-config.js打包bundle.js文件
