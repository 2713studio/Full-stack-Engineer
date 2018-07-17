## cmd创建项目dashboard

	// sdk路径：D:\XieXiao\ext-6.6.0

	 sencha -sdk D:\XieXiao\ext-6.6.0 generate app -s D:\XieXiao\ext-6.6.0\templates\admin-dashboard dashboard D:\XieXiao\dashboard

	// 修改app.json

	找到output配置项 修改base值
	"${ext.dir}/build/examples/admin-dashboard/${build.id}"

	改为

	"${workspace.build.dir}/${build.environment}/${app.name}/${build.id}"

快速启动

	sencha fs web -port 8000 start