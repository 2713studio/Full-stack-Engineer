#### 查看ssh

`ssh -v`

#### 安装git

`yum install -y git`

#### 系统添加git用户

`adduser git`

`passwd git` git:code0513@

#### 配置ssh

```
# 1.切换到git账号
$ su git
# 2.进入 git账户的主目录
$ cd /home/git

# 3.创建.ssh的配置，如果此文件夹已经存在请忽略此步。
$ mkdir .ssh

# 4. 进入刚创建的.ssh目录并创建authorized_keys文件,此文件存放客户端远程访问的 ssh的公钥。
$ cd /home/git/.ssh
$ touch authorized_keys

# 5. 设置权限，此步骤不能省略，而且权限值也不要改，不然会报错。
$ chmod 700 /home/git/.ssh/
$ chmod 600 /home/git/.ssh/authorized_keys
```

#### 创建ssh公钥

```
C:\Program Files\Git\usr\bin
.\ssh-keygen.exe -t rsa

C:\Users\EDZ\ .ssh 
将id_rsa.pub的内容copy到服务器的/home/git/.ssh/authorized_keys中

C:\Program Files\Git\usr\bin
.\ssh.exe git@IP地址 输入yes后连接成功表示可以了
```

#### 创建空库

```shell
# 切换到git账号
$ su git

# 进入git账号的用户主目录。
$ cd /home/git

# 在用户主目录下创建 test.git仓库的文件夹
$ mkdir test.git  && cd test.git

# 在test.git目录下初始化git仓库
$ git init --bare

# 输出如下内容，表示成功
Initialized empty Git repository in /home/git/test.git/ 
```

#### 克隆上传

```shell
$ git add .
$ git commit -m 'the first commit'

# 把当前仓库跟远程仓库添映射
$ git remote add origin git@aicoder.com:test.git

# 把当前仓库push到远程仓库。
$ git push -u origin master
```

注：如提示连接错误，可能是文件访问权限不够，在服务端git目录下执行：chown -vR git *  

#### 禁止shell登录

```shell
$ vim /etc/passwd

# 可以通过 vim的正则搜索快速定位到这行，  命名模式下  :/git:x

# 找到这句, 注意1000可能是别的数字
git:x:1000:1000::/home/git:/bin/bash

# 改为：
git:x:1000:1000::/home/git:/bin/git-shell

# 最好不要直接改，可以先复制一行，然后注释掉一行，修改一行，保留原始的，这就是经验！！！
# vim快捷键： 命令模式下：yy复制行， p 粘贴  0光标到行首 $到行尾 x删除一个字符  i进入插入模式 
# 修改完后退出保存：  esc进入命令模式， 输入：:wq!   保存退出。
```

注：vim操作快捷方式

输入模式：i

命令行模式：esc->:    w保存 q退出 q!不保存退出