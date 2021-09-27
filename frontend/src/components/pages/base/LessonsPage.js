import React from 'react';
import * as Constants from '../../../constants/AppConstants'
import {Redirect} from "react-router-dom"
import { LessonList } from '../elements/LessonList';
import axios from 'axios';
import * as UrlConstructor from '../../../functions/UrlConstructor'
 
export default class LessonsPage extends React.Component {
    /* 
        Base page for work with lessons
        Props:
        1. apiUrl - url, that component will use when it do requests to the server
        2. TargetMode - mode when that component can work
        3. CurrentMode - current work-mode in the app. If that prop is not equal with TargetMode, component has not to work
        4. PageRoute - route for page, when the component is locale in frontend-app
        5. ReadOnly - read-only flag for the component and childs of this
     */
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
        this.getData = this.getData.bind(this)
        this.getData()
    }
    getData(){
        var url = UrlConstructor.constructUrl(this.props.apiUrl, ["lessons"])
        axios({
            method: 'get', 
            url: url, 
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
        console.log("ReadOnly - "+this.props.isReadOnly)
        if(!this.props.logied)
            return (<Redirect to='/'/>)
        
        if(this.props.mode != this.props.targetMode)
            return(<Redirect to='/'/>)
        return(
            <div>
                <h1>Study managment</h1>
                <LessonList data={this.state.data} pageRoute={this.props.pageRoute} isReadOnly={this.props.isReadOnly}/>
                
            </div>
        )
    }
}