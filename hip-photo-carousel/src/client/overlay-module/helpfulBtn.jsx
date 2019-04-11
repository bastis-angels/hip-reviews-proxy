import React from "react";


const Helpful = styled.button `
  display: inline-block;
  margin-bottom: 0;
  height: 45px;
  width: 105px;
  color: #fff;
  background-color: #40d9ac;
  font-size: .75rem;
  font-weight: 700;
  text-align: center;
  border-color: transparent;
  vertical-align: middle;
  transition: background-color 0.3s ease 0s, border-color 0.4s ease 0s, color 0.4s ease 0s;
  touch-action: manipulation;
  cursor: pointer;
`

class HelpfulBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.clicked) {
      this.props.decrementUpVotes();
    } else {
      this.props.incrementUpVotes();
    }

    const newState = !this.state.clicked;

    this.setState({
      clicked: newState,
    });
  }

  render() {
    return(
      <Helpful onClick={this.handleClick}>
        <span className="thumb"><i class="far fa-thumbs-up" ></i> &nbsp; </span> 
        Helpful 
        <span> &nbsp; {this.props.votes} </span>
      </Helpful>
    )
  }
}

export default HelpfulBtn;