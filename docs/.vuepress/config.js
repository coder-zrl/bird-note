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
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {text: 'BLOG', link: '/blog/'},
      {text: '关于', link: '/about/'},
    ],

    // 侧边栏
    sidebar: {
      '/guide/': 'auto',
      '/blog/': [
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
