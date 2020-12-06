const router = require('express').Router();

// All /data routes are privileged and require an active session.
// This verifyLogin middleware will redirect the user to LinkedIn
// if they are not authenticated.
router.use(require('../auth').verifyLogin);

// /data/linkedin routes
router.use('/linkedin', require('./linkedin/profile'));

module.exports = router;