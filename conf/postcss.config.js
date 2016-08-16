const path = require('path');

module.exports = {
    'use': [
        'postcss-import',
        'autoprefixer',
        'postcss-inline-svg',
        'postcss-custom-properties',
        'postcss-calc',
        'cssnano',
    ],
    'input': 'demo/assets/entry.css',
    'output': 'demo/dist/demo.css',
    'autoprefixer': {
        // Old browsers:
        //   ᕙ ᕗ
        // ¯\_(ツ)_/¯
        // ¯\_(  )_/¯
        // ¯\_(__)_/¯
        'browsers': 'last 1 versions',
    },
};
