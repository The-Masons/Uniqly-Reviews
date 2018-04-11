const db = require('./index.js');
const Review = require('./Review.js');

const sampleReviews = [{
    product_id: 123,
    nickname: 'Louis',
    from: 'California',
    size_purchased: 'M',
    height: '5\'8',
    age: '26',
    gender: 'M',
    received_free_product: false,
    chest_size: 38,
    waist_size: 32,
    hips_size: 32,
    product_fit: 4,
    product_length: 3,
    product_quality: 5,
    date: 'April 11th, 2018',
    rating: 5,
    review_title: 'Pretty Good Product',
    review_body: 'I bought this product and it fit well. Very cool product',
    recommended: true,
    helpful: 0,
    from_uk: false,
    verified_purchaser: false,
    employee: false
}];

const seedData = function () {
    Review.create(sampleReviews)
        .then(() => db.disconnect());
};

seedData();