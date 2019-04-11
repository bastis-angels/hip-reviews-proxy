import React from 'react'

const Container = styled.div`
  ${props => props.view !== 'collapsed' ? 'display: block;' : 'display: none;'}
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebebeb;
  border-top-width: 0;
  box-shadow: #ebebeb 0 1px 5px 0;
  color: #333333;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`
const List = styled.ul`
  list-style: none;
  padding: 10;
  margin: 0;
`
const ListElement = styled.li`
  margin-bottom: 0;
  color: #333333;
  line-height: 1.4;
  display: flex;
  justify-content: space-between;
`
const Label = styled.span`
  padding: 0;
`
const Value = styled.span`
`

export default function Pricing (props) {
  return (
    <Container view={props.view}>
      <List>
        <ListElement>
          <Label>
            Base price
          </Label>
          <Value> ${props.basePrice} x {props.nightCount} night </Value>
        </ListElement>
        <ListElement>
          <Label>
            Cleaning Fee
          </Label>
          <Value> ${props.cleaningFee} </Value>
        </ListElement>
        <ListElement>
          <Label>
            Weeknight Discount
          </Label>
          <Value> -${props.weeknightDiscount} </Value>
        </ListElement>
      </List>
    </Container>
  )
}