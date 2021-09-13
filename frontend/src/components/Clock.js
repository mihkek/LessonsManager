import React, {useState, useEffect} from 'react';

export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    //Calling when the component loaded in DOM
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    //Calling after delete clock from DOM
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {  
        //Reload state of an object - it call the render method  
        this.setState
        ({      date: new Date()   
         });  
    }
    render() {
      return (
        <div>
          <h2>Time of day -  {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }