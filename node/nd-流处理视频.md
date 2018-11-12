## 视频流文件处理

### readFileSync

同步读取文件，有大小限制，一般做图片处理

	let path = ctx.request.fields.files[0].path;// web上传的文件，其中files为字段名
	let url = path.resolve(__dirname, '../assets/1.mp4');// 本地文件
	let stat = fs.statSync(path);// 处理大小
	let content = fs.readFileSync(path, "base64");
	let data = Buffer.from(content, 'base64');
	ctx.body = data.slice(0, stat.size);

### createReadStream

文件流

    let buf = new Buffer.from('','base64'); // 空二进制数据流
	let url = path.resolve(__dirname, '../assets/3.mp4');
	// 生成可读文件流
    let readerStream = fs.createReadStream(url, {
        start: 0,
        end: 3332038*5,
        encoding: 'base64'
    });
	// 读取的数据存放到buffer中
    readerStream.on('data', function (data) {
        rsl += data;
    });
	// 定义一个承诺，在执行完可读操作后，返回总数据
    let sleep = async () => {
        return new Promise(rs => {
            readerStream.on('close', function () {
                console.log('copy over');
                console.log(rsl.length);
                let data = Buffer.from(rsl, 'base64');
                rs(data)
                // await next();
            });
        })
    }
    ctx.response.body = await sleep();


