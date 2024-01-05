# 平常遇到的问题以及解决方案

## mkdocs的代码高亮无法正确识别全部shell脚本，例如sudo apt,npm run dev

解决方法：跟作者沟通后发现大伙都没办法高亮，遂选择放弃使用mkdocs

## vitepress-theme-website插件会导致vitepress构建时报错build error:

```yaml
build error:
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".css" for F:\vitedocs\node_modules\.pnpm\@waline+client@2.15.8\node_modules\@waline\client\dist\waline.css
```

解决方法：卸载`pnpm uninstall vitepress-theme-website`
