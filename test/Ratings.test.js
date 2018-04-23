import React from 'react';
import ReactDOM from 'react-dom';
import Ratings from '../client/src/components/Ratings.jsx';
import renderer from 'react-test-renderer';

const sample = {
  product_id: 3,
  nickname: 'Alivia',
  from: 'West Israel, Indiana',
  size_purchased: 'L',
  age: '35 to 44,',
  gender: 'M',
  received_free_product: true,
  chest_size: 45,
  waist_size: 31,
  height: 'Over 6\'2',
  hips_size: 28,
  product_fit: 4,
  product_length: 1,
  product_quality: 2,
  date: '2017-12-24T20:14:40.054Z',
  rating: 4,
  review_title: 'pariatur quod occaecati',
  review_body: 'Earum necessitatibus animi doloribus aperiam. Ut enim alias accusamus.',
  recommended: true,
  helpful: 4,
  from_uk: false,
  verified_purchaser: true,
  employee: false,
  __v: 0 };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ratings reviewData={sample}/>, div);
});

describe('Ratings', () => {
  test('should render with the correct items', () => {
    const itemPicker = mount(
      <Ratings
        reviewData={sample}/>
      );
    expect(Ratings).toMatchSnapshot();
  });
});