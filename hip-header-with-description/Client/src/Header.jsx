import React from 'react';
import CheckMark from '../assets/images/checked.png';
import Like from '../assets/images/like.png';

const Wrapper = styled.section`
width: 66.66666667%;
float: left;
position: relative;
min-height: 1px;
padding-left: 10px;
padding-right: 10px;
box-sizing: border-box;
display: block;
-webkit-font-smoothing: antialiased;
font-family: "Calibre", Helvetica, Arial, sans-serif;
font-size: 16px;
line-height: 1.42;
color: #333333;
background-color: white;
-webkit-tap-highlight-color: transparent;
`;

export const CampName = styled.h1`
margin-top: 0;
font-weight: 700;
font-size: 4.8rem;
margin-bottom: 11px;
font-family: inherit;
line-height: 1;
color: inherit;
margin: 0.67em 0;
    margin-right: 0px;
    margin-left: 0px;
box-sizing: border-box;
display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
-webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;
`;

const RecommendedListing = styled.div`
white-space: nowrap;
overflow: hidden;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: -20px;
`;
const Left = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
const PercentageDiv = styled.div`
margin-right: 10px;
border-bottom-right-radius: 2px;
border-top-right-radius: 2px;
vertical-align: middle;
height: 38px;
width: 65px;
padding: 11px;
padding-left: 7px;
text-align: center;
color: #fff;
background-color: #40d9ac;
border: 1px solid #3cc69e;
border-bottom-left-radius: 2px;
border-top-left-radius: 2px;
`;

const Span = styled.span`
font-size: 0.9em;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
text-align: center;
color: #fff;
content: " (" attr(src) ")";
`;
const BasedOn = styled.div`
vertical-align: middle;
height: 48px;
padding: 8px 0;
color: #757575;
line-height: 1.2;
font-size: 1.4rem;
margin-right: 10px;
`

const A = styled.a`
transition: all 0.25s ease 0s;
color: inherit;
text-decoration: none;
background-color: transparent;
`

const ProfileIcons = styled.div`
display: flex;
align-items: center;
`
const IconsWrapper = styled.div`
display: flex;
margin-right: -11px;
`

const CounterWrapper = styled.div`
z-index:1
`

const Counter = styled.span`
display: flex;
justify-content: center;
align-items: center;
border-radius: 500px;
box-shadow: 0 1px 2px rgba(0,0,0,0.08) !important;
font-size: .9rem;
font-weight: 500;
background-color: #fff;
border: 1px solid #ebebeb;
padding: 0 8px;
`

const VerificationMark = styled.img.attrs({
  src: CheckMark
})`
width: 3%;
vertical-align: top;
`;

const Icon = styled.div`
margin-right: -16px;
position: relative;
`;

const Avatars = styled.img`
border-radius: 50%;
box-shadow: 0 1px 2px rgba(0,0,0,0.08) !important;
border: 2px solid #fff;
height: 38px;
width: 38px;
vertical-align;
`;

const Header = (props) => {
  let camperRecommendations = 0;
  const camperAvatars = props.campers.slice(0, 4).map(element => (<Icon><Avatars src={element.image} /></Icon>));
  props.campers.forEach((element) => {
    if (element.votes) {
      camperRecommendations += 1;
    }
  });

  return (
    <Wrapper>
      <CampName>
          {props.campsite.name}
          <span>
          {props.campsite.verified ? <VerificationMark /> : null}
          </span>
      </CampName>

      <RecommendedListing>
        <Left>
          <PercentageDiv>
            <Span src={Like}>
              Likes 
            </Span>
            <strong>
            {Math.floor((camperRecommendations / props.campers.length) * 100)}%
            </strong>  
          </PercentageDiv>
          <BasedOn>
          Recommended
          <br/>
          by {props.campers.length} campers
          </BasedOn>
          <A>
              <ProfileIcons>
                <IconsWrapper>
                {camperAvatars}
                </IconsWrapper>
                <CounterWrapper>
                  <Counter>{props.campers.length - 4}+</Counter>
                </CounterWrapper>
              </ProfileIcons>
             
          </A> 
        </Left>
      </RecommendedListing>
    </Wrapper>
  );
};

export default Header;
