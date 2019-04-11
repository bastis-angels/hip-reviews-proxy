import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Day from '../client/components/Day.jsx'
import moment from 'moment'


describe('Day', () => {
  it('displays text based on props.day', () => {
    const day = shallow(
      <Day 
        moment={moment('2019-03-01')}
        handleDayClick={() => null}
        arrive = {'Select date'}
      />);
    
    expect(day.text()).toBe('1');
    day.setProps({moment: moment('2019-04-02')});
    expect(day.text()).toBe('2');
  });

  it('calls props.handleDayClick on click event', () => {
    const handleClickSpy = jest.fn();

    const day = shallow(
      <Day 
        moment={moment()}
        handleDayClick={handleClickSpy}
        arrive = {'Select date'}
      />
    )
    day.simulate('click');
    expect(handleClickSpy).toHaveBeenCalled();
  });

  it('renders day based on state.moment', () => {
    const day = shallow(      
      <Day 
        moment={moment('2019-05-12')}
        handleDayClick={() => null}
        arrive = {'Select date'}
      />
    );
    expect(toJson(day)).toMatchSnapshot();
  });

});
