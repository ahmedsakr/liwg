const router = require('express').Router();
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
    clientID: '78c63g5t25dr9l',
    clientSecret: 'HEi8Tg1dxfJscn4d', 
    callbackURL: 'http://127.0.0.1:5000/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_liteprofile'],
}, ( access, refresh, profile, done) => done(null, profile)));

// Redirects the user to the LinkedIn login portal so we can activate
// their session.
router.get('/login', passport.authenticate('linkedin'));

// LinkedIn will invoke this callback when it is done authenticating
// the user.
router.get('/callback',
    passport.authenticate('linkedin', {
        successRedirect: 'http://127.0.0.1:3000',
        failureRedirect: 'http://127.0.0.1:3000/lmao',
    })
);

module.exports = router;