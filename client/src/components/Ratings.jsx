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
                <div className='rating-title'>Rating</div>
                <div className='rating-meter'>[X] [X] [X] [X] [X]</div>
                <div><span>LENGTH  </span><span className='length-meter'>  --------------O---------------</span></div>
                <div><span>QUALITY </span><span className='quality-meter'>--------------------O--------</span></div>

            </div>
        );
    }
}

export default Ratings;
