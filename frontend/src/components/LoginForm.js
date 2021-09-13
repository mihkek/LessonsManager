import React, {useState, useEffect} from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: ''};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }


    handleSubmit(event) {
      
        const apiUrl = "singIn";
        fetch(apiUrl,{
            method: 'POST',
            FUCK: "dick",
            body:{
                FUCK: "dick"
            }, 
            params: {
                FUCK: "dick"
            }
            //body: "login="+this.state.login+"&password="+this.state.password+"&mode=1"
        })
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
        // useEffect(() => {
        //     fetch("singIn?login="+this.state.login+"&password="+this.state.password+"&mode=1", {
        //         method: 'POST',
        //     })
        //     .then(response => response.json())
        //     .then(response => setData(response.logied   ))
        // }, [])
        // if(!data)
        //     alert("Fuck(")
        // else
        //     alert('Result: ' + data );
       event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>       
         <div>
                     <div>
                         <label htmlFor='login'>Login</label>
                         <input type="text" name="login" value={this.state.login} onChange={this.handleInputChange} />   
                     </div>    
                     <div>
                         <label htmlFor='login'>Password</label>
                         <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                     </div>
                   <input type="submit" value="Sing in" /> 
        </div>
        </form>
      );
    }
  }

