import React from 'react';
import ReviewBody from './ReviewBody.jsx';

it('renders', () => {
  const wrapper = shallow(<ReviewBody />);
  expect(wrapper.find('p').text()).toEqual('testing');
});