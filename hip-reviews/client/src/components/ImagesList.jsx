import React from 'react';
import ImagesListEntry from './ImagesListEntry.jsx';

class ImagesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
        this.review_id = props.props.review_id;
        this.loc_id = props.props.loc_id;
    }
    
    componentDidMount() {
      this.getDataFromServer();

    }  
        
    getDataFromServer() {
        fetch(`http://localhost:3001/reviews/location/${this.loc_id}/${this.review_id}/images/`) // get the reviews from the location with id of 6 as default first just for testing purposes
        .then((response) => {
          return response.json();
        })
        .then((results) => {
           this.setState({data: results})
        });
      }
    
   render() {
     return(
        <div>
          <ImagesListEntry ImageList = {this.state.data} /> 
        </div>)
   }
    
};

export default ImagesList;
