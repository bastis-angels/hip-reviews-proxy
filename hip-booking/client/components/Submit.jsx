import React from 'react'

const Content = styled.div`
  border-top: 0;
  padding: 10px;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px #ebebeb;
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  font-weight: 400;
`
const Button = styled.button`
  &:hover {
    color: #40d9ac;
    background-color: #fff;
  }
  padding: 10px 15px;
  border: 3px solid #40d9ac;
  position: relative;
  font-size: 1.2em;
  font-weight: 700;
  transition: background-color 0.3s ease 0s, border-color 0.4s ease 0s, color 0.4s ease 0s;
  display: block;
  line-height: 1.3333333;
  border-radius: 0;
  color: #fff;
  background-color: #40d9ac;
  margin-bottom: 0;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
`

export default function Submit (props) {
  return (
    <Content>
      <Button> Book </Button>
    </Content>
  )
}