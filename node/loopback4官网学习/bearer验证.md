## 安装包

npm install --save passport passport-http-bearer
npm install --save-dev @types/passport @types/passport-http-bearer

## 创建provider文件

SelfAuthStrategyProvider

	// src/providers/auth-strategy.provider.ts
	import { Provider, inject, Setter, ValueOrPromise } from '@loopback/context';
	import { Request, RestBindings } from '@loopback/rest';
	import {
	  AuthenticationBindings,
	  AuthenticationMetadata,
	  UserProfile,
	} from '@loopback/authentication';
	import { Strategy } from 'passport';
	import { Strategy as BearerStrategy } from 'passport-http-bearer';
	
	export class SelfAuthStrategyProvider implements Provider<Strategy | undefined> {
	  constructor(
	    @inject(AuthenticationBindings.METADATA)
	    private metadata: AuthenticationMetadata,
	    @inject.setter(AuthenticationBindings.CURRENT_USER)
	    readonly setCurrentUser: Setter<UserProfile>,
	    @inject(RestBindings.Http.REQUEST) private req: Request,
	  ) { }
	
	  value(): ValueOrPromise<Strategy | undefined> {
	    // The function was not decorated, so we shouldn't attempt authentication
	    if (!this.metadata) {
	      return undefined;
	    }
	
	    const name = this.metadata.strategy;
	    if (name === 'BearerStrategy') {
	      return new BearerStrategy(this.verify);
	    } else {
	      return Promise.reject(`The strategy ${name} is not available.`);
	    }
	  }
	
	  verify(
	    token: string,
	    cb: (err: Error | null, user?: UserProfile | false) => void,
	  ) {
	    // find user by name & password
	    // call cb(null, false) when user not found
	    // call cb(null, user) when user is authenticated
	    cb(null, {
	      id: token
	    })
	  }
	}

## 绑定authen组件

	// src\application.ts
    this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      SelfAuthStrategyProvider,
    );

## sequence调用


    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,


      await this.authenticateRequest(request);


## 方法添加装饰器

	@authenticate('BearerStrategy')