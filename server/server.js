const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Reviews = require('../database/Review.js');
const path = require('path');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/:id', function (req, res) {
    res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/reviews', (req, res) => {
    console.log('finding');
    Reviews.find((err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }
    });
});

app.get('/reviews/:product_id', (req, res) => {
    console.log('aaaaaa', typeof req.params.product_id);
    Reviews.find({
         product_id: parseInt(req.params.product_id)
    }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }
    });
});

app.listen(3005, () => console.log('Server listening on port 3005!'))