const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#1DA57A',
                '@border-radius-base': '5px',
                '@heading-color':'#262626',
                '@text-color': '#262626',
                '@text-color-secondary': '#94a0b1'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};