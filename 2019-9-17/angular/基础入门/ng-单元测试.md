## 测试

测试采用Angular测试工具集,针对不同功能采用不同的测试方式,目前文档会根据功能不断更新

### 测试服务依赖

提供示例，测试全局变量服务

#### 服务代码
	@Injectable()
	export class AppGlobalService {
	    resUrl: string;
	    userName: string;
	    constructor() {
	        this.resUrl = 'http://localhost:8001';
	        this.userName = 'Tourists';
	    }
	    getResUrl(): string {
	        return this.resUrl;
	    }
	    setResUrl(resurl: string): void {
	        this.resUrl = resurl;
	    }
	    setUserName(username: string):void{
	        this.userName = username;
	    }
	    getUserName():string{
	        return this.userName;
	    }
	}

#### 测试流程

1. 提供服务提供商

		import { AppGlobalService } from '../../app-global.service';
		providers: [AppGlobalService]

此处可提供服务替身，简化服务测试，目前使用替身后，提示原服务的方法不能用，此问题尚未解决，目前直接使用原服务，以后解决更新（2017-12-01 11:10:38）

2. 测试代码

		appGlobal = TestBed.get(AppGlobalService);
		it('should load resources url local:8001', () => {
		    fixture.detectChanges();
		    expect(appGlobal.getResUrl()).toBe('http://localhost:8001');
		  });
