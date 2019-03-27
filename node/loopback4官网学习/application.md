## lb4关键词

### application


> 什么是应用程序

在LoopBack 4中，应用程序类是设置模块的所有组件、控制器、服务器和绑定的中心类。应用程序类扩展上下文，并提供启动和停止自身及其关联服务器的控件。

在使用LoopBack 4时，我们强烈建议您创建自己的应用程序子类，以便更好地组织配置和设置。

> 创建自己的应用程序类

通过创建自己的应用程序类，您可以执行几个额外的任务，作为设置的一部分:

- 将配置传递给基类构造函数
- 在启动应用程序之前执行异步启动功能
- 在应用程序停止时执行优雅的清理功能

src/widget.application.ts

	import {Application} from '@loopback/core';
	import {RestComponent} from '@loopback/rest';
	import {UserController, ShoppingCartController} from './controllers';
	
	export class WidgetApplication extends Application {
	  constructor() {
	    // This is where you would pass configuration to the base constructor
	    // (as well as handle your own!)
	    super({
	      rest: {
	        port: 8080,
	      },
	    });
	
	    const app = this; // For clarity.
	    // You can bind to the Application-level context here.
	    // app.bind('foo').to(bar);
	    app.component(RestComponent);
	    app.controller(UserController);
	    app.controller(ShoppingCartController);
	  }
	
	  async stop() {
	    // This is where you would do whatever is necessary before stopping your
	    // app (graceful closing of connections, flushing buffers, etc)
	    console.log('Widget application is shutting down...');
	    // The superclass stop method will call stop on all servers that are
	    // bound to the application.
	    await super.stop();
	  }
	}

> 配置应用程序

您的应用程序可以配置构造函数参数、绑定或两者的组合

#### 绑定配置

在我们的示例中，绑定是最常见的应用程序配置形式。绑定是设置应用程序的推荐方法。
除了Context提供的绑定函数外，Application类还为常用的绑定提供了一些sugar函数，比如组件、服务器和控制器：

	export class MyApplication extends Application {
	  constructor() {
	    super();
	    this.component(MagicSuite);
	    this.server(RestServer, 'public');
	    this.server(RestServer, 'private');
	
	    this.controller(FooController);
	    this.controller(BarController);
	    this.controller(BazController);
	  }
	}

####组件

		app.component(MyComponent);
		app.component(RestComponent);

component函数允许在应用程序实例的上下文中绑定组件构造函数。
有关如何使用组件的更多信息，请参见使用组件。

####控制器
	    
	    app.controller(FooController);
	    app.controller(BarController);

与组件函数非常相似，controller函数允许将控制器绑定到应用程序上下文。

####服务器
		
		app.server(RestServer);
		app.servers([MyServer, GrpcServer]);

服务器函数与前面的函数非常相似，但是可以通过函数服务器对服务器进行批量绑定。

	const app = new Application();
	app.server(RestServer, 'public'); // {'public': RestServer}
	app.server(RestServer, 'private'); // {'private': RestServer}

在上面的示例中，这两个服务器实例将绑定到密钥服务器下的应用程序上下文。公共和服务器。私人的,分别。

####构造函数的配置

Application类构造函数还接受一个ApplicationConfig对象，该对象包含组件级配置，如RestServerConfig。它将自动为这些配置创建绑定，然后通过依赖注入注入。有关更多信息，请访问依赖项注入。

####应用程序设置技巧

下面是一些应用程序设置的技巧，以帮助避免常见的陷阱和错误。

> 使用RestServer时从RestApplication扩展

如果您想使用@loopback/rest包中的RestServer，我们建议在您的应用程序中扩展RestApplication，而不是手动绑定RestServer或RestComponent。RestApplication已经使用了RestComponent，并使RestServer中的有用函数(如handler())在应用程序级别可用。这意味着您可以调用RestServer函数在app构造函数中执行所有服务器级设置，而不必显式检索服务器实例。

> 提供静态文件

RestServer允许提供静态文件。它可以通过调用static() API来设置。

	app.static('/html', rootDirForHtml);

或者

	server.static(['/html', '/public'], rootDirForHtml);

不允许在/上挂载静态资产，以避免性能损失，因为/匹配所有路径并为每个HTTP请求引入文件系统访问。
static() API委托给servlet -static来提供静态文件。详情请参阅https://expressjs.com/en/starter/static-files.html和https://expressjs.com/en/4x/api.html#express.static。

静态资产在环回操作序列之前提供服务。如果抛出错误，则不会触发拒绝操作。

> 使用独特的绑定

使用前缀为唯一字符串的绑定名称，该字符串不与LoopBack的绑定重叠。例如，如果您的应用程序是为您的雇主FooCorp构建的，那么您可以在绑定前加上FooCorp前缀。

	// This is unlikely to conflict with keys used by other component developers
	// or within loopback itself!
	app.bind('fooCorp.widgetServer.config').to(widgetServerConfig);

> 避免使用getSync

我们为无法异步检索绑定的场景提供getSync函数，例如在构造函数体中。
但是，必须这样做的场景数量是有限的，您应该避免潜在的竞争条件，并尽可能使用get函数异步检索绑定。

> 使用单例绑定范围时要谨慎

默认情况下，每当注入或从绑定中检索控制器绑定时，控制器绑定将实例化一个新实例。您的应用程序应该只在有意义时在控制器上设置单例绑定范围。

