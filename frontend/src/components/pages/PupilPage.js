import React from 'react';
import * as Constants from '../../constants/AppConstants'
import {Redirect} from "react-router-dom"
import { LessonList } from './elements/LessonList';
import axios from 'axios'
import LessonsPage from './base/LessonsPage';

export default class PupilPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <LessonsPage 
                    apiUrl="pupil" 
                    logied={this.props.logied}
                    targetMode={Constants.ModePupil} 
                    mode={this.props.mode} 
                    isReadOnly={true}
                    pageRoute="/pupil"/>
            </div>
        )
    }
}