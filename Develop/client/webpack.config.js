const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './script.js', // Specify the entry point (your main JavaScript file)
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output path (where bundled files will be generated)
    filename: 'bundle.js', // Specify the bundled JavaScript file name
  },
  module: {
    rules: [
      // Configure loaders for different file types
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for JavaScript files
          options: {
            presets: ['@babel/preset-env'], // Configure Babel presets if needed
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.html$/,
        use: ['html-loader'], // Use html-loader for HTML files
      },
    ],
  },
  plugins: [
    // Add any additional plugins for optimizations or other purposes
    // For example, you can use the following plugin for minification
    // new HtmlWebpackPlugin({
    //   template: './index.html', // Specify the HTML template file
    //   minify: {
    //     collapseWhitespace: true,
    //     removeComments: true,
    //     removeRedundantAttributes: true,
    //     removeScriptTypeAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     useShortDoctype: true,
    //   },
    // }),
  ],
};

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
