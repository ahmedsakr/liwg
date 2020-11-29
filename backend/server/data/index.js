const passport = require('passport');
const router = require('express').Router();

router.get('/linkedin', passport.authenticate('linkedin', require('./linkedin/profile')));

module.exports = router;