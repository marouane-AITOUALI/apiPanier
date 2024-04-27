const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST ||'localhost',
    DB_NAME: process.env.DB_NAME || 'cart-db-estiam',
};