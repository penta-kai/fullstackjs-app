const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function(req, res) {
	const candidate = await User.findOne({email: req.body.email});

	if (candidate) {
		const passwordResult = bcrypt.compareSync(
			req.body.password,
			candidate.password
		);

		if (passwordResult) {
			const token = jwt.sign(
				{
					email: candidate.email,
					userId: candidate._id
				},
				keys.jwt,
				{expiresIn: 60 * 60}
				);

			res.status(200).json({
				token: `Bearer ${token}`
			});
		} else {
			res.status(401).json({
				message: 'Пароли не совпадают. Попробуйте снова.'
			});
		}
	} else {
		// создаем пользователя
		res.status(404).json({
			message: 'Такого пользователя не существует.'
		});
	}
};

module.exports.register = async function(req, res) {
	const candidate = await User.findOne({email: req.body.email});

	if (candidate) {
		// ошибка если найден такой пользователь
		res.status(409).json({
			message: 'Такой email уже занят. Попробуйте другой'
		});
	} else {
		// создаем пользователя
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password
		const user = new User({
			email: req.body.email,
			password: bcrypt.hashSync(password, salt)
		});

		try {
			await user.save();
			res.status(201).json(user);
		} catch (e) {
			errorHandler(res, e);
		}

	}
};