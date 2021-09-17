import { LoginForm } from './LoginForm'
import {Header} from './Header'
import React from 'react';
import TeacherPage from './TeacherPage';
import PupilPage from './PupilPage';

import {
    Route,
    Switch,
    Router,
    BrowserRouter,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom"
      

const MyContext = React.createContext(undefined);
export class Main extends React.Component
{
    constructor(props) {
        super(props);
        const logg  = localStorage.getItem('logied') == "true" ? true : false
        const mod = parseInt(localStorage.getItem('mode'))
        this.state = {
          logied: logg,
          mode: mod,
        };
        
    }
    updateLogied = (isLog, mode) => { 
        if (!typeof isLog == 'boolean')
            isLog = false
        
        this.setState({ 
            logied: isLog,
            mode: mode 
        })
       
        localStorage.setItem('logied', this.state.logied)
        localStorage.setItem('mode', this.state.mode)
        console.log(" Storage logout - " + isLog)  
        return (
            <Redirect to='/'/>
        )
    }
    logout = () => {
        this.setState({ 
            logied: false,
            mode: 0
         })
        localStorage.setItem('logied', false)
        return (
            <Redirect to='/'/>
        )
    }
    render(){
        return(
            <main>
            <Switch>
                <Route
                    path="/Pupil"
                    render={props => <PupilPage  mode={this.state.mode } logied={this.state.logied } {...props} />}
                />
                 <Route
                    path="/Teacher"
                    render={props => <TeacherPage  mode={this.state.mode } logied={this.state.logied } {...props} />}
                />
                <Route path='/Logout' render={ this.logout} />
                <Route
                    path="/Sing in"
                    render={props => <LoginForm updateLogied={this.updateLogied} logied={this.state.logied } mode={this.state.mode } {...props} />}
                />
            </Switch>
            <Header updateLogied = {this.updateLogied} logied={this.state.logied} mode={this.state.mode }/>
        </main>
        )
    }
}
