import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInfo from './UserInfo.jsx';
import Body from './Body.jsx';
import Ratings from './Ratings.jsx';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='review-component'>
                <UserInfo reviewData={this.props.reviewData}/><Body /><Ratings />
            </div>
        );
    }
}

export default Review;
