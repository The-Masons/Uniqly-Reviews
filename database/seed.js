const db = require('./index.js');
const Review = require('./Review.js');

const sampleReviews = [{
        product_id: 0,
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
    },
    {
        product_id: 0,
        nickname: 'Lisa',
        from: 'Canada',
        size_purchased: 'S',
        height: '5\'4',
        age: '23',
        gender: 'F',
        received_free_product: false,
        chest_size: 42,
        waist_size: 28,
        hips_size: 28,
        product_fit: 4,
        product_length: 2,
        product_quality: 4,
        date: 'April 10th, 2018',
        rating: 5,
        review_title: 'Just okay',
        review_body: 'This product was just alright. Cannot recommend though.',
        recommended: false,
        helpful: 2,
        from_uk: false,
        verified_purchaser: false,
        employee: false
    },
    {
        product_id: 1,
        nickname: 'Bob',
        from: 'Texas',
        size_purchased: 'M',
        height: '5\'9',
        age: '35',
        gender: 'M',
        received_free_product: false,
        chest_size: 43,
        waist_size: 24,
        hips_size: 24,
        product_fit: 5,
        product_length: 5,
        product_quality: 5,
        date: 'April 10th, 2018',
        rating: 4,
        review_title: 'Pretty good clothes',
        review_body: 'The clothes fit and it looks great',
        recommended: true,
        helpful: 2,
        from_uk: false,
        verified_purchaser: false,
        employee: false
    },
];

const seedData = function () {
    Review.create(sampleReviews)
        .then(() => db.disconnect());
};

seedData();