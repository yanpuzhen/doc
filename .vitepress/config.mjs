//shiki代码高亮配置
import { defineConfig } from 'vitepress'
import shiki from 'shiki';
import shikiTheme from './shiki/tokyo-night.json';
const t = shiki.toShikiTheme(shikiTheme);
//数学公式支持
import mathjax3 from 'markdown-it-mathjax3';
//数学公式特殊标签
const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "baize's know",
  description: "A VitePress Site",
  markdown: {
    lineNumbers: true,
    math:true,
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [ //上部导航栏
      { text: '返回主页', link: '/' },
      { text: '博客', link: 'https://blog.baize.host' },
      { text: '个人主页', link: 'https://bahome.baize.host' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [ //侧边栏
      {
        text: '软件推荐',
        items: [
          { text: 'Linux服务器软件推荐', link: '/blog/linux-server.md' },
          { text: 'Linux桌面端软件推荐', link: '/blog/linux-desktop.md' },
          { text: 'Windows软件推荐', link: '/blog/windows.md' },
          { text: '开源推荐', link: '/blog/open.md' },
        ]
      },
      {
        text: '白嫖攻略',
        items: [
          { text: '互联网白嫖指南', link: '/blog/internet.md' },
        ],
      },
      {
        text:'自建网站导航',
        items:[
          {text:'网站导航',link:'/blog/nav.md'},
        ]
      }
    ],
    socialLinks: [ //社交链接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                displayDetails: '显示详情',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  }
})
