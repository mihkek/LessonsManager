import React, {useState, useEffect} from 'react';

export class SimpleTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 1};
      this.props = props
    }
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
            this.setState((state, props) => ({
                value: state.value + props.increment
            })); 
    }
    render() {
      return (
        <div>
          <h2>You are here - {this.state.value}.</h2>
        </div>
      );
    }
}