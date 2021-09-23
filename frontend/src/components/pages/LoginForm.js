import React from 'react';
import axios from 'axios';
import { SimpleForm } from '../library/additional/SimpleForm';
import { SelectFieldWithLabel } from '../library/additional/SelectFieldWithLabel';
import InputWithLabel from '../library/additional/InputWithLabel';

import {
  Redirect,
} from "react-router-dom"

export class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.initState = this.initState.bind(this);
      this.initState(this.getState())
    }
    getState(){
      return {
        login: '', 
        password: '',
        mode: '2', 
        logied: false,
        message: '',
        submit: false
      }
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
    handleSubmit(event) {
          this.setState({
            submit: true    
          });
            axios({
                method: 'post', // THERE GOES THE METHOD
                url: 'access-control/login', // THERE GOES THE URL
                secure: true,
                headers: {},
                data: {
                    "login" : this.state.login,
                    "password" : this.state.password,
                    "mode" : this.state.mode
                }
            })
              .then(response => {
                console.log("Taked -" + response.data.logied)
                this.setState({
                    logied: response.data.logied,
                    message: response.data.message
                  });
                  this.props.updateLogied(response.data.logied,response.data.mode, response.data.session_id)
              })
              // .catch(() => {
              //   const propName = "message"
              //   this.setState({
              //     logied: false,
              //     [propName]: "Server error"
              //   });
              // })
       event.preventDefault();
    }
  
    render() {
      const options = [
        {
          value: 1,
          text: "Pupil"
        },
        {
          value: 2,
          text: "Teacher"
        },
      ]
      const fields = [
        {
           data: <InputWithLabel label="Login" name="login" type="text" value={this.state.login} onChange={this.handleInputChange} />
        }, 
        {
          data: <InputWithLabel label="Password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
        },
        {
          data:  <SelectFieldWithLabel label="Mode" name="mode" value={this.state.mode} onChange={this.handleInputChange} options={options} />
        }
      ]
      return (
        <div>
            { this.state.submit && !this.state.logied && <h1>Error: {this.state.message}</h1>}
            { this.state.logied && <Redirect to='/'/>}
            <SimpleForm fields={fields} onSubmit={this.handleSubmit} buttonText="Sing in"/>
        </div>
        
      );
    }
  }

