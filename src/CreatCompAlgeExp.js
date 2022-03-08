import React from "react";
import "./style.css";

class CreatCompAlgeExp extends React.Component {
  render() {
    var x=25, y=30
    return (<div>                
                <h2> Evaluating expression </h2>
                <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h3>
            </div>)
  }
}
export default CreatCompAlgeExp;