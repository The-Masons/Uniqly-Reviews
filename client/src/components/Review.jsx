import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInfo from './UserInfo.jsx';
import Body from './Body.jsx';
import Ratings from './Ratings.jsx';

let Review = (props) => {
    return (
        <div className='review-component'>
            <UserInfo reviewData={props.reviewData} /><Body reviewData={props.reviewData} /><Ratings reviewData={props.reviewData} />
        </div>
    )
}

export default Review;