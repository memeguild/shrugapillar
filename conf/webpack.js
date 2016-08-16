const libConf = require('./webpack.lib.js');
const demoConf = require('./webpack.demo.js');

module.exports = [
    ...libConf,
    ...demoConf,
];
