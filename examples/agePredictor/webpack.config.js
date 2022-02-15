const path = require('path');

module.exports = {
    mode: "production",
    entry: ['./src/scripts/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/app.[id].js"
    }

};