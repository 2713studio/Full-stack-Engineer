
## gulp.watch(glob [, opts], tasks) 或 gulp.watch(glob [, opts, cb])

监视文件，并且可以在文件发生改动时候做一些事情。它总会返回一个 EventEmitter 来发射（emit） change 事件。

### gulp.watch(glob[, opts], tasks)

**glob**

类型： String or Array

一个 glob 字符串，或者一个包含多个 glob 字符串的数组，用来指定具体监控哪些文件的变动。

**opts**

类型： Object

传给 gaze 的参数。

**tasks**

类型： Array

需要在文件变动后执行的一个或者多个通过 gulp.task() 创建的 task 的名字，

	var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
	watcher.on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});

### gulp.watch(glob[, opts, cb])

glob

类型： String or Array

一个 glob 字符串，或者一个包含多个 glob 字符串的数组，用来指定具体监控哪些文件的变动。

opts

类型： Object

传给 gaze 的参数。

cb(event)

类型： Function

每次变动需要执行的 callback。

	gulp.watch('js/**/*.js', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});

callback 会被传入一个名为 event 的对象。这个对象描述了所监控到的变动：

event.type

类型： String

发生的变动的类型：added, changed 或者 deleted。

event.path

类型： String

触发了该事件的文件的路径。