import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from '../client/src/components/UserInfo.jsx';
import renderer from 'react-test-renderer';

const sample = {
  "product_id": 7,
  "nickname": "Vickie",
  "from": "South Jacinthe, Illinois",
  "size_purchased": "XXL",
  "age": "45 to 54",
  "gender": "F",
  "received_free_product": false,
  "chest_size": 50,
  "waist_size": 32,
  "height": "5'6",
  "hips_size": 31,
  "product_fit": 3,
  "product_length": 2,
  "product_quality": 5,
  "date": "2017-06-17T11:27:51.445Z",
  "rating": 2,
  "review_title": "molestias sit est",
  "review_body": "Cumque id repellendus sed eum eaque illum vitae consequatur. Voluptatem et perspiciatis porro omnis iure quos ea. Incidunt blanditiis ut qui vero odio soluta. Suscipit consequatur nesciunt.",
  "recommended": true,
  "helpful": 11,
  "from_uk": true,
  "verified_purchaser": false,
  "employee": true
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo reviewData={sample}/>, div);
});

describe('UserInfo', () => {
  test('should render with the correct items', () => {
    const itemPicker = mount(
      <UserInfo
        reviewData={sample}/>
      );
    expect(UserInfo).toMatchSnapshot();
  });
});