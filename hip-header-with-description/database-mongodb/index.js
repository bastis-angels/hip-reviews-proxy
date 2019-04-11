const mongoose = require('mongoose');

const database = mongoose.connect('mongodb://localhost/campsites');
const db = mongoose.connection;

module.exports = { database, db };
