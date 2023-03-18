module.exports = {
    base: '/',
    title: 'Quetab.com for Developers',
    description: 'Quetab.com API Documentation',
    themeConfig: {
      nav: [
        { text: 'Configuration', link: '/configuration/' }
      ],
      sidebar: [
        {
          title: 'Configuration',
          collapsable: false,
          children: [
            ['/configuration/start', 'Start'],
            ['/configuration/refresh', 'Refresh']
          ]
        }
      ]
    }
  };