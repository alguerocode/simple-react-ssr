const path = require('path');


module.exports = {
    entry:'./index.js',

    ouput:{
        filename: '[name].js',
        path: path.resolve(__dirname,"index.js");
    }
}