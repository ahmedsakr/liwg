const router = require('express').Router();
const passport = require('passport');

router.use('/linkedin', require('./linkedin'));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

module.exports.verifyLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/auth/linkedin/login');
}
module.exports.router = router;