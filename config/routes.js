const router = require('express').Router();
const friends = require('../controllers/friends');

router.get('/friends/:id', friends.find);

module.exports = router;
