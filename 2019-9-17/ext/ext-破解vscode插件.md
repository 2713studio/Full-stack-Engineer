## Ext6中this各个上下文中的含义

1. 安装 Sencha Plugin for VS Code

	不要在VSCode的扩展搜索框里搜索安装 Sencha 扩展，有几个人反映这样安装的扩展无法使用。
	应该在 VSCode 扩展页，点击右上角的"...", 从 VSIX 安装。选择senchaVScode-1.0.1.vsix

	![](https://img-blog.csdn.net/20171128151558869)

2. 下面就开始破解了

	用高级一点的编辑器打开：
	C:\Users\你的用户名\.vscode\extensions\Sencha.vscode-extjs-版本号\out\src\LicenseManager.js  
	![](https://img-blog.csdn.net/20170407165059536)

	loadLicense()方法中注释掉出最后一句外的所有代码，然后添加

	this.license = {
	    active: true,
	    full: true,
	    data: {}
	}

3. 重启VS Code

	是不是没有试用剩余天数或者过期提示了？

**[https://blog.csdn.net/lovelyelfpop/article/details/69568995](https://blog.csdn.net/lovelyelfpop/article/details/69568995)**

