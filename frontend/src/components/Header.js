
import { Link } from 'react-router-dom'
import React from 'react';
import * as AppConstants from '../constants/AppConstants'
import * as Routs from '../constants/Routs'
import {AppNavBar} from './library/additional/Nav-bar'
import * as MenuConst from '../constants/Menu'

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
    getMenu(){
        if(this.props.mode == AppConstants.ModeTeacher)
            return MenuConst.TeacherMenu
        if(this.props.mode == AppConstants.ModePupil)
            return MenuConst.PupilMenu
        return MenuConst.NotLoginMenu
    }
        render() {
           var currentMenu = this.getMenu()
           return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <AppNavBar BrandText="Happy english)" BrandLink="#" Menu={currentMenu} mode={this.props.mode} />
                </nav>
                </header>
            )
        }
}