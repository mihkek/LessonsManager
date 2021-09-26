import React from 'react';
import * as Constants from '../../constants/AppConstants'
import LessonsPage from './base/LessonsPage';

export default class TeacherPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LessonsPage 
                    apiUrl="teacher" 
                    logied={this.props.logied}
                    targetMode={Constants.ModeTeacher} 
                    mode={this.props.mode} 
                    isReadOnly={false}
                    pageRoute="/teacher"/>
            </div>
        )
    }
}