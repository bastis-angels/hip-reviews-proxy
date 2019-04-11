
import React from 'react';
import { shallow } from 'enzyme';

// Components
import Header from '../client/src/components/Header';



describe('Test Header Component', () => {
  it('should equal to the length of the props that is passed', () => {
    const wrapper = shallow(<Header length = {5} />);
    expect(wrapper.find('span .review-count')).to.equal('5');
  });
});


