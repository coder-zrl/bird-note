import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 网站logo
    logo: '/img/logo.png',

    // 导航栏
    navbar: [
      {text: '编码', link: '/encode'},
      {text: '指南', link: '/guide'},
      {text: 'BLOG', link: '/blog'},
      {text: '关于', link: '/about'},
    ],

    // 侧边栏
    sidebar: {
      '/encode': [
        {
          text: 'Base64编码原理与应用',
          link: '/encode/Base64编码原理与应用'
        }
      ],
      '/guide': 'auto',
      '/blog': [
        {
          text: 'Blog',
          collapsible: true, // 分类是否可以折叠
          children: [
            {text: '这是一篇测试文章', link: '/blog/这是一篇测试文章'},
            {text: '这是第二篇测试文章', link: '/blog/这是第二篇测试文章'},
          ],
        }
      ]
    }
  }),

  lang: 'zh-CN',
  title: 'Bird的个人知识库',
  description: 'Just playing around',
})
