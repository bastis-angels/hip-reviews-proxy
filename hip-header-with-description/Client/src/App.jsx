import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header.jsx';
import Overview from './Overview.jsx';

const ListingHeader = styled.div`
white-space: nowrap;
overflow: hidden;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: -20px;
box-sizing: border-box;
font-weight: 400;
-webkit-font-smoothing: antialiased;
font-family: "Calibre", Helvetica, Arial, sans-serif;
font-size: 16px;
line-height: 1.42;
color: #333333;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campId: 0,
      campsite: {},
      host: {},
      body: '',
      campers: [],
    };
  }

  componentDidMount() {
    var pathname = window.location.pathname
    fetch(`http://localhost:3005/campsite/${pathname.slice(9)}`)
      .then(response => {
        return response.json()})
      .then((parsedJSON) => {
        this.setState({
          campId: parsedJSON[0].newId,
          campsite: parsedJSON[0].campsite,
          host: parsedJSON[0].host,
          body: parsedJSON[0].body,
          campers: parsedJSON[0].campers,
        });
      })
;
  }

  render() {
    return (
    <div>
        <ListingHeader>
            <Header campsite={this.state.campsite} campers={this.state.campers} />
        </ListingHeader>
        <Overview host={this.state.host} body={this.state.body} />
    </div>
   
    );
  }
}

// export const Routing = () =>{
//     return(
//         <div>
//             <Router>
//             <Route path="/listing/:id"  component={App} />
//             </Router>
//         </div>
//     )
// }

export default App;
