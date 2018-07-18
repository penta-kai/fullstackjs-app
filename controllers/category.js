const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
	try {
		const categories = await Category.find({user: req.user.id});
		res.status(200).json(categories);
	} catch (e) {
		errorHandler(res, e);
	}
};

module.exports.getById = async function(req, res) {
	try {
		const category = await Category.findById(req.params.id);
		res.status(200).json(category);
	} catch (e) {
		errorHandler(res, e);
	}
};

module.exports.remove = async function(req, res) {
	try {
		const idCategory = req.params.id;
		await Category.remove({_id: idCategory});
		await Position.remove({category: idCategory});
		res.status(200).json({
			message: 'Категория удалена'
		});
	} catch (e) {
		errorHandler(res, e);
	}
};

module.exports.create = async function(req, res) {
	try {
		const category = new Category({
			name: req.body.name,
			user: req.user.id,
			imageSrc: req.file ? req.file.path : ''
		});
		await category.save();
		res.status(201).json(category);
	} catch (e) {
		errorHandler(res, e);
	}
};

module.exports.update = async function(req, res) {
	const updated = {
		name: req.body.name
	};

	if (req.file) {
		updated.imageSrc = req.file.path;
	}

	try {
		const category = await Category.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		);
		await category.save();
		res.status(201).json(category);
	} catch (e) {
		errorHandler(res, e);
	}
};