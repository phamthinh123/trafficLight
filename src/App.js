import React, { Component } from 'react';

import './App.css';
import TrafficLight from "./components/TrafficLight"

const RED = 0;
const GREEN = 1;
const YELLOW = 2;
class App extends Component {
  constructor(){
    super();
    this.state={
      currentColor : RED
    }
    setInterval(() => {
this.setState({
  currentColor:this.changeColor(this.state.currentColor)
})
},1000)
      
  }
    changeColor(color){
      switch(color){
        case RED:
        return GREEN;
        case GREEN:
        return YELLOW;
        default:
        return RED;
      }
    }
  

  render(){
    const { currentColor }=this.state;
  return (
    <div className="App">
      <TrafficLight currentColor={currentColor}/>
    </div>
  );
}
}

export default App;
