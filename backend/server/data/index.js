const router = require('express').Router();
const passport = require('passport');

// All /data routes are privileged and require an active session
router.use(require('../auth').verifyLogin);

router.use('/linkedin', require('./linkedin/profile'));

module.exports = router;