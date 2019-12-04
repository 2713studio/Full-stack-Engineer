配置站点

```
server {
        listen       8001;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html/empty-ng;
            index  index.html index.htm;

            gzip on;
            gzip_http_version 1.1;
            gzip_comp_level 3;
            gzip_types application/javascript;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

