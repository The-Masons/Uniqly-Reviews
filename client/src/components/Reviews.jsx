import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        axios.get('/reviews')
            .then((results)=>{
                this.setState({
                    data: results.data
                })
                console.log(results.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <p>hello</p>
            </div>
        );
    }
}

export default Reviews;
