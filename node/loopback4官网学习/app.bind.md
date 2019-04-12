	const app = new Api2713Application(options);
	app.bind('defaultName').to('xiexiao'); // BindingKey='hello', BoundValue='world'
	console.log(app.getSync<string>('defaultName')); // => 'world'


	constructor(@inject('defaultName') private name: string) { }