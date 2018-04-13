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
                Rating
                <div>[X] [X] [X] [X] [X]</div>
            </div>
        );
    }
}

export default Ratings;
