if (process.env.NODE_ENV === 'production') {
    // we are in prodection enviroment
    module.exports = require('./prod');
} else {
    // we are in development mode
    module.exports = require('./dev');
}

// mongodb+srv://ShayZoharProd:Simtatyona2020@cluster0.uu2jq.mongodb.net/emaily-prod?retryWrites=true&w=majority


//prod-clientId: 762225303819-mjtm9ti1hmlt8o7tk4hpv8srulbh55ne.apps.googleusercontent.com
// prod-secret: vJHL5bSiIGRPyzTvX5FUGH-3
