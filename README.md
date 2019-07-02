# TeleComWeapp
一个电信预约报装小程序，包括后台管理系统。

## 访问我的博客获取[更多信息](https://yujian95.cn/p/114a)

### 简介

#### 主要技术

- 小程序端: 使用**Mpvue + Wux weapp**
- Web 前端: 使用**Vue.js + Element UI+Nginx**
- Web 后台: 使用**Spring Boot + Mybaits +Tomcat**

#### 主要功能

![主要功能](https://yujian95.cn/p/114a/fun.png)

### 界面效果

#### 小程序界面

![小程序页面](https://yujian95.cn/p/114a/P1.jpg)
![小程序页面](https://yujian95.cn/p/114a/P2.jpg)
![小程序页面](https://yujian95.cn/p/114a/P3.jpg)
![小程序页面](https://yujian95.cn/p/114a/P4.jpg)
![小程序页面](https://yujian95.cn/p/114a/P5.jpg)

#### Web后台

![Web页面](https://yujian95.cn/p/114a/P6.jpg)


### 部署步骤

1.修改数据库url及密码.
2.创建数据库,执行建库脚本命令.
3.修改application.yml中端口号.
4.修改小程序中appid和servletId，修改请求url.
5.将小程序dist/wx中的代码上传到腾讯平台审核发布./将后台代码打包为war文件通过ftp传输到tomcat/weapp中./将前端dist代码上传到ngnix中.
5.修改Tomcat配置的端口号,及Nginx中配置端口号.
