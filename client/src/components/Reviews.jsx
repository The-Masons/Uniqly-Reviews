import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
            product_id: '',
        }
    }

    componentDidMount() {
        const context = this;
        var url = window.location.href.split('/').pop();
        (url.length > 0) ? null : url = '0';
        axios.get('/reviews/' + url)
            .then(function (response) {
                console.log(response);
                context.setState({
                    productData: response.data,
                    product_id: url
                });
            }).catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <p>testing</p>
            </div>
        );
    }
}

export default Reviews;
