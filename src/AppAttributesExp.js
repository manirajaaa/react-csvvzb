import React from "react";
import "./style.css";

class AppAttributesExp extends React.Component {
  render() {
          let highlight = {
                  color: 'blue',backgroundColor:'grey'
           }
          return(<React.Fragment>
                 <h1 style={highlight}>Welcome to React</h1> 
          </React.Fragment>)
  }
}
export default AppAttributesExp;
