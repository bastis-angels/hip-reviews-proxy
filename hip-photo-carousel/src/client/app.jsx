import React from 'react';
import CarouselHeader from './header-carousel/header-carousel.jsx';
import Overlay from './overlay-module/overlay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      image: {},
      showOverlay: false,
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.incrementUpVotes = this.incrementUpVotes.bind(this);
    this.decrementUpVotes = this.decrementUpVotes.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  
  componentDidMount() {
    const url = window.location.pathname;
    window.addEventListener("keydown", this.handleKeyPress);
    this.getImages(url);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  //API calls 

  getImages(url) {
    fetch(`http://localhost:3002/photo${url}`, {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => {
      return response.json();
    })
    .then(parstedJSON => {
      this.setState({
        images: parstedJSON.images, 
        image: parstedJSON.images[0]
      });
    });
  }

  // updateUpVotes(num) {
  //   fetch(`/listing/1/${this.state.image.index}/${num}`, {
  //     method: 'PATCH',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => {
  //     return response.json();
  //   }).then(parsedJSON => {
  //     this.setState({
  //       image: parsedJSON,
  //     })
  //   });
  // }

  //Show Overlay

  toggleOverlay() {
    this.setState({
      showOverlay: !this.state.showOverlay,
    })
  }

  //Go to next or previous slide (using left and right arrow buttons)

  nextImage() {
    if(this.state.image.index === this.state.images.length - 1) {
      this.setState({
        image: this.state.images[0],
      });
      return;
    }

    let newIndex = this.state.image.index + 1;
    this.setState({
      image: this.state.images[newIndex],
    });
  }

  prevImage() {
    if (this.state.image.index === 0) {
      return;
    }
    let newIndex = this.state.image.index - 1;
    this.setState({
      image: this.state.images[newIndex],
    });
  }

  handleKeyPress(e) {
    if(e.keyCode === 39) {
      e.preventDefault();
      if(this.state.image.index === this.state.images.length - 1) {
        this.setState({
          image: this.state.images[0],
        });
        return;
      }
  
      var newIndex = this.state.image.index + 1;
      this.setState({
        image: this.state.images[newIndex],
      });
    }

    else if(e.keyCode === 37){
      e.preventDefault();
      if (this.state.image.index === 0) {
        return;
      }
      var newIndex = this.state.image.index - 1;
      this.setState({
        image: this.state.images[newIndex],
      });
    }
  }

//Increment and decrement Helpful Votes (using helpful button)
  incrementUpVotes() {
    const newVote = Object.assign(this.state.image);
    newVote.helpfulVotes += 1;
    this.setState({
      image: newVote,
    });
  }

  decrementUpVotes() {
    const newVote = Object.assign(this.state.image);
    newVote.helpfulVotes -= 1;
    this.setState({
      image: newVote,
    });
  }

  render() {

    return (
      <div>

        <div className="carouselHeader">
          {this.state.showOverlay && <Overlay 
            key={this.state.image.id} 
            index={this.state.image.index}
            image={this.state.image.imageURL} 
            location={this.state.image.location} 
            date={this.state.image.datePosted}
            upVotes={this.state.image.helpfulVotes}
            incrementUpVotes={this.incrementUpVotes}
            decrementUpVotes={this.decrementUpVotes}
            nextImage={this.nextImage}
            prevImage={this.prevImage}
            toggleOverlay={this.toggleOverlay}
          />}
          <CarouselHeader images={this.state.images} toggleOverlay={this.toggleOverlay}/>
        </div>

      </div>
    );
  }
}

export default App;
