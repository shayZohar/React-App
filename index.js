const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport'); //just so passport.js file execute

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
// enabaling cookies session library
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

// calling the import of authRoutes function that was exported from authRoutes.js
// tricky javascript sintax similar to this:
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// let express know in production mode that some routes that is not know, deal with them accordingly
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets like out main.js or main.css files stored in the 'build' directory
	app.use(express.static('client/build'));

	//just then:
	// Express will serve up the 'index.js' file if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
