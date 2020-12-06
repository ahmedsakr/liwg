const router = require('express').Router();
const passport = require('passport');

// LinkedIn authentication routes
router.use('/linkedin', require('./linkedin'));

// We don't need a database for our trivial use case.
// Serializing/deserializing the whole object is sufficient
// for now.
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Authentication middleware that checks if the user has
// an active session.
module.exports.verifyLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    // User needs to login.
    res.redirect('/auth/linkedin/login');
};

module.exports.router = router;
