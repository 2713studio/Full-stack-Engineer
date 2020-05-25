其中encodeURI()主要用于整个URI(例如，http://www.jxbh.cn/illegal value.htm)，而encode-URIComponent()主要用于对URI中的某一段(例如前面URI中的illegal value．htm)进行编码。它们的主要区别在于，encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；而encodeURIComponent()则会对它发现的任何非标准字符进行编码。来看下面的例子：
var uri="http://www.jxbh.cn/illegal value.htm#start";
//”http: //www.jxbh.cn/illegal%20value .htm#s tart”
alert(encodeURI (uri)):
//”http% 3A%2F%2Fwww.jxbh.cn%2 Fillegal%2 0value. htm%23 start”
alert( encodeURIComponent (uri));
————————————————
版权声明：本文为CSDN博主「baoleilei6」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_34629352/java/article/details/78959707

#### 总结

encodeURI()主要对整个url进行编码，无法对原本属于路径的特殊字符进行转码，比如斜杠，冒号，问号和井号

encodeURIComponent()是针对路由参数进行编码的，会对任何非标准字符进行编码

