import React from 'react';
import * as Constants from '../../constants/AppConstants'
import {Redirect} from "react-router-dom"
import { LessonList } from './elements/LessonList';

export default class PupilPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        if(!this.props.logied)
              return (<div></div>)
        if(this.props.mode != Constants.ModePupil)
            return(
                <Redirect to='/'/>
            )
        return(
            // <h1>PupilPage</h1>
            <div>
                <h1>TeacherPage</h1>
                <LessonList/>
            </div>
        )
    }
}