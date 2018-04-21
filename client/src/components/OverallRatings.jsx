import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class OverallRatings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let starRating = 'https://i.imgur.com/8uXuBst.png',
            fitRating = 'https://i.imgur.com/ddEqRD2.png',
            lengthRating = 'https://i.imgur.com/ddEqRD2.png',
            qualityRating = 'https://i.imgur.com/ddEqRD2.png',
            productFitAvg = 0,
            productLengthAvg = 0,
            productQualityAvg = 0, starRatingAvg = 0,
            starCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            bar5length = 0, bar4length = 0, bar3length = 0, bar2length = 0, bar1length = 0;

        for (let i = 0; i < this.props.reviewData.length; i++) {
            starRatingAvg += this.props.reviewData[i].rating;
            productFitAvg += this.props.reviewData[i].product_fit;
            productLengthAvg += this.props.reviewData[i].product_length;
            productQualityAvg += this.props.reviewData[i].product_quality;
            starCount[this.props.reviewData[i].rating] = 1 + (starCount[this.props.reviewData[i].rating] || 0);
        }
        console.log(starCount);
        bar5length = Math.floor((starCount[5] / this.props.reviewData.length) * 100) * 2;
        bar4length = Math.floor((starCount[4] / this.props.reviewData.length) * 100) * 2;
        bar3length = Math.floor((starCount[3] / this.props.reviewData.length) * 100) * 2;
        bar2length = Math.floor((starCount[2] / this.props.reviewData.length) * 100) * 2;
        bar1length = Math.floor((starCount[1] / this.props.reviewData.length) * 100) * 2;
        starRatingAvg = OverallRatings.ratingUrls[Math.floor(starRatingAvg / this.props.reviewData.length)];
        productFitAvg = OverallRatings.sliderUrls[Math.floor(productFitAvg / this.props.reviewData.length)];
        productLengthAvg = OverallRatings.sliderUrls[Math.floor(productLengthAvg / this.props.reviewData.length)];
        productQualityAvg = OverallRatings.sliderUrls[Math.floor(productQualityAvg / this.props.reviewData.length)];

        return (
            <div>
                <div className="row">
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

                    <div className='review-ratings'>
                        <div className='overall-rating-title'>RATING DISTRIBUTION</div>
                        <div className='overall-rating-mini'><div className='bar-title'>5 STAR</div> <div style={{ width: bar5length + 'px' }} className='bar-left'></div><div style={{ width: 200 - bar5length + 'px' }} className='bar-right'></div><div className='bar-count'>{starCount[5]}</div></div>
                        <div className='overall-rating-mini'><div className='bar-title'>4 STAR</div> <div style={{ width: bar4length + 'px' }} className='bar-left'></div><div style={{ width: 200 - bar4length + 'px' }} className='bar-right'></div><div className='bar-count'>{starCount[4]}</div></div>
                        <div className='overall-rating-mini'><div className='bar-title'>3 STAR</div> <div style={{ width: bar3length + 'px' }} className='bar-left'></div><div style={{ width: 200 - bar3length + 'px' }} className='bar-right'></div><div className='bar-count'>{starCount[3]}</div></div>
                        <div className='overall-rating-mini'><div className='bar-title'>2 STAR</div> <div style={{ width: bar2length + 'px' }} className='bar-left'></div><div style={{ width: 200 - bar2length + 'px' }} className='bar-right'></div><div className='bar-count'>{starCount[2]}</div></div>
                        <div className='overall-rating-mini'><div className='bar-title'>1 STAR</div> <div style={{ width: bar1length + 'px' }} className='bar-left'></div><div style={{ width: 200 - bar1length + 'px' }} className='bar-right'></div><div className='bar-count'>{starCount[1]}</div></div>
                    </div>

                    <div className='review-ratings'>
                        <div className='overall-rating-title'>
                            WRITE A REVIEW
                    </div>
                        <p className='review-feedback'> Tell us what you think about this product. We value your feedback.
                    <div className='padding'></div>
                            <button className='review-feedback-button'>WRITE A REVIEW</button></p>
                    </div>
                </div>
                <div className='padding' style={{ padding: '30px' }}></div>
                <hr></hr>
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
