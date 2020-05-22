const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
const fromPairs = require('lodash/fromPairs');
const keys = require('lodash/keys');
const map = require('lodash/map');
const merge = require('lodash/merge');
const reduce = require('lodash/reduce');
const toPairs = require('lodash/toPairs');
const trimEnd = require('lodash/trimEnd');
const webpack = require('webpack');
const pkg = require('./package.json');

const tsConfig = JSON5.parse(fs.readFileSync('./tsconfig.json', 'utf-8'));
const aliasPairs = toPairs(tsConfig.compilerOptions.paths);
const mappedAliasPairs = map(aliasPairs, ([key, value]) => [trimEnd(key, '/*'), path.resolve(__dirname, trimEnd(value[0], '/*'))]);
const alias = fromPairs(mappedAliasPairs);

const extensions = ['.mjs', '.js', '.json', '.ts'];

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: { path: path.resolve(__dirname, 'lib'), filename: 'index.js' },
  module: { rules: [{ test: /\.ts(x?)$/, exclude: /node_modules/, use: [{ loader: 'ts-loader', options: { transpileOnly: true } }] }] },
  resolve: { alias, extensions },
  plugins: [new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })],
  target: 'node',
  node: { __dirname: false, __filename: false },
  externals: reduce(keys(pkg.externals), (externals, name) => merge({}, externals, { [name]: `commonjs ${name}` }), {}),
  stats: 'errors-only',
};
