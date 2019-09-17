## build错误

### [ERR] C2001: Closure Compiler Error (Parse error. invalid assignment target)

1. mvc文件别名过长

	// 比如
	Ext.define('QNCMS.view.system.aaa-bbb.aaa-bbbController', {
	    extend: 'Ext.app.ViewController',
	    alias: 'controller.system-aaa-bbb-aaa-bbb'
	});
	
build的时候会报错，watch时无错误