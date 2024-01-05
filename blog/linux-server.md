# Linux服务器端必备软件
## LNMP和LAMP（建站必备）
```bash
# 没有wegt的先安装wget
sudo yum inatall wget
sudo dnf install wget
sudo apt install wget
# LNMP
wget https://soft.lnmp.com/lnmp/lnmp2.0.tar.gz -O lnmp2.0.tar.gz && tar zxf lnmp2.0.tar.gz && cd lnmp2.0 && ./install.sh lnmp
# LAMP,需要安装git
git clone https://github.com/teddysun/lamp.git
cd lamp
chmod 755 *.sh
sudo sh lamp.sh
```

## docker
```bash
# debian系
# 安装docker
sudo apt-get install docker.io
# 启动服务
sudo systemctl start docker
# 开机自启
sudo systemctl enable docker
# rh系
# 安装依赖
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# 添加docker的yum源
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 安装docker
sudo yum install docker-ce
# 启动服务
sudo systemctl start docker
# 开机自启
sudo systemctl enable docker
```

## 1panel（开源国产面板）
```bash
# RedHat / CentOS
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
# Ubuntu
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
# Debian
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

## Fail2ban(防止暴力破解)
```bash
# RedHat / CentOS
# 安装 epel 源
yum install -y epel-release
# 安装 Fail2ban
yum install -y fail2ban
# 启动 Fail2ban 服务
systemctl start fail2ban
# 开机自启动
systemctl enable fail2ban
# 查看 Fail2ban 服务状态
systemctl status fail2ban
# Ubuntu / Debian
# 安装 Fail2ban
sudo apt-get install fail2ban
# Debian 12 及以上的版本需要手动安装 rsyslog
sudo apt-get install rsyslog
# 启动 Fail2ban 服务
sudo systemctl start fail2ban
# 开机自启动
sudo systemctl enable fail2ban
# 查看 Fail2ban 服务状态
sudo systemctl status fail2ban
```

##  supervisor(进程守护)
```bash
# RedHat / CentOS
# 安装 epel 源
yum install -y epel-release
# 安装 supervisor
yum install -y supervisor
# 启动 supervisord 服务
systemctl start supervisord
# 开机自启动
systemctl enable supervisord
# 查看 supervisord 服务状态
systemctl status supervisord
# Ubuntu / Debian
# 安装 supervisor
sudo apt-get install supervisor
# 安装成功后，supervisor 会默认启动。
```

## 以下内容基于1panel面板的应用程序，由于面板提供快速安装，在此就不再赘述安装方式,只做应用推荐
<font   size=4>wordpress（最著名的建站工具）</font>
<font   size=4>halo（类似于wordpress的国产开源建站工具，但是性能堪忧）</font><br/>
<font   size=4>Gitea (开源自建的gite服务)</font><br/>
<font   size=4>alist（支持多存储的文件列表程序）</font><br/>
<font   size=4>Typecho （一款基于 PHP 的博客软件）</font><br/>
<font   size=4>Lsky-pro （用于在线上传、管理图片的图床程序）</font><br/>
<font   size=4>Discuz!（开源社交建站系统）</font><br/>
<font   size=4>青龙（定时任务管理平台）</font><br/>
<font   size=4>ChatGPT Web（ChatGPT Web）</font><br/>
<font   size=4>Jenkins（开源的持续集成工具）</font><br/>
<font   size=4 >ddns-go（简单好用的 DDNS）</font><br/>
<font   size=4>watchtower（自动更新 Docker 容器基础镜像的工具）</font><br/>
<font   size=4>Coder（VS Code 远程开发环境）</font><br/>
<font   size=4>TwoNav（一款开源免费的书签（导航）管理程序）</font><br/>
<font   size=4>Obsidian（一个使用Markdown语法的闭源笔记软件）</font><br/>
<font   size=4>雷池 Web 应用防火墙（一款足够简单、足够好用、足够强的免费 WAF）</font><br/>
<font   size=4>YesPlayMusic（一款高颜值的第三方网易云播放器）</font><br/>
<font   size=4>MCSManager Web（支持大部分游戏服务端和控制台程序的管理面板）</font><br/>
<font   size=4>UnblockNeteaseMusic（解锁网易云音乐客户端变灰歌曲）</font><br/>
<font   size=4>Zabbix-Server（实时监控 IT 组件和服务）</font><br/>
<font   size=4>思源笔记 SiYuan（一款隐私优先的个人知识管理系统）</font><br/>
<font   size=4>Act runner（Gitea Actions 的 Runner）</font><br/>
<font   size=4>DeepLX（DeepL 免费 API）</font><br/>
<font   size=4>Grafana（用于监控和可观察的开源平台）</font><br/>
<font   size=4>Prometheus（Prometheus 一个监控系统和时间序列数据库）</font><br/>
<font   size=4>Uptime Kuma（自托管的监控工具）</font><br/>
