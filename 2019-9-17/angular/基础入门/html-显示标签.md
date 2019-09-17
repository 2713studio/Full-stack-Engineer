## 页面添加html

### 定义指令‘html’

	import { Pipe, PipeTransform } from '@angular/core';
	import { DomSanitizer } from '@angular/platform-browser';
	
	@Pipe({
	    name: 'html'
	})
	
	export class HtmlPipe implements PipeTransform {
	
	    constructor(private sanitizer: DomSanitizer) {
	
	    }
	
	    transform(style) {
	        return this.sanitizer.bypassSecurityTrustHtml(style);
	    }
	}

### 引入模块

	import { HtmlPipe } from './utils/html-pipe';