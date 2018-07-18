const express = require('express');
const passpost = require('passport');

const controller = require('../controllers/category');

const upload = require('../middleware/upload');

const router = express.Router();

router.get(
	'/',
	passpost.authenticate('jwt', {session: false}),
	controller.getAll
);
router.get(
	'/:id',
	passpost.authenticate('jwt', {session: false}),
	controller.getById
);
router.delete(
	'/:id',
	passpost.authenticate('jwt', {session: false}),
	controller.remove
);
router.post(
	'/',
	passpost.authenticate('jwt', {session: false}),
	upload.single('image'),
	controller.create
);
router.patch(
	'/:id',
	passpost.authenticate('jwt', {session: false}),
	upload.single('image'),
	controller.update
);

module.exports = router;