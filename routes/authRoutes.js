const passport = require('passport');

//exporting the methods outside
module.exports = (app) => {
	//when user does login, we pass him to google for authentication
	// the second value is not an array function as we used to do, but a passport value to authenticate
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'], // we asking google for user's profile and email (user will be asked to grant this data)
		})
	);

	// callback from google with google code to use with googleStrategy
	app.get('/auth/google/callback', passport.authenticate('google'));

	// logging-out, 
	app.get('/api/logout',(req,res) =>{
		req.logout(); // taking the cookie with the user id and killing it
		res.send(req.user); // user is now undefined
	})


	app.get('/api/currentuser', (req,res) => {
		res.send(req.user);
	});
}; //end of export
