## centos7搭建git

### 检测是否已安装git

	rpm -qa|grep git

python-pillow-2.0.0-19.gitd1c6db8.el7.x86_64标识已经安装

### 卸载git

	rpm -e --nodeps git  或者  rpm -e git

### 安装git
	
	yum install git