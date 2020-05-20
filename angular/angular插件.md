[TOC]



# 分割线（angular-split）

[office]: https://bertrandg.github.io/angular-split/#/

```
npm install angular-split
```

```
import { AngularSplitModule } from 'angular-split';
  
@NgModule({
  imports: [
    AngularSplitModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule {}
```

# 自动取消订阅（until-destroy）

[git]: https://github.com/ngneat/until-destroy#readme

```
npm install @ngneat/until-destroy
```

```
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({})
export class InboxComponent {
  ngOnInit() {
    interval(1000)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
```

# 滚动（better-scroll）

[offic]: http://ustbhuangyi.github.io/better-scroll/doc/installation.html#npm

```
npm install better-scroll --save
```

```
import BScroll from 'better-scroll'
```



# 日期

## dayjs

[npm]: https://www.npmjs.com/package/dayjs

```
npm install dayjs --save
```

```
dayjs('2018-08-08') // parse
 
dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display
 
dayjs().set('month', 3).month() // get & set
 
dayjs().add(1, 'year') // manipulate
 
dayjs().isBefore(dayjs()) // query
```

## date-fns

[office]: https://date-fns.org/

```
npm install date-fns --save
```



```
import { compareAsc, format } from 'date-fns'
 
format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'
 
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10)
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

# 文件

## file-saver

[npm]: https://www.npmjs.com/package/file-saver

```
npm install file-saver --save
npm install @types/file-saver --save-dev
```



```
var FileSaver = require('file-saver');
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");

var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");

FileSaver.saveAs("https://httpbin.org/image", "image.jpg");

var canvas = document.getElementById("my-canvas");
canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});

var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(file);
```

# 网页转canvas（html2canvas）

[npm]: https://www.npmjs.com/package/html2canvas

# base64转码（base64.js）

[npm]: https://www.npmjs.com/package/js-base64

```
npm install --save js-base64
```

```
Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-
 
Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
// note .decodeURI() is unnecessary since it accepts both flavors
Base64.decode('5bCP6aO85by-');  // 小飼弾Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-
 
Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
// note .decodeURI() is unnecessary since it accepts both flavors
Base64.decode('5bCP6aO85by-');  // 小飼弾
```

# PDF（ng2-pdf-viewer）

[npm]: https://www.npmjs.com/package/ng2-pdf-viewer

```
npm install ng2-pdf-viewer --save
```

```
import { Component } from '@angular/core';
 
@Component({
  selector: 'example-app',
  template: `
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})
export class AppComponent {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}
```

