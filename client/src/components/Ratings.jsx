import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='review-ratings'>
                Review Ratings
            </div>
        );
    }
}

export default Ratings;
