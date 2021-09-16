import { LoginForm } from './LoginForm'
import {Header} from './Header'
import React from 'react';
import { connect } from 'react-redux';

import {
    Route,
    Switch,
    Router,
    BrowserRouter,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom"
      

  
export  class Main extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          logied: false, 
          mode: '',
        };
    }
    updateLogied = (isLog) => {   
        this.setState({ logied: isLog })
        return (
            <Redirect to='/'/>
        )
        console.log("Logied - " + this.state.logied)
    }
    Logout = () => {
        console.log("sdfsdfs")
        this.setState({ logied: false })
        return (
            <Redirect to='/'/>
        )
    }
    render(){
        return(
            <main>
            <Switch>
            {/* <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/> */}
            <Route path='/Logout' render={ this.Logout} />
            <Route
                path="/Sing in"
                render={props => <LoginForm updateLogied={this.updateLogied} logied={this.state.logied } {...props} />}
            />
            </Switch>
            <Header updateLogied = {this.updateLogied} logied={this.state.logied} />
        </main>
        )
    }
}