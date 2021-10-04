import React from 'react';
import {Redirect} from "react-router-dom"
import { LessonList } from '../elements/LessonList';
import axios from 'axios';
import * as UrlConstructor from '../../../functions/UrlConstructor'
import * as APPMODE from '../../../constants/AppConstants'
import { ConfirmWindow } from '../../library/additional/ConfirmWindow';
import {deleteLesson} from '../../../functions/DeleteLesson'
import { Link } from 'react-router-dom';
import addLink from '../../../constants/Styles/Images/addLink.png'


 
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
            data : [],
            badResponse:false,
            isModalVisible: false,
            isModal : false,
            idLessonWaitingConfirm: -1,
            isLoad: true
        }
        this.getData = this.getData.bind(this)
        this.deleteData = this.deleteData.bind(this)
        this.showConfirm = this.showConfirm.bind(this)
        this.confirmAction = this.confirmAction.bind(this)
        this.getData()
    }
    getData(){
        var url = UrlConstructor.constructUrl(this.props.apiUrl, ["lessons"]) 
        var session_id = localStorage.getItem('session_id')  
        this.setState({
            isLoad:true
        })
        axios({
            method: 'get', 
            url: url, 
            secure: true,
            headers: {},
            params: {
                "session_id" : session_id
            }
        }) .then(response => {
            console.log(response.status)
            this.setState({
                data: response.data.data,
                isLoad: false
              });
          })
    }
    showConfirm(){
        this.setState({
            isModal:true
        })
    }
    confirmAction(res){
        this.setState({
            isModal:false
        })
        if(!res){
           
            return
        }
        else{
            deleteLesson(this.state.idLessonWaitingConfirm, this.props.apiUrl)
            this.setState({
                idLessonWaitingConfirm:-1,
            })
            this.getData()
        }
        
    }
    deleteData(id){
        this.showConfirm()
        this.setState({
            idLessonWaitingConfirm : id
        })
    }
    render(){
      
        var divClass = "lessons-list"
        if(this.state.isLoad) divClass += " loading"

        console.log("ReadOnly - "+this.props.isReadOnly)
        if((this.props.mode == APPMODE.ModeGuest)||(this.props.mode != this.props.targetMode))
            return (<Redirect to='/'/>)
        return(
            
           
            <div className={divClass}>
                {this.state.isLoad &&  
                <div class="loader">
                     </div>}

                <ConfirmWindow
                            visible={this.state.isModal}
                            title='Do you want to delete lesson?'
                            content={<p>It will delete data about this lesson from data base.</p>}
                            action = {this.confirmAction}
                        />
                <h1 className="lesson-page-header">English lessons with my pupils</h1>
                {/* <a href=""><img  className="action-button " src={addLink}/></a> */}
                {!this.props.isReadOnly &&   <Link to="/teacher/addLesson"><img className="action-button small" src={addLink}/></Link>}
              
                <LessonList data={this.state.data} pageRoute={this.props.pageRoute} deleteAction={this.deleteData} isReadOnly={this.props.isReadOnly}/>
                
            </div>
           
        )
    }
}