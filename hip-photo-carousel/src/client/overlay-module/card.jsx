import React from 'react';
import HelpfulBtn from './helpfulBtn.jsx';

const OuterCard = styled.div `
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Counter = styled.div `
  color: #fff;
  font-size: .65em;
`

const Close = styled.div `
  font-size: 20px;
  color: #b4b4b4;

  &:hover {
    color: #fff;
    cursor: pointer;
  } 
`
const UserAvatar = styled.div `
  color: #fff;
  font-size: 50px;
`
const UserName = styled.div `
  color: #fff;
  font-size: 1.5em;
`

const DatePosted = styled.div `
  color: #918f8f;
  font-size: .75em;
`

const Location = styled.div `
  color: #fff;
  font-size: .85em;
`

const SocialMediaIcons = styled.div `
  color: #fff;
  font-size: 1em;
  align-content: right;
  display: flex; 
`

const Icon = styled.div `  
  margin: 5px;
  &:hover {
    font-size: 1.25em;
  }
`

const Report = styled.div `
  font-size: .75em;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #40d9ac;
  }
`

const Img = styled.img `
  height: 500px;
  width: auto;
  display: flex;
  margin: 0 auto;
`


const Card = (props) => {
  return (
    <OuterCard id={`card-${props.index}`}>

      <Counter>{props.index + 1} / 30</Counter>

      <Close onClick={() => {props.toggleOverlay()}}>
        <i class="fas fa-times" />
      </Close>

      <div className="userInfo">
        <UserAvatar>
          <i class="fas fa-campground"></i>
        </UserAvatar>
        <UserName> Eliana L. </UserName>
        <DatePosted>Posted on <span id="date">{props.date}</span></DatePosted>
      </div>

      <HelpfulBtn 
        votes={props.upVotes}
        incrementUpVotes={props.incrementUpVotes}
        decrementUpVotes={props.decrementUpVotes}
      />

      <Location>
          <span><i class="fas fa-map-marker-alt"></i></span> <span id="locale">{props.location}</span>
      </Location>

      <SocialMediaIcons>
        <Icon className="fab fa-pinterest icon"></Icon>
        <Icon className="fab fa-facebook icon"></Icon>
        <Icon className="fab fa-twitter icon"></Icon>
        <Icon className="fas fa-link icon"></Icon>
      </SocialMediaIcons>

      <Report>
        <span><i class="far fa-flag" /> </span> <span>Report</span>
      </Report>

      <Img src={props.image} alt={props.location} />
    </OuterCard>
  )
}

export default Card;