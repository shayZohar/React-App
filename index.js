const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //just so passport.js file execute

mongoose.connect(keys.mongoURI);

const app = express();

// enabaling cookies session library
app.use( cookieSession({
    maxAge: 30*24*60*60*1000, //30 days
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// calling the import of authRoutes function that was exported from authRoutes.js
// tricky javascript sintax similar to this:
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
