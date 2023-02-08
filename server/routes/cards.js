const express = require('express');
const router = express.Router();
const cards = require('../controllers/cards');
// const auth = require('./middleware/auth');

router.get('/', cards.list);
router.get('/:id', cards.details);
router.get('/user/:id', cards.userCards);

router.post('/', cards.addNew);
router.put('/:id', cards.updateDetails);
router.delete('/:id', cards.deleteCard);

module.exports = router;
