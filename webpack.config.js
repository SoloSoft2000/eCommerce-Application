const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.dev.js' : 'bundle.prod.js',
    },
    devtool: isDevelopment ? 'inline-source-map' : false,
    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
    },
    module: {
      rules: [
      ],
    },
    plugins: [
    ],
  }
};
