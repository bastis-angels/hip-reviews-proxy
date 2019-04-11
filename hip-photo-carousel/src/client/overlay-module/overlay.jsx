import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';


// Styles //

const OuterOverlay = styled.div `
  margin: 0;
  padding: 50px 50px 100px 50px;
  font-family: sans-serif;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Calibre", Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
`

const CardSlider = styled.div `
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
`

const CardSliderWrapper = styled.div `
  position: relative;
  height: 100%;
  width: 100%;
`

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <OuterOverlay>
        <div className="overlayContent">
          <CardSlider>
            <CardSliderWrapper>
                <Card 
                  key={this.props.key} 
                  index={this.props.index}
                  image={this.props.image} 
                  location={this.props.location} 
                  date={this.props.date}
                  upVotes={this.props.upVotes}
                  incrementUpVotes={this.props.incrementUpVotes}
                  decrementUpVotes={this.props.decrementUpVotes}
                  toggleOverlay={this.props.toggleOverlay}
                />
            
            </CardSliderWrapper>
          </CardSlider> 
        <div id='leftArrow'><LeftArrow prevImage={this.props.prevImage}/></div>    
        
        <div id='rightArrow'><RightArrow nextImage={this.props.nextImage}/></div>
      </div>
    </OuterOverlay>, this.container
    )};
}

export default Overlay;