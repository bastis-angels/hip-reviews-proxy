import React from 'react'


const BannerContainer = styled.div`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px #ebebeb;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 10px;
`

const Price = styled.h5`
  margin: 2px 0 0;
  line-height: 0.9;
  font-size: 2.6rem;
  color: #333333;
  font-weight: 700;
`

export default function Banner(props) {
  return (
    <BannerContainer>
      <Wrapper>
        <Price>${props.basePrice}</Price>
        per night
      </Wrapper>
    </BannerContainer>
    )
}