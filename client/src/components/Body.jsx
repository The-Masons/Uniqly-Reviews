import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var date = this.props.reviewData.date;
        date = date.split('-');
        date = date[1]+' / '+date[2].slice(0,2)+' / '+date[0];
        return (
            <div className='review-body'>
                <div className='review-date'>{date}</div>
                <div className='review-title'><b>{this.props.reviewData.review_title}</b></div>
                <div>{this.props.reviewData.review_body}</div>
            </div>
        );
    }
}

export default Body;
