## commitizen

### 安装

```
npm i commitizen cz-conventional-changelog --save-dev
```

### 配置package.json

```
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

或者全局安装commitizen，命令行生成

```
npm i -g commitizen
commitizen init cz-conventional-changelog --save --save-exact // 在项目目录下运行
```

### 添加script脚本命令

```
"commit": "git-cz",
```

### 运行

```
npm run commit
```

