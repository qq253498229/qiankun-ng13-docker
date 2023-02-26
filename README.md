# 网上商城系统

angular 13基座 + angular 13子应用

目前只有两个前端模块以及一个nginx模块。前端模块分别是【frontend/app0-main】的基座，以及【frontend/app1-shop】子应用。
frontend/app1-logistics和backend/demo是最开始计划要做的，后来太懒了就扔那了，请忽略。

带docker-compose的配置，k8s可以类比改成ingress或者是其它网关

启动方式:

```shell
docker-compose build
docker-compose up -d
```

然后访问http://localhost
