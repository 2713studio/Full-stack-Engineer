### gulp.dest(path[, options])

能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。

	gulp.src('./client/templates/*.jade')
	  .pipe(jade())
	  .pipe(gulp.dest('./build/templates'))
	  .pipe(minify())
	  .pipe(gulp.dest('./build/minified_templates'));

文件被写入的路径是以所给的相对路径根据所给的目标目录计算而来。类似的，相对路径也可以根据所给的 base 来计算。

**path**

类型： String or Function

文件将被写入的路径（输出目录）。也可以传入一个函数，在函数中返回相应路径，这个函数也可以由 vinyl 文件实例 来提供。

**options**

类型： Object

options.cwd

类型： String 默认值： process.cwd()

输出目录的 cwd 参数，只在所给的输出目录是相对路径时候有效。

options.mode

类型： String 默认值： 0777

八进制权限字符，用以定义所有在输出目录中所创建的目录的权限。

**重命名**

gulp.dest()传入的路径参数，只能用来指定要生成的文件的目录，而不能指定生成文件的文件名，它生成文件的文件名使用的是导入到它的文件流自身的文件名，所以生成的文件名是由导入到它的文件流决定的，即使我们给它传入一个带有文件名的路径参数，然后它也会把这个文件名当做是目录名，例如：

	var gulp = require('gulp');
	gulp.src('script/jquery.js')
	    .pipe(gulp.dest('dist/foo.js'));
	//最终生成的文件路径为 dist/foo.js/jquery.js,而不是dist/foo.js

要想改变文件名，可以使用插件gulp-rename

gulp.dest(path)生成的文件路径是我们传入的path参数后面再加上gulp.src()中有通配符开始出现的那部分路径。例如：

**路径**

gulp.dest(path)生成的文件路径是我们传入的path参数后面再加上gulp.src()中有通配符开始出现的那部分路径。例如：

	var gulp = reruire('gulp');
	//有通配符开始出现的那部分路径为 **/*.js
	gulp.src('script/**/*.js')
	    .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/*.js
	//如果 **/*.js 匹配到的文件为 jquery/jquery.js ,则生成的文件路径为 dist/jquery/jquery.js

没有通配符的情况下：

	gulp.src('script/avalon/avalon.js') //没有通配符出现的情况
    	.pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/avalon.js

有通配符的情况下

	gulp.src('script/**/underscore.js')
	    //假设匹配到的文件为script/util/underscore.js
	    .pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/util/underscore.js
	
	gulp.src('script/*') //有通配符出现的那部分路径为 *
	    //假设匹配到的文件为script/zepto.js    
	    .pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/zepto.js

**通过base参数制定路径**

通过指定gulp.src()方法配置参数中的base属性，我们可以更灵活的来改变gulp.dest()生成的文件路径。
当我们没有在gulp.src()方法中配置base属性时，`base的默认值为通配符开始出现之前那部分路径`，例如：

	gulp.src('app/src/**/*.css') //此时base的值为 app/src

	ulp.src(script/lib/*.js) //没有配置base参数，此时默认的base路径为script/lib
	    //假设匹配到的文件为script/lib/jquery.js
	    .pipe(gulp.dest('build')) //生成的文件路径为 build/jquery.js
	
	gulp.src(script/lib/*.js, {base:'script'}) //配置了base参数，此时base路径为script
	    //假设匹配到的文件为script/lib/jquery.js
	    .pipe(gulp.dest('build')) //此时生成的文件路径为 build/lib/jquery.js    