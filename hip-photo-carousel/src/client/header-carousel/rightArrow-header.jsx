import React from "react";

const OuterArrow = styled.div `
  position: absolute;
  top: 35%;
  right: 10px;

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

const RightArrowHeader = (props) => {
  return (
    <OuterArrow onClick={() => {props.toggleOverlay()}}>
      <i className="fas fa-chevron-right"></i>
    </OuterArrow>
  )
}

export default RightArrowHeader;