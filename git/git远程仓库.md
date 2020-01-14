```
git remote 查看所有远程仓库
git remote xxx 查看指定远程仓库地址
git remote set-url origin 你新的远程仓库地址

git remote rm origin 删除远处仓库
git remote add origin 你的新远程仓库地址
```



git init demo1  # 表示创建一个叫demo1的私人仓库

git init目录下只有一个.git隐藏文件夹，里面包含各种信息

git init --bare deme2  # 表示创建一个裸库，主要应用场景是作为公共仓库

裸库的目录下没有隐藏.git目录，全都是显示的，没有.git这个目录，进入文件直接是文件内容

一般来讲，作为远端备份或公共版本库时，应该使用git init --bare。