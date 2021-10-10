import { LoginForm } from './pages/LoginForm'
import {Header} from './Header'
import React from 'react';
import TeacherPage from './pages/TeacherPage';
import PupilPage from './pages/PupilPage';
import * as Links from '../constants/Routs'
import axios from 'axios'
import {LessonView} from './pages/elements/LessonView' 
import { NotFound } from './library/additional/NotFound404';
import { Footer } from './library/base/Footer';
import {
    Route,
    Switch,
    Redirect,
  } from "react-router-dom"
import { MyProfile } from './pages/MyProfile';
      

const MyContext = React.createContext(undefined);
export class Main extends React.Component
{
    constructor(props) {
        super(props);
        const mod = parseInt(localStorage.getItem('mode')) || 0
        const session_id = localStorage.getItem('session_id')
        this.state = {
          mode: mod,
          session_id:session_id,
          isLoad:false
        };
        this.setLoadingState = this.setLoadingState.bind(this)
    }
    updateLogied = (isLog, mode,session_id ) => { 
        
        this.setState({ 
            mode: mode,
            session_id:session_id
        })
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
            mode: 0,
            session_id:''
         })
         localStorage.setItem('mode', 0)
         localStorage.setItem('session_id', '')
         localStorage.setItem('currentUserName', '')
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
    getMainDivClass(){
        var base = "wrapper" ;
        if(this.state.isLoad) base += " wrapper-load" 
        return base
    }

    setLoadingState(isLoad=false){
        this.setState({
            isLoad : isLoad
        })
    }
    render(){
        console.log("Session - "+this.state.session_id)
        console.log(this.state.mode)
        return(
            <main >  
                <body>
            <Header updateLogied = {this.updateLogied} mode={this.state.mode }/>
            <div className={this.getMainDivClass()}>
            <Switch>
                <Route
                    exact 
                    path="/pupil"
                    render={props => <PupilPage  mode={this.state.mode} setLoadingState={this.setLoadingState}   {...props} />}
                />
                 <Route
                    exact
                    path="/teacher"
                    render={props => <TeacherPage  mode={this.state.mode } setLoadingState={this.setLoadingState} {...props} />}
                />
                <Route 
                    path="/profile"
                   render={props => <MyProfile />}
                />
                <Route path="/not_found" component={NotFound}/>


                                <Route
                                    path="/teacher/lesson/:id"
                                    render={props => 
                                        <LessonView 
                                            pageForGoBack="/teacher" 
                                            apiUrl="/teacher"
                                            isReadOnly={false} 
                                            apiAction="changeLesson"
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
                                <Route 
                                    path="/teacher/addLesson"
                                    render={props => 
                                        <LessonView 
                                        pageForGoBack="/teacher" 
                                        apiUrl="/teacher"
                                        apiAction="addLesson"
                                        isReadOnly={false} 
                                        {...props}
                                        />
                                    }
                                />
                <Route path='/logout' render={ this.logout} />
                <Route path='/test' render={ this.someTest} />
                <Route
                    path="/login"
                    render={props => <LoginForm updateLogied={this.updateLogied} mode={this.state.mode } {...props} />}
                />
            </Switch>
            </div>
          <Footer/>
     
            
           
      </body>
        </main>
        )
    }
}


