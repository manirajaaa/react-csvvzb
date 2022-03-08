import React from "react";
import "./style.css";

class AppAccessingAvariable extends React.Component {
  render() {
          let name = {
                  firstName: 'Mani',
                  lastName: 'Raja'
          }
          return(<React.Fragment>
                 <h1>{name.firstName} {name.lastName}</h1> 
          </React.Fragment>)
  }
}
export default AppAccessingAvariable;
