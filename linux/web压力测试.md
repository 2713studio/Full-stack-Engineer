## web压力测试

目前使用ab进行命令行测试

1. centos安装ab

		yum install httpd-tools

2. 输入测试命令行

		ab -kc 1000 -n 1000 http://localhost/ab.html

	这个指令会使用1000个并发，进行连接1000次

3.结果类似如下

		Benchmarking www.shqncs.com (be patient)
		Completed 100 requests
		Completed 200 requests
		Completed 300 requests
		Completed 400 requests
		Completed 500 requests
		Completed 600 requests
		Completed 700 requests
		Completed 800 requests
		Completed 900 requests
		Completed 1000 requests
		Finished 1000 requests
		
		
		Server Software:        nginx/1.13.12
		Server Hostname:        www.shqncs.com
		Server Port:            80
		
		Document Path:          /
		Document Length:        724 bytes
		
		Concurrency Level:      1000
		Time taken for tests:   2.557 seconds
		Complete requests:      1000
		Failed requests:        0
		Write errors:           0
		Keep-Alive requests:    1000
		Total transferred:      963000 bytes
		HTML transferred:       724000 bytes
		Requests per second:    391.07 [#/sec] (mean)
		Time per request:       2557.075 [ms] (mean)
		Time per request:       2.557 [ms] (mean, across all concurrent requests)
		Transfer rate:          367.78 [Kbytes/sec] received
		
		Connection Times (ms)
		              min  mean[+/-sd] median   max
		Connect:        0   52  54.6     16     162
		Processing:    22  544 576.0    339    2433
		Waiting:        5  520 578.0    231    2433
		Total:         27  596 592.5    438    2539
		
		Percentage of the requests served within a certain time (ms)
		  50%    438
		  66%    620
		  75%    935
		  80%   1263
		  90%   1675
		  95%   1727
		  98%   1979
		  99%   2073
		 100%   2539 (longest request)
