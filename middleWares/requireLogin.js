module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must be logged-in' });
    }
    // if user is logged in- go to next middleware
    next();
};
