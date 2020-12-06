const router = require('express').Router();

// For now, we will just return the LinkedIn user information.
// This route will need to be developed later on.
router.get('/', (req, res, next) => {
    res.json(req.user);
});

module.exports = router;