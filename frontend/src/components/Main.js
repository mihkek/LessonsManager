import { LoginForm } from './pages/LoginForm'
import {Header} from './Header'
import React from 'react';
import TeacherPage from './pages/TeacherPage';
import PupilPage from './pages/PupilPage';
import * as Links from '../constants/Routs'
import axios from 'axios'

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
       // const session_id = localStorage.getItem('session_id')
        this.state = {
          logied: logg,
          mode: mod,
         // session_id:session_id
        };
        console.log(this.state)
    }
    updateLogied = (isLog, mode) => { 
        console.log("Change - "+isLog)
        if (!typeof isLog == 'boolean')
            isLog = false
        
        this.setState({ 
            logied: isLog,
            mode: mode,
            //session_id:session_id
        })
       
        localStorage.setItem('logied', this.state.logied)
        localStorage.setItem('mode', this.state.mode)
      //  localStorage.setItem('session_id', this.state.session_id)

        //console.log(" Storage logout - " + isLog)  
        return (
            <Redirect to={Links.HOME.link}/>
        )
    }
    logout = () => {
        this.setState({ 
            logied: false,
            mode: 0,
           // session_id:''
         })
         localStorage.setItem('logied', false)
         localStorage.setItem('mode', 0)
        // localStorage.setItem('session_id', this.state.session_id)
        return (
            <Redirect to={Links.HOME.link}/>
        )
    }
    someTest =() =>{
        axios({
            method: 'post', // THERE GOES THE METHOD
            url: 'access-control/register', // THERE GOES THE URL
            secure: true,
            headers: {},
            data: {
                "login" : "pupil",
                "password" : "12345",
                "mode" : 2
            }
        })

    }
    render(){
        console.log("Session - "+this.state.session_id)
        return(
            <main>
            <Header updateLogied = {this.updateLogied} logied={this.state.logied} mode={this.state.mode }/>
            <Switch>
                <Route
                    path="/pupil"
                    render={props => <PupilPage  mode={this.state.mode } logied={this.state.logied } {...props} />}
                />
                 <Route
                    path="/leacher"
                    render={props => <TeacherPage  mode={this.state.mode } logied={this.state.logied } {...props} />}
                />
                <Route path='/logout' render={ this.logout} />
                <Route path='/test' render={ this.someTest} />
                <Route
                    path="/login"
                    render={props => <LoginForm updateLogied={this.updateLogied} logied={this.state.logied } mode={this.state.mode } {...props} />}
                />
            </Switch>
            {/* <AppNavBar BrandText="Happy english)" BrandLink="/about" Menu={MenuConst.TeacherMenu} /> */}
        </main>
        )
    }
}


