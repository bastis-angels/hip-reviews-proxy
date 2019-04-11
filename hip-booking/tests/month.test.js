import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Month from '../client/components/Month.jsx'
import moment from 'moment'

it('renders month based on state.moment', () => {
  const month = shallow(<Month 
    view={'collapsed'}
    moment={moment()}
    arrive={'Select date'}
    handleDayClick={() => null} 
    setPreviousMonth={() => null} 
    setNextMonth={() => null}
  />);
  month.setState({moment: moment('2019-05-12')})
  expect(toJson(month)).toMatchSnapshot();
});