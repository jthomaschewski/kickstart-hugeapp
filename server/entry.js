import ReactRouterSSR from 'react-router-ssr';

require('./todo-methods');
require('./todo-subscriptions');

// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(JSON.parse(Assets.getText('webpack.stats.json')));

  require('../client/routes');
}
