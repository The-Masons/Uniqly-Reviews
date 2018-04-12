const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Reviews = require('../database/Review.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/reviews', (req, res) => {
    Reviews.find((err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }
    });
});

app.get('/reviews/:product_id', (req, res) => {
    Reviews.find({
        product_id: req.params.product_id
    }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }
    });
});

app.listen(3005, () => console.log('Server listening on port 3005!'))