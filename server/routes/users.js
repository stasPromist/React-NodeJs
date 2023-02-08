var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const users = require('../controllers/users');

router.get('/:id', auth, users.details);

/* authentication */
router.post('/signin', users.signin);
router.post('/signup', users.signup);
router.put('/favCards/:id', users.updateDetails);
router.get('/:id/favCards', users.getFavCards);
router.delete('/:id/favCards/:id', users.delFavCard);
module.exports = router;
