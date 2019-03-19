## linux下搭建node环境

使用angular5搭建three开发

1.  下载nodejs安装文件


2.  解压到自定义目录

		tar node-v8.10.0-linux-x64.tar.xz
3. 配置环境变量

		/etc/profile
		#set nodejs environment
		export NODE_HOME=/usr/xiex/node-v8.10.0-linux-x64
		export PATH=$PATH:$NODE_HOME/bin
		export NODE_PATH=$NODE_HOME/lib/node_modules
4. 开放端口

		/etc/sysconfig/iptables
		-A IN_public_allow -p tcp -m tcp --dport 5555 -m conntrack --ctstate NEW -j ACCEPT

		service iptables restart
5. 后台运行

		nohup node app.js //不挂断的运行node服务
		nohup npm start > ../myout.file 2>&1 & // 重定向,报错的时候
		// 退出的时候用命令exit退出
		ctrl+z //将node服务放到后台，并且处于暂停状态
		bg 1 //激活任务序号为1的服务状态
		fg 1 //将后台中的命令调至前台继续运行
6. kill命令

		：关闭当前后台运行的命令：
        （1）通过jobs命令查看jobnum，然后执行kill %jobnum
		（2）通过ps命令查看进程号PID，然后执行  kill %PID，如果是前台进程的话，直接执行 Ctrl+c 就可以终止了

## 问题

### npm install提示git问题

需要安装git