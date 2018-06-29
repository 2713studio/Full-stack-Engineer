## 判断是否维是数组

	var arr = [1,2,3,1];
	var arr2 = [{ abac : 1, abc : 2 }];
	function isArrayFn(value){
		if (typeof Array.isArray === "function") {
			// IE9+、 Firefox 4+、Safari 5+、Opera 10.5+和Chrome都实现了这个方法。但是在IE8之前的版本是不支持的。
			return Array.isArray(value);
		}else{
			return Object.prototype.toString.call(value) === "[object Array]";
		}
	}
	alert(isArrayFn(arr));// true
	alert(isArrayFn(arr2));// true