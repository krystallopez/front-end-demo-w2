import React from "react";

class Photo extends React.Component {
    constructor(props) {
        super(props)
        
    }


  render() {
    return <img width="350" height="350" src={this.props.imgUrl} alt= "random-image"/>;
  }
}

export { Photo };
