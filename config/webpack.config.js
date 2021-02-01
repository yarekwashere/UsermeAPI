'use strict';

const path = require('path');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function(config, env) {
  alias(configPaths())(config);

  config.module.rules.push(
    {
      test: /\.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, '../src/assets/styles/mixins/*'),
          path.resolve(__dirname, '../src/assets/styles/functions.scss'),
        ],
      },
    },
  );

  return config;
}
