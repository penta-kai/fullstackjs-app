const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
	.then(() => console.log('MongoDB connected.'))
	.catch(error => console.log(error));

const app = express();

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;