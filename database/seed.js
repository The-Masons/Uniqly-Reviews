const mongoose = require('mongoose');
const db = require('./index.js');
const Review = require('./Review.js');
const sampleReviews = require('./data.js');

const seedData = function () {
    Review.create(sampleReviews.sampleReviews)
        .then(() => {
            mongoose.disconnect();
        });
};

seedData();