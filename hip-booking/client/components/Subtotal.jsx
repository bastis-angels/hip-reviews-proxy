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
  font-size: 22px;
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
export default function Subtotal (props) {
  return (
    <Container view={props.view}>
      <List>
        <ListElement>
            <Label>
              Subtotal
            </Label>
            <Value> ${props.basePrice * props.nightCount + props.cleaningFee + props.occupancyFee - props.weeknightDiscount} </Value>
          </ListElement>
      </List>
    </Container>
  )
}