const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/listings', { useNewUrlParser: true });

module.exports = mongoose.connection;