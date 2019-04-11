const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Listing';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;