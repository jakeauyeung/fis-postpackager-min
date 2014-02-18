###fis-postpackager-min
fis打包后处理插件，解决项目打包保持除min文件之外不做压缩处理。

####安装
```
npm install -g fis-postpackager-min
```

####用法
```
//fis-conf.js
fis.config.set('modules.postpackager','min');
```
>fis release 不能再附带参数--optimize|-o