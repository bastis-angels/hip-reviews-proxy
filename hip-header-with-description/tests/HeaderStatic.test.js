import React from 'react';
import { shallow } from 'enzyme';

// Components
import Header, {CampName} from '../Public/Client/src/Header.jsx';

describe('Header Test Suite', () => {
  test('Should have a CampName styled React Component', () => {
    const wrapp = shallow(
    <Header
      camp={'The Cowboy Room at FlipJack Ranch'}
      verified={true}
    />);
    expect(wrapp.find(CampName).text()).toBe('The Cowboy Room at FlipJack Ranch');
  });
});