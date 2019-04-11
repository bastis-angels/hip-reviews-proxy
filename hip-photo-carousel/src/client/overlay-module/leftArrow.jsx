import React from "react";


const OuterArrow = styled.div `
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 999;

  /* props from arrow class */ 

  font-size: 30px;
  height: 100px;
  width: 100px;
  color: #b4b4b4;

  &:hover {
    color: #fff;
    font-size: 40px;
    cursor: pointer;
  }
`

const LeftArrow = (props) => {
  return (
    <OuterArrow onClick={() => {props.prevImage()}}>
      <i className="fas fa-chevron-left"></i>
    </OuterArrow>
  )
}

export default LeftArrow;