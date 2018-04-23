import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../client/src/components/ReviewList.jsx';
import renderer from 'react-test-renderer';

const sample = {
  "product_id": 0,
  "nickname": "Lisa",
  "from": "East Gladysville, Hawaii",
  "size_purchased": "XS",
  "age": "18 to 24",
  "gender": "F",
  "received_free_product": false,
  "chest_size": 45,
  "waist_size": 35,
  "height": "5'8",
  "hips_size": 34,
  "product_fit": 5,
  "product_length": 1,
  "product_quality": 3,
  "date": "2017-05-09T22:03:51.414Z",
  "rating": 5,
  "review_title": "corporis iure molestiae",
  "review_body": "Non a inventore magnam corporis et voluptas doloribus reiciendis autem. Ut iusto ipsum explicabo sunt quod. Ab quis optio provident magnam similique eligendi quia unde sunt. Velit odit magnam. Tempore recusandae aliquid labore optio excepturi sed voluptas eveniet.",
  "recommended": false,
  "helpful": 13,
  "from_uk": true,
  "verified_purchaser": false,
  "employee": false
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewList reviewData={sample}/>, div);
});

describe('ReviewList', () => {
  test('should render with the correct items', () => {
    const itemPicker = mount(
      <ReviewList
        reviewData={sample}/>
      );
    expect(ReviewList).toMatchSnapshot();
  });
});