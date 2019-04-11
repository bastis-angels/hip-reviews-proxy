import React from 'react'
import Week from './Week.jsx'
import moment from 'moment'

const Calendar = styled.div`
  ${props => (props.view === 'collapsed' || props.view === 'book') ? 'display: none;' : 'display: flex;'}
  flex-direction: column;
`
const PrevMonth = styled.span`
  padding-top: 4px;
  padding-bottom: 4px;
  ${props =>  props.current && 'color: #757575;'}
  display: block;
`
const NextMonth = styled.span`
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
`
const CurrentMonth = styled.span`
  padding-top: 4px;
  padding-bottom: 4px;
`
const MonthSelector = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
`
const DayLabelRow = styled.div`
  display: flex;
  border: 1px solid #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
`
const DayLabel = styled.span`
  font-size: 1.2em;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  width: 400;
  height: 36px;
  border-radius: 0;
  text-align: center;
  padding: 5px;
`
const Dates = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  color: #333;
  background-color: #fff;
  border: 1px solid #ebebeb;
  width: 400;
  text-align: center;
`

export default class Month extends React.Component {
  constructor(props) {
    super(props);
    this.renderWeeks.bind(this);
  }

  renderWeeks() {
    let monthIndex = this.props.moment.month();
    let weekOfDate = this.props.moment.clone().startOf('month').day('Sunday');
    let weeks = [];
    let inProgress = true;

    while (inProgress) {
      weeks.push(<Week weekOfDate={weekOfDate.clone()} arrive={this.props.arrive} key={weekOfDate.format()} handleDayClick={this.props.handleDayClick} />);
      weekOfDate = weekOfDate.add(1, 'week');
      inProgress = monthIndex >= weekOfDate.month();
    }
    return weeks;
  }

  render() {
    return (
      <Calendar view={this.props.view}>
        <MonthSelector>
          <PrevMonth current={this.props.moment.month() === moment().month()} onClick={this.props.setPreviousMonth}> « </PrevMonth>
          <CurrentMonth> {this.props.moment.format('MMMM YYYY')} </CurrentMonth>
          <NextMonth onClick={this.props.setNextMonth}> » </NextMonth>
        </MonthSelector>
        <DayLabelRow>
          <DayLabel> S </DayLabel><DayLabel> M </DayLabel><DayLabel> T </DayLabel><DayLabel> W </DayLabel><DayLabel> T </DayLabel><DayLabel> F </DayLabel><DayLabel> S </DayLabel>
        </DayLabelRow>
        <Dates>
          {this.renderWeeks()}
        </Dates>
      </Calendar>
    )
  }
}  
