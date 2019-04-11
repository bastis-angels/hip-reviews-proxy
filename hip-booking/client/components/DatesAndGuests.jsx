import React from 'react'


const Container = styled.div`
  font-size: 1.8rem;
  border-bottom: 0;
  border-top: 0;
  border: 1px solid #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
`
const Row = styled.div`
  margin-left: 0;
  margin-right: 0;
  display: flex;
  justify-content: space-around;
  flex: 1;
`
const Column = styled.span`
  ${props => props.dateSelect && `
    &:hover {
      background-color: #ebebeb;
      transition: background-color 0.3s ease 0s;
    }
    cursor: pointer;
    `
  }
  background-color: ${props => {
    if (props.checkInView === 'check-in') {
      return '#ebebeb';
    } else if (props.checkOutView === 'check-out') {
      return '#ebebeb'
    }
  }};
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  margin: 0;
  color: #333333;
`
const Label = styled.div`
  display: block;
  line-height: 1;
  font-size: 20px;
  color: #333333;
  font-weight: 500;
  text-align: left;
  border-radius: 0;
  padding: .2em .6em .3em 0;
`
const Value = styled.span`
  &:hover {
    cursor: pointer;
  }
  font-size: 18px;
  white-space: nowrap;
`

export default function DatesAndGuests (props) {
  return (
    <Container>
      <Row>
        <Column dateSelect={true} checkInView={props.view} onClick={props.handleCheckIn}>
          <Label>Check In</Label>
          <Value>{typeof props.arrive === 'string' ? props.arrive : props.arrive.format('ddd, MMM Do')}</Value>
        </Column>
        <Column dateSelect={true} checkOutView={props.view} onClick={props.handleCheckOut}>
          <Label>Check Out</Label>
          <Value>{typeof props.depart === 'string' ? props.depart : props.depart.format('ddd, MMM Do')}</Value>
        </Column>
        <Column>
          <Label>Guests</Label>
          <Value> <span onClick={props.handleGuestDecrease}> - </span> {props.groupSize} <span onClick={props.handleGuestIncrease}> + </span> </Value>
        </Column>
      </Row>
    </Container>
  )
}