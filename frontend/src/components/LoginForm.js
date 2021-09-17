import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Redirect,
} from "react-router-dom"

export class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', 
        password: '',
        mode: 1, 
        logied: false,
        message: '',
        submit: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
                url: 'singIn', // THERE GOES THE URL
                headers: {},
                data: {
                    "login" : this.state.login,
                    "password" : this.state.password,
                    "mode" : this.state.mode
                }
            })
              .then(response => {
                this.setState({
                    logied: response.data.logied,
                    message: response.data.message
                  });
                  this.props.updateLogied(response.data.logied,response.data.mode)
              })
              .catch(() => {
                const propName = "message"
                this.setState({
                  logied: false,
                  [propName]: "Server error"
                });
              })
       event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>       
         <div>
           <div>
                 { this.state.submit && !this.state.logied && <h1>Error: {this.state.message}</h1>}
                 { this.state.logied && <Redirect to='/'/>}
             </div>
                     <div>
                         <label htmlFor='login'>Login</label>
                         <input type="text" name="login" value={this.state.login} onChange={this.handleInputChange} />   
                     </div>    
                     <div>
                         <label htmlFor='login'>Password</label>
                         <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                     </div>
                     <div>
                       <label >Mode</label>
                        <select name="mode" value={this.state.mode} onChange={this.handleInputChange}>            
                            <option value="1">Pupil</option>
                            <option value="2">Teacher</option>
                        </select>
                       </div>
                   <input type="submit" value="Sing in" /> 
        </div>
        </form>
      );
    }
  }

