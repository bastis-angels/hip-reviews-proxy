import React from 'react'


const Square = styled.div`
  &:hover {
    color: #fff;
    background-color: #40d9ac;
  }
  ${props => props.selected && 'color: #fff; background-color: #40d9ac;'}
  font-size: 1.2em;
  font-weight: 300;
  position: relative;
  color: #333333;
  border: 1px solid #ebebeb;
  width: 36px;
  height: 36px;
  border-radius: 0;
  text-align: center;
  text-shadow: none;
  padding: 10px;
  /* ${ props => props.weekday && 'add ::after'} */
  /* ${ props => props.disabled && 'color: #757575; background-color: #ebebeb;' } */
`

export default function Day (props) {
  return (
    <Square 
      selected={typeof props.arrive !== 'string' && props.arrive.format() === props.moment.format()} 
      id={props.moment.format()} 
      onClick={props.handleDayClick}
    >
      {props.moment.date()}
    </Square>
  )
}