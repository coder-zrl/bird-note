import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
// import { path } from '@vuepress/utils'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 网站logo
    logo: '/img/logo.png',
    // 不展示Git信息
    contributors: false,
    // 不展示 "Last Updated"
    // lastUpdated: false,

    // 导航栏
    navbar: [
      {text: '编码', link: '/encode/'},
      {text: 'BLOG', link: '/blog/'},
      {text: '数据结构与算法', link: '/algorithm/'},
      {
        text: '关于',
        children: [
          {text: 'GitHub', link: 'https://github.com/coder-zrl' },
          {
            text: '考研笔记',
            children: [
              {text: '计算机组成原理', link: 'https://aye10032.gitbook.io/computerorganizationnote'},
              {text: '操作系统', link: 'https://aye10032.gitbook.io/os' }
            ]
          },
          {
            text: '绘图工具',
            children: [
              {text: 'PUML入门指南', link: 'https://pdf.plantuml.net/'},
              {text: '在线绘制PUML', link: 'https://www.plantuml.com/plantuml/uml'},
              {text: '像素风流程图白板', link: 'https://handraw.top/'},
            ]
          },
        ]
      },
    ],

    // 侧边栏
    sidebar: {
      '/encode': [
        {
          text: 'Base64编码原理与应用',
          link: '/encode/Base64编码原理与应用'
        }
      ],
      '/blog': [
        {
          text: 'Java基础',
          collapsible: false, // 分类是否可以折叠
          children: [
            {text: 'Java异步编程', link: '/blog/Java异步编程'},
            {text: 'Stream流式处理', link: '/blog/Stream流式处理'},
          ],
        }
      ],
      '/algorithm': [
        {
          text: '排序',
          collapsible: false,
          children: [
            {text: '内部排序', link: '/algorithm/内部排序'},
            {text: '外部排序', link: '/algorithm/外部排序'},
          ],
        }
      ]
    }
  }),

  lang: 'zh-CN',
  title: 'Bird的个人知识库',
  description: 'Just playing around',
  // 设置主页为vue文件时使用，暂时禁用
  // clientConfigFile: path.resolve(__dirname, './client.js')
})
