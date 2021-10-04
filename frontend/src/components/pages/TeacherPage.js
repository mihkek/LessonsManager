import React from 'react';
import * as Constants from '../../constants/AppConstants'
import LessonsPage from './base/LessonsPage';
import {ListOfPupilsWidget}  from './widgets/ListOfPupilsWidget';

export default class TeacherPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <ListOfPupilsWidget apiUrl="teacher" title="My pupils"/>
                <LessonsPage 
                    apiUrl="teacher" 
                    targetMode={Constants.ModeTeacher} 
                    mode={this.props.mode} 
                    isReadOnly={false}
                    pageRoute="/teacher"/>
            </React.Fragment>
        )
    }
}