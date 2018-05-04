# Javascript 基础

- 同步和异步
- 回调
- json、ajax和jsonp
- call()、apply()、bind()
- 闭包
- 作用域
- 上下文
- this关键字
- 原型和原型链
- 基于原型的继承


# IDE

[VSCode + ESlint + Sencha Plugin](http://note.youdao.com/noteshare?id=4a84aab741f2f9eec3f6fb34cf99be44&sub=D0D3F984BFFF45E0BBCD8EAD0E752CB7)


# ESLint

- javascript 代码规范
    - 命名规范：变量名、函数名
- [利用 ESLint 统一团队内开发 ExtJS6 项目 的 javascript 代码规范](http://blog.csdn.net/lovelyelfpop/article/details/78527548)


# [ECMAScript 6](http://es6.ruanyifeng.com/#docs/intro)

- const / let
- 函数的扩展
	- 箭头函数
	- 参数默认值
- object key value 简写
- 模板字符串
- Array 的扩展
	- forEach/map/some/every
	- for(let item of array) { }


# ExtJS

- [官方指南 + API 文档](http://docs.sencha.com/extjs/6.5.2/guides/getting_started/getting_started.html)
	- [官方指南部分中文翻译](https://github.com/lovelyelfpop/Sencha_Cmd6_Extjs6_Guides)
- [官方示例](http://examples.sencha.com/extjs/6.5.1/examples)
	- [Kitchen Sink 示例](http://examples.sencha.com/extjs/6.5.1/examples/kitchensink/?modern)
	- [Admin Dashboard 示例](http://examples.sencha.com/extjs/6.5.1/examples/admin-dashboard/?modern)
	- [Coworkee 员工通讯录示例](http://phx-dev.sencha.com:3000)
		- [项目Github地址](https://github.com/sencha-extjs-examples/Coworkee)
- 其它书籍
	- [ExtJS 6 Tutorial 英文原版](https://pan.baidu.com/s/1c17fugC)
	- ExtJS 6 By Example
		- [英文原版](https://pan.baidu.com/s/1gf1PMaZ)
		- [中文翻译](http://blog.csdn.net/lovelyelfpop/article/details/53893837)

## Viewport

## Component

## 容器 Container

## 类和实例 
- 定义类defined
- 继承extend、覆盖override
- 单例类singleton
- 静态成员statics、私有成员privates
- 实例化方法 create/widget/factory

## 布局 Layout
box(vbox/hbox)、和 css3 弹性盒子布局 的关系

## 事件 Events
fireEvent/on/un

## 命名规范
类名、xtype、cls样式类
文件名和类名要对应

## 注释规范

## 项目结构 app.json
- [环境搭建: ExtJS / Sencha cmd](http://note.youdao.com/noteshare?id=5901fca6f19febbd9066317197d1df8f&sub=F60B5D21815B429EB3B8B8064D06618B)

- [在浏览器访问 ext-6.x.x-trial.zip 里 examples示例 的正确方法](http://blog.csdn.net/lovelyelfpop/article/details/76229468)

- 创建项目
假设 extjs sdk 解压到了 `D:\extjs` 目录下
	- 方法1
		- `sencha config --prop sencha.sdk.path=D:\extjs --save` (只永久执行一次)
		- `cd /d D:\demo`
		- `sencha app init --ext@6.5.2 --modern Demo`
	- 方法2
		- `sencha -sdk D:\extjs\ext-6.5.2 generate app -modern Demo D:\demo`

## sencha app watch

## 构建 sencha app build

## 配置项
- [介绍](http://blog.csdn.net/lovelyelfpop/article/details/78644620)
- [高级使用](http://blog.csdn.net/lovelyelfpop/article/details/78645085)
- 访问配置项的错误方法
	- `textfield.config.readonly`
	- `list.store`

## 数据包装 
Store / Model / Record / Field

## 多重继承
Mixin
	
## 包 package
theme / code

## 多语言
[modern-locale](https://github.com/wemersonjanuario/modern-locale)

## 主题和样式 
sass / scss、Theme、ui、字体图标
[ExtJS 6 的一些 样式类配置项](http://blog.csdn.net/lovelyelfpop/article/details/78878842)

## 模板
tpl、itemTpl

## 寻找(定位)组件
[ComponentQuery](http://docs.sencha.com/extjs/6.5.2/modern/Ext.ComponentQuery.html)

## dom 操作
[ExtJs大比拼JQuery：Dom文档操作](http://note.youdao.com/noteshare?id=4de8ec0096fbceeb433c57f1bb9eaf3c&sub=web1367540314594)

## [十大要避免的开发方法](http://blog.csdn.net/lovelyelfpop/article/details/68927407)


## 资源管理 Resource Management

## 引用第三方 javascript 库

## ViewModel

## View控制器 ViewController

## app控制器 Controller

## 路由 Router

## 多屏幕适配
