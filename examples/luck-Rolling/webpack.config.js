const path = require('path');

module.exports = {
    mode: "production",
    entry: ['./src/scripts/script.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "scripts/app.[id].js"
    }
};