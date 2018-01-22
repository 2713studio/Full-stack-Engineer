## 数组-无法识别系统方法


	private items: ITEM[];
	@Output() sendPage = new EventEmitter<number>();
	private selectPage: number;
	constructor() {
		this.items = [];
	}

	ngOnInit() {
		this.selectPage = 1;
		this.pageCount = 100;
		// console.log(this.pageCount)
		for (let i = 1; i <= this.pageCount; i++) {
		  // this.items.push(new ITEM(i,i.toString()))
		  this.items.push(new ITEM(i, i.toString()));
		}
	}

需要在构造函数中初始化，否则报错