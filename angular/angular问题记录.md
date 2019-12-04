## 超链接路由导航子路由规则

```
<a routerLink="link">Welcome</a>
```

link：路由地址，跟路由为：'/'，当前路由为：'./'，上一级路由为：'../'。

## httpClient delete

angular中httpclient delete请求，不接受body，只需将其放在options对象中即可

```
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  body:anyObject
};

this.httpClient
  .delete('http://localhost:8080/something', options)
  .subscribe((s) => {
    console.log(s);
  });
```

