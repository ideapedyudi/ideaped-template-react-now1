const { DBName, DBHost, DBUser, DBPass } = require('./constant');

module.exports = {
    development: {
        username: DBUser,
        password: DBPass,
        database: DBName,
        host: DBHost,
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: DBUser,
        password: DBPass,
        database: DBName,
        host: DBHost,
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: DBUser,
        password: DBPass,
        database: DBName,
        host: DBHost,
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    }
};