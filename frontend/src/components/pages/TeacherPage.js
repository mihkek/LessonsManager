import React from 'react';
import * as Constants from '../../constants/AppConstants'
import {Redirect} from "react-router-dom"

export default class TeacherPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        if(!this.props.logied)
            return (<div></div>)
        if(this.props.mode != Constants.ModeTeacher)
        return(
            <Redirect to='/'/>
        )
        return(
            <h1>TeacherPage</h1>
        )
    }
}