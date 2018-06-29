## 返回服务器上的图片文件

        var content = fs.readFileSync(path.resolve(__dirname, '..') + '/upload/1.png', "binary");
        let data = Buffer.from(content,'binary');
        ctx.body = data;

前端请求需要指定返回类型，angular6为bold：

	const rsl = this.http.post('/v1/transmitFile', params, { responseType: 'blob' });
    rsl.subscribe(data => {
      console.log(data);
      let blob = new Blob();
      blob = data;
      this.picSrc = window.URL.createObjectURL(blob);
    });

## 返回前端传递的文件

使用koa框架，需要引入中间件解析form-data文件参数

	const bodyParse = require('koa-better-body');
	app.use(bodyParse({
	    multipart: true
	}));

读取缓存中的文件流，返回到浏览器

	console.log(ctx.request.fields.file[0].path);
    var content = fs.readFileSync(ctx.request.fields.file[0].path, "binary");
    let data = Buffer.from(content,'binary');
    ctx.body = data;