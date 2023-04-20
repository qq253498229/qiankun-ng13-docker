# 网上商城系统

angular 15基座 + angular 15子应用

目前有两个前端模块以及一个nginx模块。

前端模块分别是【frontend/app0-main】的基座，以及【frontend/app1-shop】子应用。

带docker-compose的配置，k8s可以类比改成ingress或者是其它网关

文件结构:

```
📒 nginx 部署使用的nginx目录
  📄 Dockerfile 部署使用的docker构建文件
  📄 nginx.conf nginx配置文件
📒 frontend 前端源代码目录
  📒 app0-main 基座目录
  📒 app1-shop 子应用1目录
📄 docker-compose.yml 部署使用的docker compose文件
📄 LICENSE 开源协议
📄 README.md 说明文件
```

启动方式:

```shell
docker-compose build
docker-compose up -d
```

然后访问 http://localhost

## 其它

原来的angular13版本移动到了 [ng13](https://github.com/qq253498229/qiankun-ng13-docker/tree/ng13) 分支