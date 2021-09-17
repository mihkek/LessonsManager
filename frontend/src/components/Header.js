
import { Link } from 'react-router-dom'
import React from 'react';
import * as Constants from '../constants/AppConstants'

 export class Header extends React.Component
 {
    constructor(props) {
        console.log(props.logied)
        super(props);
    }
    staticMenu(){
        return (
            [<li><Link to='/'>Home</Link></li>,
            <li><Link to='/About'>About</Link></li>]
        )
    }
    notLoginMenu(){
        return (
            <li><Link to='/Sing in'>Sing in</Link></li>
          )
    }
    logiedMenu(){
        return (
            <li><Link to='/Logout'>Logout</Link></li>
          )
    }
    teacherMenu(){
        return (
            <li><Link to='/Teacher'>Teacher</Link></li>
          )
    }

    pupilMenu(){
        return (
            <li><Link to='/Pupil'>Pupil</Link></li>
          )
    }
        render() {
           return(
            <header>
                <nav>
                    <ul>
                    {this.props.logied && this.props.mode == Constants.ModeTeacher && this.teacherMenu() }
                    {this.props.logied && this.props.mode == Constants.ModePupil && this.pupilMenu() }
                    {this.staticMenu()}
                    {this.props.logied ? this.logiedMenu(): this.notLoginMenu() }
                    </ul>
                </nav>
                </header>
            )
        }
}