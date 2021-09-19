
import { Link } from 'react-router-dom'
import React from 'react';
import * as AppConstants from '../constants/AppConstants'
import * as Routs from '../constants/Routs'

 export class Header extends React.Component
 {
    constructor(props) {
        super(props);
    }
    staticMenu(){
        return (
            [<li><Link to={Routs.HOME.link}>{Routs.HOME.name}</Link></li>,
            <li><Link to={Routs.ABOUT.link}>{Routs.ABOUT.name}</Link></li>]
        )
    }
    notLoginMenu(){
        return (
            <li><Link to={Routs.LOGIN.link}>{Routs.LOGIN.name}</Link></li>
          )
    }
    logiedMenu(){
        return (
            <li><Link to={Routs.LOGOUT.link}>{Routs.LOGOUT.name}</Link></li>
          )
    }
    teacherMenu(){
        return (
            <li><Link to={Routs.TEACHER.link}>{Routs.TEACHER.name}</Link></li>
          )
    }

    pupilMenu(){
        return (
            <li><Link to={Routs.PUPIL.link}>{Routs.PUPIL.name}</Link></li>
          )
    }
        render() {
           return(
            <header>
                <nav>
                    <ul>
                    {this.props.logied && this.props.mode == AppConstants.ModeTeacher && this.teacherMenu() }
                    {this.props.logied && this.props.mode == AppConstants.ModePupil && this.pupilMenu() }
                    {this.staticMenu()}
                    {this.props.logied ? this.logiedMenu(): this.notLoginMenu() }
                    </ul>
                </nav>
                </header>
            )
        }
}