import React from 'react';
import axios from 'axios';
import {
  Redirect,
} from "react-router-dom"

export class BaseForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.initState = this.initState.bind(this);
        this.initState(props.bindingParams)
      }
      initState(data){
        this.state = data
      }
      handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value  
          });
    }
}
