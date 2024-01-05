# Linux桌面版必备软件

### 星火应用商店(debian系专用)

[https://spark-app.store/download](https://spark-app.store/download)

### neofetch(查看系统信息)

```bash
sudo apt install neofetch
sudo pacman -S neofetch
sudo dnf install neofetch
```

### paru或yay(archlinux的aur仓库)

```bash
# 首先编辑/etc/pacman.conf，在文件末尾添加两行
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
# 接着安装 archlinuxcn-keyring 包以导入 GPG key
sudo pacman -S archlinuxcn-keyring
# 接下来就可以安装paru了，yay同理
sudo pacman -S paru
```

### git(无法想象没有这个东西的Linux的系统该怎么使用)

```bash
sudo apt install git
sudo pacman -S git
sudo dnf install git
```

### egde浏览器(egde保存的有我的信息，非必要仍推荐chrome浏览器)

```bash
paru -S microsoft-edge-stable
```

### archlinuxwiki(无论你是否使用archlinux，你都可以在这里找到大部分错误的解决方案)

[https://wiki.archlinux.org/](https://wiki.archlinux.org/)

### ranger(一个终端版本的文件管理器)

```bash
sudo pacman -S ranger
sudo apt install ranger
```

### zsh+oh-my-zsh(终端美化必备)

```bash
# 首先需要安装zsh和curl
sudo apt install zsh curl
sudo pacman -S zsh curl 
# 接下来运行这个脚本，前提是能访问github，如果访问不了请自行想办法
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### v2ray(不解释)

```bash
sudo pacman -S v2ray qv2ray
```

### 小企鹅输入法(如果是gnome桌面推荐使用ibus,ubuntu自带的有就不赘述了)

```bash
sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-qt fcitx5-gtk
# 安装完以后记得vim /etc/environment,添加下列内容后重启
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=ibus
```

### lazyvim （一个开箱即用的neovim集成开发环境）

```bash
# 备份您当前的 Neovim 文件（如果你不需要备份可跳过这一步）
# 必填
mv ~/.config/nvim{,.bak}
# 可选项，但是推荐这样做
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
# clone项目
git clone https://github.com/LazyVim/starter ~/.config/nvim
# 删除.git 文件夹，以便稍后可以将其添加到自己的存储库中（用于备份自己的配置文件到git仓库，方便下次部署）
rm -rf ~/.config/nvim/.git
# 现在可以启动neovim了
nvim
```

### vscode (世界上之后两种程序员，前面忘了后面也忘了)

```bash
paru -S visual-studio-code-bin
# 其他系统推荐去官网下载后解压
```

### pycharm (python ide,python大部分发行版内置，不用额外安装)

```bash
paru -S pycharm-professional
# 其他系统依旧推荐去官网下载后解压
```

### JDK （JDK）

```bash
sudo pacman -S jdk-openjdk
sudo apt install openjdk-11-jdk
```

### node环境

```bash
sudo pacman -S nodejs npm
sudo npm install -g yarn pnpm
sudo apt update
sudo apt install nodejs npm
sudo npm install -g yarn pnpm
# 执行完成后按如下方法确认是否安装完成
node -v
npm -v
yarn -v
pnpm -v
```

### 办公(debian系可以去星火商店下wps，aur中也有wps的包，由于我不太喜欢就不推荐了)

```bash
sudo apt install libreoffice
sudo pacman -S libreoffice
```

### wofi(基于wayland的应用启动器)
```bash
sudo pacman -S wofi
```