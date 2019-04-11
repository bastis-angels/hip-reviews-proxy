import React from 'react';
import Header from './Header.jsx';
import ReviewList from './ReviewList.jsx';
import styled from 'styled-components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            seeAll: false,
        }
        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.seeAll = this.seeAll.bind(this);
    }
    
    componentDidMount() {
      const url = window.location.pathname
      this.getDataFromServer(url);
    }
        
    getDataFromServer(url) {
        fetch(`http://localhost:3001/reviews${url}`) 
        .then((response) => {
          return response.json();
        })
        .then((results) => {
           this.setState({data: results})
        });
    }
    // triggers the render method to call renderAll
    seeAll() {
      this.setState({seeAll: true});
    }
     // renders all the reviews on the page
    renderAll() {
      return (   
        <Reviews>
              <Header length = {this.state.data.length} />
              <ReviewList reviews = {{data: this.state.data, reload: this.getDataFromServer, seeAll: this.seeAll}}/>
        </Reviews>
      )
    }
    // renders only 10 reviews on the page
    renderSome() {
      return (   
        <Reviews>
              <Header length = {this.state.data.length}/>
              <ReviewList reviews = {{data: this.state.data.slice(0,10), reload: this.getDataFromServer, seeAll: this.seeAll}}/>
        </Reviews>
      )
    }

    render() {
       if(this.state.seeAll) {
         return this.renderAll();
       } else {
         return this.renderSome();
       }
    }
    
};

const Reviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default App;
