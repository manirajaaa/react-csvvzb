import React from "react";
import "./style.css";

class AppBasicsV1 extends React.Component{
  render(){
    let count = 5
    return (<React.Fragment>
      <h1>{count}</h1>
      <h2>{count*count}</h2>
      </React.Fragment>)
  }
}
export default AppBasicsV1;