import React from 'react';
import logo from './react.PNG';   
class PngApp extends React.Component {
      render(){
        return(<React.Fragment>
                  <h3>ReactJS:</h3>
                  <img src={"https://cdn.jsdelivr.net/gh/manirajaaa/react-csvvzb@master/react.PNG"} width="120" height="120" alt="React"/>
                  <p> React is a JavaScript library for creating User Interfaces, open sourced to the world  by Facebook and  Instagram team in 2013.<br/>
                  React’s main goal is to make development of UI components easy and modular.
                  It is intended to ease the process of building<br/> large applications using
                  data that changes over time.</p>
                </React.Fragment>);
   	       }
}
export default PngApp;
