## ngTemplateOutlet指令

这个指令表示在指定位置渲染ng-template模板内容，模板内通过let-key的方式访问属性内容

```
<div *ngTemplateOutlet="aaa;context:{$implicit:'xiexiao',code:'123123'}"></div>
<ng-template #aaa let-name let-code="code">{{name}}:{{code}}</ng-template>
```

