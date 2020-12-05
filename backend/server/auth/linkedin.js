const router = require('express').Router();
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

/*
 * Exit if environment variable is missing.
 */
const environment_variable = (env) => {
    if (!process.env[env]) {
        console.log(`'${env}' environment variable is missing!`);
        process.exit(1);
    }

    return process.env[env];
} 

passport.use(new LinkedInStrategy({
    clientID: environment_variable('CLIENT_ID'),
    clientSecret: environment_variable('CLIENT_SECRET'), 
    callbackURL: environment_variable('LINKEDIN_CALLBACK'),
    scope: ['r_emailaddress', 'r_liteprofile'],
    passReqToCallback: true,
}, ( req, access, refresh, profile, done) => {
    req.session.accessToken = access;
    return done(null, profile);
}));

// Redirects the user to the LinkedIn login portal so we can activate
// their session.
router.get('/login', passport.authenticate('linkedin'));

// LinkedIn will invoke this callback when it is done authenticating
// the user.
router.get('/callback',
    passport.authenticate('linkedin', {
        successRedirect: environment_variable('LINKEDIN_SUCCESS'),
        failureRedirect: environment_variable('LINKEDIN_FAILED'),
    })
);

module.exports = router;