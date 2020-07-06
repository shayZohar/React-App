const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// fetching model from model of User
const User = mongoose.model('users');

// dealing with logged-in user with cookie, "user" is what came back from mongo in log-in
// making a user instance into an id to put in the cookie
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// making id into a user instance
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

// passport authentication uses new instanst of google strategy class
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		// CALLBACK FUNCTION - the code of info that comes back from google after log in and come back to callback route
		// the calls for mongo are all asynchronous, so it uses PROMISE
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//found user on mongo
				// in "done" func - first arg is error,this case no error, second arg is the record,this case existingUser
				done(null, existingUser);
			} else {
				//create new user and save it to the database, wait for it to be saved, then call "done" and pass the new user
				const user = await new User({ googleId: profile.id }).save()
				 done(null, user);
			}
		}
	)
);
