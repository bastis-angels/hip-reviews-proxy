import React from 'react'
import Day from './Day.jsx'

const Row = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: 300;
  color: #333333;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 0;
  text-align: center;
  text-shadow: none;
`


export default class Week extends React.Component {
  constructor(props) {
    super(props);
    this.getDays.bind(this);
  }

  getDays() {
    let days = [];
    let day = this.props.weekOfDate;
    for (var i = 0; i < 7; i++) {
      days.push(<Day moment={day.clone()} key={i} handleDayClick={this.props.handleDayClick} arrive={this.props.arrive}/>);
      day.add(1, 'day');
    }
    return days;
  }
  render() {
    return (
      <Row>
        {this.getDays()}
      </Row>
    )
  }
}
