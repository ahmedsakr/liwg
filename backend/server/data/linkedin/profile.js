const router = require('express').Router();
const fetch = require('node-fetch');

// For now, we will just return the LinkedIn user information.
// This route will need to be developed later on.
router.get('/', (req, res, next) => {
    var headers = new fetch.Headers();
    headers.append('Authorization', `Bearer ${req.session.accessToken}`);
    fetch('https://api.linkedin.com/v2/shares', {
        method: 'GET',
        headers: headers,
    }).then(ret => ret.json())
    .then(data => res.json(data));
});

module.exports = router;