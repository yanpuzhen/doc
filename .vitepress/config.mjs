//shiki代码高亮配置
import { defineConfig } from 'vitepress'

import shiki from 'shiki';
import shikiTheme from './shiki/tokyo-night.json';
const t = shiki.toShikiTheme(shikiTheme);
//数学公式支持
import mathjax3 from 'markdown-it-mathjax3';
//评论支持

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
      { text: '唠唠叨叨', link: '/blog/talk.md' },
    ],

    sidebar: [ //侧边栏
    {
      text:'技术文档',
      items:[
        {text:'报错及解决方案',link:'/blog/erro.md'},
      ]
    },
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
      { icon: 'github', link: 'https://github.com/yanpuzhen' },
      {
        icon: {
          svg: '<svg t="1704449142567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6246" width="200" height="200"><path d="M960 804.096c0 43.072-34.88 78.016-77.888 78.016L297.728 882.112c-43.008 0-77.952-34.944-77.952-78.016L219.776 414.592c0-13.184 3.584-25.344 9.344-36.224L224.128 373.312c5.056-12.48 14.336-22.656 25.984-29.12l5.184 5.184C267.52 341.44 282.048 336.704 297.728 336.704l584.384 0c15.616 0 30.272 4.736 42.368 12.736l5.248-5.184c11.648 6.464 20.928 16.64 25.92 29.12l-4.992 5.056C956.416 389.248 960 401.408 960 414.592L960 804.096zM882.112 375.68 297.728 375.68c-4.8 0-9.344 0.96-13.632 2.56l278.272 278.272c15.232 15.168 39.872 15.168 55.104 0l278.272-278.272C891.52 376.64 886.848 375.68 882.112 375.68zM921.024 414.592c0-2.048-0.256-4.032-0.576-5.952l-275.456 275.392c-30.4 30.528-79.744 30.528-110.208 0L259.392 408.576c-0.32 1.984-0.64 3.968-0.64 6.016l0 389.504c0 21.568 17.408 38.976 38.976 38.976l584.384 0c21.504 0 38.848-17.408 38.848-38.976L920.96 414.592zM765.248 219.84c0-2.048-0.384-4.032-0.64-6.016l-83.904 83.904L625.6 297.728l114.24-114.304c-4.224-1.6-8.768-2.56-13.632-2.56l-584.32 0c-4.8 0-9.344 0.96-13.632 2.56L242.56 297.728 187.456 297.728 103.552 213.824C103.232 215.808 102.976 217.728 102.976 219.84l0 389.568c0 21.504 17.408 38.976 38.912 38.976l38.976 0 0 38.912L141.888 687.296C98.88 687.296 64 652.352 64 609.344L64 219.84c0-13.184 3.584-25.344 9.344-36.224L68.288 178.56c5.056-12.48 14.272-22.656 25.984-29.12l5.184 5.184c12.224-8 26.752-12.736 42.432-12.736l584.32 0c15.744 0 30.272 4.736 42.496 12.736l5.12-5.184c11.712 6.464 20.992 16.64 25.984 29.12L794.88 183.616c5.76 10.88 9.344 23.04 9.344 36.224l0 77.888-38.912 0L765.312 219.84z" fill="#272636" p-id="6247"></path></svg>'
        },
        link: 'mailto:<admin@ipv6.email>'
      },
      {
        icon: {
          svg: '<svg t="1694499118462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1595" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1596"></path></svg>'
        },
        link: 'tencent://message/?uin=1304668140&Site=qq&Menu=yes'
      },
      {
        icon: {
          svg: '<svg t="1704449054271" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5220" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="5221"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="5222"></path></svg>'
        },
        link: 'https://space.bilibili.com/68016127?spm_id_from=333.999.0.0'
      },
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
