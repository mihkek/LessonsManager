import React from 'react';
import * as CiteMode from '../../../constants/AppConstants'

export class ElemOfLessonList extends React.Component{
    /*
      Props:
      1.Mode - current work mode. At that moment there is two modes - teacher, pupil
    */
    constructor(props){
        super(props)
    }
    render(){
        var apiPath =""
        if(this.props.mode == CiteMode.ModePupil) apiPath="pupil"
        if(this.props.mode == CiteMode.ModeTeacher) apiPath="teacher"
        return(
             <div>
                 <h1>{this.props.name}</h1>
                 <h4>{this.props.task}</h4>
                 <a href={this.props.href}>View lesson</a>
             </div>
        )
    }
}