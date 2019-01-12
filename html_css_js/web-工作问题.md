### 数组作为参数传递改变后原数组会改变吗

会改变，无论是形参还是赋值，只要改变，全部改变

值传递不会变，引用(对象)传递会改变

### 清空对象

	for(var key in student){
		delete student[key];
	}
	console.log(student);