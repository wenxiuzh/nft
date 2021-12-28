
module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
  ],
  ga:'UA-122319353-1',
  docsDir: 'docs',
  host:'',
  port: 7070,
  title: '让热爱,看得见',
  description: '数字藏品创作, 发行, 变现一站全搞定',
  vueThemes:{
    linksHome:[],
    footer:[
      {
        title:'',
        items:[
          {
            text:'联系我们',
            link:''
          },
          {
            text:'商务合作',
            link:''
          },
          {
            text:'关于我们',
            link:''
          },
          {
            text:'用户协议',
            link:''
          },
          {
            text:'版权说明',
            link:''
          },
          {
            text:'使用帮助',
            link:''
          },
        ]
      },
    ]
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'lusaxweb/vuesax',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'lusaxweb/vuesax',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuesax-logo-vertical.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '售卖预展', link: '/preview/' },
      { text: '首发市场', link: '/market/' },
      { text: '盲盒', link: '/blindbox/' },
      { text: '铸造', link: '/uploadNFT/' },
      { text: '我的', link: '/my/info/' },
      { text: '公告', link: '/announcement/' },
      { text: '帮助', link: '/help/' },
    ],
    sidebar: [
      {
        title: '艺术',
        catlink: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '音乐',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '域名',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '虚拟世界',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '交易卡片',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '收藏品',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '体育运动',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '实用品',
        link: '/my/info/',
        collapsable: false,
        children: [
         ]
      },
    ],
    my: [
      {
        title: '',
        collapsable: false,
        children: [
         ]
      },
    ],
    // my: [
    //   { text: '个人中心', link: '/my/info/' },
    //   { text: '资产', link: '/my/asset/' },
    //   { text: '出售签发', link: '/my/info/' },
    //   { text: '已购作品', link: '/my/asset/' },
    //   { text: '已购提现作品', link: '/my/asset/' },
    //   { text: '提现', link: '/my/asset/' },
    //   { text: '交易', link: '/my/trade/' },
    //   { text: '设置', link: '/my/setting/' },
    // ],
    announcement: [
      {
        title: '平台公告',
        collapsable: false,
        children: [
         ]
      },
    ],
    help: [
      {
        title: '使用帮助',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '个人中心',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '平台介绍',
        collapsable: false,
        children: [
         ]
      },
      {
        title: '用户协议',
        collapsable: false,
        children: [
         ]
      },
    ],
  }
}
