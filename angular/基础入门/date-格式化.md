## 格式化日期插件

Angular2日期格式化
一、ts中调用
1.引入：import { DatePipe } from '@angular/common';
2.在module中provides添加；
2.加入构造函数：
constructor(
private http: Http,
private alertService: AlertService,
private datePipe: DatePipe,
) { }
3.方法中调用
 
 let dateStr:string = this.datePipe.transform(data.detailList[i].checkDate,'yyyy-MM-dd');
 
二、html中日期格式化
<div class="cell">
　　<div class="title">考核时间</div>
　　<div class="content">{{chkCheck.checkDate | date: 'yyyy-MM-dd'}}</div>
</div>
