import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Week from '../client/components/Week.jsx'
import moment from 'moment'


describe('Week', () => {
  it('renders 7 days/child components', () => {
    const week = shallow(
      <Week 
        weekOfDate={moment('2019-03-01').clone().day('Sunday')} 
        arrive={'Select date'} 
        handleDayClick={() => null} 
      />);
    expect(week.getElement().props.children).toHaveLength(7);
  });

  it('renders week based on state.weekOfDate', () => {
    const week = shallow(      
      <Week 
        weekOfDate={moment('2019-05-01').clone().day('Sunday')} 
        arrive={'Select date'} 
        handleDayClick={() => null} 
      />
    );
    expect(toJson(week)).toMatchSnapshot();
  });

});
