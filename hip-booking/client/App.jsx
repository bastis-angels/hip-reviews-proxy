import React from 'react'
import moment from 'moment';

import Banner from './components/Banner.jsx'
import DatesAndGuests from './components/DatesAndGuests.jsx'
import Month from './components/Month.jsx'
import Pricing from './components/Pricing.jsx'
import Subtotal from './components/Subtotal.jsx'
import Submit from './components/Submit.jsx'

const BookingWidget = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #333;
  width: 400px;
  line-height: 1.42;
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-style: solid;
  border-color: #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
`
const Well = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 0;
  margin-bottom: 0;
  background-color: transparent;
  border-radius: 2px;
`

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moment: moment(),
      arrive: 'Select date',
      depart: 'Select date',
      view: 'collapsed',
      host: null,
      basePrice: null,
      occupancyFee: null,
      cleaningFee: null,
      nightCount: 1,
      weeknightDiscount: 10,
      maxGuests: null,
      groupSize: null,
    }

    this.setPreviousMonth.bind(this);
    this.setNextMonth.bind(this);
    this.handleDayClick.bind(this);
    this.handleGuestIncrease.bind(this);
    this.handleGuestDecrease.bind(this);
    this.handleCheckIn.bind(this);
    this.handleCheckOut.bind(this);
  }

  setPreviousMonth() {
    if (this.state.moment.month() !== moment().month()) {
      this.setState({moment: this.state.moment.clone().subtract(1, 'month')});
    }
  }

  setNextMonth() {
    this.setState({moment: this.state.moment.clone().add(1, 'month')});
  }

  handleDayClick(e) {
    if (this.state.view === 'check-in') {
      let now = moment().startOf('day');
      let arrive = moment(e.target.id).startOf('day');
      if (arrive.diff(now, 'day') > 1) {
        this.setState({
          arrive: arrive,
          view: 'check-out'
        })
      }
    } else if ((this.state.view === 'check-out')) {
      let depart = moment(e.target.id).startOf('day');
      let nightCount = depart.diff(this.state.arrive, 'day');
      if (nightCount > 0) {
        this.setState({
          depart: depart,
          nightCount: nightCount,
          view: 'book'
        })
      }
    }
  }

  handleGuestIncrease() {
    this.setState({
      groupSize: this.state.groupSize + 1
    })
  }

  handleGuestDecrease() {
    this.setState({
      groupSize: this.state.groupSize - 1
    })
  }

  handleCheckIn() {
    this.setState({
      view: 'check-in'
    });
  }

  handleCheckOut() {
    this.setState({
      view: 'check-out'
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:3003/list" + window.location.pathname)
    .then(res => res.json())
    .then(
      (listing) => {
        this.setState({
          host: listing.host,
          bookedDates: listing.bookedDates,
          basePrice: listing.basePrice,
          occupancyFee: listing.occupancyFee,
          cleaningFee: listing.cleaningFee,
          maxGuests: 6,
          groupSize: 6
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return (
      <BookingWidget>
        <Banner basePrice={this.state.basePrice}/>
        <Well>
          <DatesAndGuests 
            view={this.state.view}
            arrive={this.state.arrive}
            depart={this.state.depart}
            groupSize={this.state.groupSize}
            handleGuestIncrease={this.handleGuestIncrease.bind(this)}
            handleGuestDecrease={this.handleGuestDecrease.bind(this)}
            handleCheckIn={this.handleCheckIn.bind(this)}
            handleCheckOut={this.handleCheckOut.bind(this)}
          />
          <Month 
            view={this.state.view}
            moment={this.state.moment} key={this.state.moment.format()} 
            arrive={this.state.arrive}
            handleDayClick={this.handleDayClick.bind(this)} 
            setPreviousMonth={this.setPreviousMonth.bind(this)} 
            setNextMonth={this.setNextMonth.bind(this)}
          />
          <Pricing
            view={this.state.view}
            basePrice={this.state.basePrice} 
            nightCount={this.state.nightCount}
            cleaningFee={this.state.cleaningFee} 
            occupancyFee={this.state.occupancyFee}
            weeknightDiscount={this.state.weeknightDiscount}
          />
          <Subtotal 
            view={this.state.view}
            basePrice={this.state.basePrice} 
            nightCount={this.state.nightCount} 
            cleaningFee={this.state.cleaningFee} 
            occupancyFee={this.state.occupancyFee}
            weeknightDiscount={this.state.weeknightDiscount}
          />
          <Submit />
        </Well>
      </BookingWidget>
    )
  }
}