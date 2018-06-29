## 做弹出框提示

### 自定义弹出组件

页面

	<div class="tips">
	  <div class="main">
	    <div class="top">
	      <div style="margin-left: 10px;color:#333;font-size:18px;">{{ title || '确认操作' }}</div>
	      <div class="top-close">
	        <div class="close-btn" (click)="close(false)">×</div>
	      </div>
	    </div>
	    <div class="body">
	      <span style="color:#333;font-size:16px;margin-top: 30px;">{{ msg || '是否执行此操作？' }}</span>
	      <div class="btns">
	        <button (click)="close(false)">取消</button>
	        <button *ngIf="button!==''" (click)="close(true)">{{ button || '确定' }}</button>
	      </div>
	    </div>
	  </div>
	</div>

控制器

	import { Component, OnInit, EventEmitter } from '@angular/core';
	
	
	@Component({
	  selector: 'app-confirm',
	  templateUrl: './confirm.component.html',
	  styleUrls: ['./confirm.component.css']
	})
	export class ConfirmComponent implements OnInit {
	
	  title: string = '';
	  msg: string = '';
	  button: string = '';
	  constructor(
	  ) { }
	
	  ngOnInit() { }
	  close(trueOfFalse: boolean) { }
	}

### 弹出层

	import { ComponentFactoryResolver, ComponentFactory, ComponentRef, Type, Injector, ReflectiveInjector, Provider, ElementRef, EventEmitter } from '@angular/core';

	export class ComponentLoader<T>{
	  private _componentFactory: ComponentFactory<T>;
	  private componentRef: ComponentRef<T>;
	  private closeEvent: EventEmitter<boolean>;
	
	  constructor(
	    private _cfr: ComponentFactoryResolver,
	    private _injector: Injector) {
	  }
	
	  attch(componentType: Type<T>): ComponentLoader<T> {
	    this._componentFactory = this._cfr.resolveComponentFactory<T>(componentType);
	    return this;
	  }
	  private _parent: Element;
	  to(parent: string | ElementRef): ComponentLoader<T> {
	    if (parent instanceof ElementRef) {
	      this._parent = parent.nativeElement;
	    } else {
	      this._parent = document.querySelector(parent);
	    }
	    return this;
	  }
	  private _providers: Provider[] = [];
	  provider(provider: Provider) {
	    this._providers.push(provider);
	    return this;
	  }
	  // ComponentRef<T>
	  create(opts: {}): EventEmitter<boolean> {
	    this.closeEvent = new EventEmitter();
	    // const injector = Injector.create(this._providers as any[], this._injector);
	    const injector = ReflectiveInjector.resolveAndCreate(this._providers, this._injector);
	    const componentRef = this._componentFactory.create(injector);
	    Object.assign(componentRef.instance, opts, {
	      close: this.close,
	      closeEvent: this.closeEvent,
	      componentRef: componentRef
	    });
	    if (this._parent) {
	      this._parent.appendChild(componentRef.location.nativeElement);
	    }
	    componentRef.changeDetectorRef.markForCheck();
	    componentRef.changeDetectorRef.detectChanges();
	    this.componentRef = componentRef;
	    return this.closeEvent;
	  }
	  close(tof: boolean) {
	    var componentEl = this.componentRef.location.nativeElement;
	    componentEl.parentNode.removeChild(componentEl);
	    this.closeEvent.emit(tof);
	  }
	}

### 生成工厂

	import { ComponentFactoryResolver, Injector, Injectable, ElementRef } from '@angular/core';
	import { ComponentLoader } from './component-loader.class';
	
	@Injectable()
	export class ComponentLoaderFactory {
	    constructor(private _injector: Injector,
	        private _cfr: ComponentFactoryResolver) {
	
	    }
	
	    create<T>(): ComponentLoader<T> {
	        return new ComponentLoader(this._cfr, this._injector);
	    }
	}

### 显示组件服务

	import { Injectable, Injector, EventEmitter } from '@angular/core';
	import { ComponentLoaderFactory } from './component-loader.factory';
	import { ComponentLoader } from './component-loader.class';
	
	import { ConfirmComponent } from '../../common/confirm/confirm.component';
	
	@Injectable()
	export class ModalService {
	
	  private loader: ComponentLoader<ConfirmComponent>
	  constructor(
	    private _clf: ComponentLoaderFactory) {
	    this.loader = this._clf.create<ConfirmComponent>();
	  }
	  show(options: Object): EventEmitter<boolean> {
	    return this.loader
	      .attch(ConfirmComponent)
	      .to('body')
	      .create(options)
	  }
	}



	