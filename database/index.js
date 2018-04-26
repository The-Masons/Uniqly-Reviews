const mongoose = require('mongoose');
const mongoUri = 'mongodb://mongo/uniqly';

const db = mongoose.connect(mongoUri);

module.exports = db;