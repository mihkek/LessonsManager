import React from 'react';
import * as Constants from '../../constants/AppConstants'
import {Redirect} from "react-router-dom"
import { LessonList } from './elements/LessonList';
import axios from 'axios'

export default class TeacherPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                    // {name: 'test1',task:'task1',href:''},
                    // {name: 'test2',task:'task2',href:''},
                    // {name: 'test3',task:'task3',href:''},
                ]
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
        
        if(this.props.mode != Constants.ModeTeacher)
            return(<Redirect to='/'/>)
        return(
            <div>
                <h1>TeacherPage</h1>
                <LessonList data={this.state.data} pageRoute="/teacher" isReadOnly={false}/>
                
            </div>
        )
    }
}