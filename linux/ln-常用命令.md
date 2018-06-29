## 安装

###  端口查询

1. yum install net-tools

		netstat -tunlp |grep 端口号
		netstat -anp | grep 进程名
		netstat -anp | grep PID

### 结束端口程序

		kill PID

