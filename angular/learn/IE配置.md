## IE兼容

Angular自身是以新浏览器平台为主要目标的，默认没有设置对IE的支持，需要手动进行设置。

1. tsconfig.json

tsconfig.json文件中有一项需要特别注意

	"target": "es5"
如果使用es2015，IE浏览器就会报出Syntax Error，原因是所有IE版本都不支持ES2015（ES6）。通常IE版本（除IE8以外）都支持ES5，IE8仅支持ES3。

2. src/polyfills.ts

polyfills.ts文件中有这一行

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
其下所有js依赖都需要引入

	import 'core-js/es6/symbol';
	import 'core-js/es6/object';
	import 'core-js/es6/function';
	import 'core-js/es6/parse-int';
	import 'core-js/es6/parse-float';
	import 'core-js/es6/number';
	import 'core-js/es6/math';
	import 'core-js/es6/string';
	import 'core-js/es6/date';
	import 'core-js/es6/array';
	import 'core-js/es6/regexp';
	import 'core-js/es6/map';
	import 'core-js/es6/weak-map';
	import 'core-js/es6/set';

除去这些依赖，Angular还有IE下对SVG元素的支持，animation依赖包，以及针对IE8-IE10的管道数据支持，这些都需要手动取消注释，将其引入。