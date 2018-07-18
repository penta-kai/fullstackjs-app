const express = require('express');

const controller = require('../controllers/order');

const router = express.Router();

router.get(
	'/',
	passpost.authenticate('jwt', {session: false}),
	controller.getAll
);
router.post(
	'/',
	passpost.authenticate('jwt', {session: false}),
	controller.create
);

module.exports = router;