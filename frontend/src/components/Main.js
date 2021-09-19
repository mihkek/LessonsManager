import { LoginForm } from './pages/LoginForm'
import {Header} from './Header'
import React from 'react';
import TeacherPage from './pages/TeacherPage';
import PupilPage from './pages/PupilPage';
import * as Links from '../constants/Routs'
import { AppNavBar } from './library/additional/Nav-bar'
import * as MenuConst from '../constants/Menu'

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
            <Redirect to={Links.HOME.link}/>
        )
    }
    logout = () => {
        this.setState({ 
            logied: false,
            mode: 0
         })
        localStorage.setItem('logied', false)
        return (
            <Redirect to={Links.HOME.link}/>
        )
    }
    render(){
        return(
            <main>
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
                <Route
                    path="/login"
                    render={props => <LoginForm updateLogied={this.updateLogied} logied={this.state.logied } mode={this.state.mode } {...props} />}
                />
            </Switch>
            <Header updateLogied = {this.updateLogied} logied={this.state.logied} mode={this.state.mode }/>
            <AppNavBar BrandText="Happy english)" BrandLink="/about" Menu={MenuConst.NotLoginMenu} />
        </main>
        )
    }
}


