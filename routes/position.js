const express = require('express');

const controller = require('../controllers/position');

const router = express.Router();

router.get(
	'/:categoryId',
	passpost.authenticate('jwt', {session: false}),
	controller.getByCategoryId
);
router.post(
	'/',
	passpost.authenticate('jwt', {session: false}),
	controller.create
);
router.patch(
	'/:id',
	passpost.authenticate('jwt', {session: false}),
	controller.update
);
router.delete(
	'/:id',
	passpost.authenticate('jwt', {session: false}),
	controller.remove
);

module.exports = router;