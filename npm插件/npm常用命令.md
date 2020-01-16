### 清理缓存

```
npm cache verify
```

### 查看安装包列表

```
npm ls
npm ls -g
npm ls depath=0
```

### 更改全局包安装路径

```bash
# 第一步：在你的用户文件下新建一个文件夹，这个.npm-global 名字可以用你自己喜欢的名字替换，推荐直接使用这个名字。
mkdir ~/.npm-global
#第二步：更改node的安装连接
npm config set prefix '~/.npm-global'
#第三步：在用户的profile下增加path，为的是系统能够找到可执行文件的目录
 export PATH=~/.npm-global/bin:$PATH
#第四步：update profile。使其生效
source /etc/profile
```