import React from 'react';
import * as Constants from '../../constants/AppConstants'
import {Redirect} from "react-router-dom"
import { LessonList } from './elements/LessonList';
import axios from 'axios';

export default class PupilPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
        axios({
            method: 'get', 
            url: 'teacher/lessons', 
            secure: true,
            headers: {},
            data: {
                
            }
        }) .then(response => {
            this.setState({
                data: response.data.data,
              });
          })

    }

    render(){
        if(!this.props.logied)
            return (<Redirect to='/'/>)
        
        if(this.props.mode != Constants.ModePupil)
            return(<Redirect to='/'/>)
        return(
            <div>
                <h1>Pupil page</h1>
                <LessonList data={this.state.data} pageRoute="/pupil" isReadOnly={true}/>
                
            </div>
        )
    }
}