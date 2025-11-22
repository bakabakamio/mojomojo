import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'mojo mojo',
    subtitle: '不純喫茶',
    author: 'bakamio',
    description: 'bakamio的个人博客',
    website: 'https://mojomojo-blog.vercel.app/',
    pageSize: 10,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/bakabakamio/mojomojo',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a> ♥︎',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#515251',
      background: '#f7e2df',
    },
    colorsDark: {
      primary: '#f7e2df',
      background: '#515251',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
