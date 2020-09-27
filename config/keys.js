if (process.env.NODE_ENV === 'production') {
    // we are in prodection enviroment
    module.exports = require('./prod');
} else {
    // we are in development mode
    module.exports = require('./dev');
}
