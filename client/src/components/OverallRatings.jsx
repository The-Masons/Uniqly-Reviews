import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class OverallRatings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let starRating = 'https://i.imgur.com/8uXuBst.png';
        let fitRating = 'https://i.imgur.com/ddEqRD2.png';
        let lengthRating = 'https://i.imgur.com/ddEqRD2.png';
        let qualityRating = 'https://i.imgur.com/ddEqRD2.png';
        let productFitAvg = 0;
        let productLengthAvg = 0;
        let productQualityAvg = 0;
        let starRatingAvg = 0;


        for (var i = 0; i < this.props.reviewData.length; i++) {
            starRatingAvg += this.props.reviewData[i].rating;
            productFitAvg += this.props.reviewData[i].product_fit;
            productLengthAvg += this.props.reviewData[i].product_length;
            productQualityAvg += this.props.reviewData[i].product_quality;
        }

        starRatingAvg = OverallRatings.ratingUrls[Math.floor(starRatingAvg / this.props.reviewData.length)];
        productFitAvg = OverallRatings.sliderUrls[Math.floor(productFitAvg / this.props.reviewData.length)];
        productLengthAvg = OverallRatings.sliderUrls[Math.floor(productLengthAvg / this.props.reviewData.length)];
        productQualityAvg = OverallRatings.sliderUrls[Math.floor(productQualityAvg / this.props.reviewData.length)];

        return (
            <div className='review-ratings'>
                <div className='overall-rating-title'>OVERALL RATING</div>
                <div className='rating-meter'><img src={starRatingAvg}></img></div>
                <div><span>FIT </span><span className='fit-meter'><img src={productFitAvg}></img></span></div>
                <div className='slider-description'><span className='slider-description-left'>Very Small</span><span className='slider-description-right-length'>Very Large</span></div>
                <div><span>LENGTH </span>&nbsp;<span className='length-meter'><img src={productLengthAvg}></img></span></div>
                <div className='slider-description'><span className='slider-description-left'>Very Short</span><span className='slider-description-right-length'>Very Long</span></div>
                <div><span>QUALITY</span>&nbsp;<span className='quality-meter'><img src={productQualityAvg}></img></span></div>
                <div className='slider-description'><span className='slider-description-left'>Poor</span><span className='slider-description-right-quality'>Perfect</span></div>
            </div>
        );
    }
}

OverallRatings.ratingUrls = [
    'https://i.imgur.com/IaFTATj.png',
    'https://i.imgur.com/iZMWhUN.png',
    'https://i.imgur.com/lns6OZ4.png',
    'https://i.imgur.com/TOTBzNY.png',
    'https://i.imgur.com/8uXuBst.png',
];

OverallRatings.sliderUrls = [
    'https://i.imgur.com/HOnAtsW.png',
    'https://i.imgur.com/tySGtVQ.png',
    'https://i.imgur.com/P8ZeyGW.png',
    'https://i.imgur.com/0OjX4aO.png',
    'https://i.imgur.com/ddEqRD2.png',
];

export default OverallRatings;
