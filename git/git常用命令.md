```
git remote 查看所有远程仓库
git remote xxx 查看指定远程仓库地址
git remote set-url origin 你新的远程仓库地址

git remote rm origin 删除远处仓库
git remote add origin 你的新远程仓库地址
```



##### 分支

创建：git branch test

切换：git checkout -b test

远程分支就是把本地分支push到远程分支上，master就是一个默认的远程分支

git push origin test

git push origin local_test:remote_test(把本地分支推送到远程分支上，如果当前在test分支，可省略)

合并：git merge 其他分支（合并其他分支到当前分支）

删除分支：git branch -d test