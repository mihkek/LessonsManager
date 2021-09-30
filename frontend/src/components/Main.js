import { LoginForm } from './pages/LoginForm'
import {Header} from './Header'
import React from 'react';
import TeacherPage from './pages/TeacherPage';
import PupilPage from './pages/PupilPage';
import * as Links from '../constants/Routs'
import axios from 'axios'
import {LessonView} from './pages/elements/LessonView' 
import { NotFound } from './library/additional/NotFound404';


import {
    Route,
    Switch,
    Redirect,
  } from "react-router-dom"
      

const MyContext = React.createContext(undefined);
export class Main extends React.Component
{
    constructor(props) {
        super(props);
       // const logg  = localStorage.getItem('logied') == "true" ? true : false
        const mod = parseInt(localStorage.getItem('mode')) || 0
        const session_id = localStorage.getItem('session_id')
        this.state = {
          mode: mod,
          session_id:session_id
        };
        console.log(this.state)
    }
    updateLogied = (isLog, mode,session_id ) => { 
        // if (!typeof isLog == 'boolean')
        //     isLog = false
        
        this.setState({ 
           // logied: isLog,
            mode: mode,
            session_id:session_id
        })
       
        //localStorage.setItem('logied', this.state.logied)
        localStorage.setItem('mode', this.state.mode)
        localStorage.setItem('session_id', this.state.session_id)
        return (
            <Redirect to={Links.HOME.link}/>
        )
    }
    logout = () => {
         axios({
            method: 'post', 
            url: 'access-control/logout', 
            secure: true,
            headers: {},
            data: {
                "session_id" : localStorage.getItem('session_id'),
            }
        })
         this.setState({ 
            //logied: false,
            mode: 0,
            session_id:''
         })
         //localStorage.setItem('logied', false)
         localStorage.setItem('mode', 0)
         localStorage.setItem('session_id', '')
        return (
            <Redirect to={Links.HOME.link}/>
        )
    }
    someTest =() =>{
        axios({
            method: 'post', 
            url: 'access-control/register', 
            secure: true,
            headers: {},
            data: {
                "login" : "pupil",
                "password" : "12345",
                "mode" : 1
            }
        })

    }
    SearchPage = ({ match, location }) => {
        return (
        <p>
            <h1>Location Props: </h1>
             {JSON.stringify(location, null, 2)} 
             {JSON.stringify(match, null, 2)} 
          </p>
        );
      }
    render(){
        console.log("Session - "+this.state.session_id)
        console.log(this.state.mode)
        return(
            <main>
            <Header updateLogied = {this.updateLogied} mode={this.state.mode }/>
            <Switch>
                <Route
                    exact 
                    path="/pupil"
                    render={props => <PupilPage  mode={this.state.mode }  {...props} />}
                />
                 <Route
                    exact
                    path="/teacher"
                    render={props => <TeacherPage  mode={this.state.mode } {...props} />}
                />
                <Route path="not_found" component={NotFound}/>


                                <Route
                                    path="/teacher/lesson/:id"
                                    render={props => 
                                        <LessonView 
                                            pageForGoBack="/teacher" 
                                            apiUrl="/teacher"
                                            isReadOnly={false} 
                                            {...props} />}
                                />
                                <Route
                                    path="/pupil/lesson/:id"
                                    render={props => 
                                        <LessonView 
                                            pageForGoBack="/pupil" 
                                            apiUrl="/pupil"
                                            isReadOnly={true} 
                                            {...props} />}
                                />
                <Route path='/logout' render={ this.logout} />
                <Route path='/test' render={ this.someTest} />
                <Route
                    path="/login"
                    render={props => <LoginForm updateLogied={this.updateLogied} mode={this.state.mode } {...props} />}
                />
            </Switch>
        </main>
        )
    }
}


