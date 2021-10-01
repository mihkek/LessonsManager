import React from 'react';
import InputWithLabel from '../../library/additional/InputWithLabel'
import Label from '../../library/base/Label'
import LinkButton from '../../library/base/LinkButton'
import SubmitButton from '../../library/base/SubmitButton'
import axios from 'axios';
import { Redirect } from 'react-router';
import * as UrlConstructor from '../../../functions/UrlConstructor'
import arrow_back from '../../../constants/Styles/Images/arrow_back.png'
import { Link } from 'react-router-dom';

export class LessonView extends React.Component{
    /*
       Full view for lesson
       Props:
        1. ActionForSave - an action for change data
        2. .... - some parameters, that i have to put here when my app will be ready for it
        3. PageForGoBack - link for come back to
        4. IsReadOnly - if this props has false-value, you will use this component in read-only mode
        5. ApiServicePath - api path for getting data
        6. HrefForAdd - route path for add new lesson()
        7. HRef

       Params in the route:
        1. LessonId - an unique lesson ID, that using for receiving data from api
    */
    constructor(props){
        super(props)
        this.state ={
            lessonName:'',
            lessonTask:''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.getLessonDataFromServer = this.getLessonDataFromServer.bind(this)
        this.handleDataSave = this.handleDataSave.bind(this)
        this.getLessonDataFromServer()
    }
    getLessonDataFromServer(){
        var url = UrlConstructor.constructUrl(this.props.apiUrl, ["viewLesson/",this.props.match.params.id ])
        var session_id = localStorage.getItem('session_id')
        axios({
            method: 'get', 
            url: url, 
            secure: true,
            headers: {},
            data: {
            },
            params: {
                "session_id" : session_id
            }
        })
          .then(response => {
            console.log("Taked -" + response.data.lesson.name)
            this.setState({
                lessonName: response.data.lesson.name,
                lessonTask: response.data.lesson.task
              });
          })
    }
    handleDataSave(event){
        var url = UrlConstructor.constructUrl(this.props.apiUrl, ["changeLesson" ])
        var session_id = localStorage.getItem('session_id')
        axios({
            method: 'post', 
            url: url, 
            secure: true,
            headers: {},
            data: {
                id:this.props.match.params.id,
                name:this.state.lessonName,
                task:this.state.lessonTask,
                session_id : session_id
            }
        })
          .then(response => {
            this.setState({
                submitStatus: response.data.status,
                apiMessage: response.data.message
              });
          })
          .catch(error => {
            this.setState({
                submitStatus: false,
                message: "Cannot do request to API. Try again later"
              });
          })
          event.preventDefault()
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value  
          });
    }
    render(){
        return(
            <React.Fragment>
                  <div className="container  lesson-detail">
                        <Link to= {this.props.pageForGoBack}><img class="arrow" src={arrow_back}/></Link>
                            {this.state.submitStatus != undefined && this.state.submitStatus == false && 
                                    <h2>Error - {this.state.error}</h2>}
                            {this.state.submitStatus == true && <Redirect to={this.props.pageForGoBack}/>}
                            <form onSubmit={this.handleDataSave}>
                            
                            <div class="row justify-content-center align-items-center">
                                <InputWithLabel name="lessonName" label="Lesson name" type="text"  isReadOnly={this.props.isReadOnly} value={this.state.lessonName} onChange={this.handleInputChange}/>
                                <InputWithLabel name="lessonTask" label="Tasks for lesson" isReadOnly={this.props.isReadOnly} type="text" value={this.state.lessonTask} onChange={this.handleInputChange}/>
                                
                                <div className="lesson-view-footer">
                                    {!this.props.isReadOnly && <SubmitButton cssClass="action-button" name="submit" text="save" value="Save"/>}
                                </div>
                                
                                </div>
                            </form>
                </div>
            </React.Fragment>
        )
    }
}

// return(
//     <React.Fragment>
//           <div className="lesson lesson-detail">
//             <div className="container form-container form-container-notBorder">
//                 <Link to= {this.props.pageForGoBack}><img class="arrow" src={arrow_back}/></Link>
//                     {this.state.submitStatus != undefined && this.state.submitStatus == false && 
//                             <h2>Error - {this.state.error}</h2>}
//                     {this.state.submitStatus == true && <Redirect to={this.props.pageForGoBack}/>}
//                     <form onSubmit={this.handleDataSave}>
//                         <InputWithLabel name="lessonName" label="Lesson name" type="text"  isReadOnly={this.props.isReadOnly} value={this.state.lessonName} onChange={this.handleInputChange}/>
//                         <InputWithLabel name="lessonTask" label="Tasks for lesson" isReadOnly={this.props.isReadOnly} type="text" value={this.state.lessonTask} onChange={this.handleInputChange}/>
                        
//                         <div className="lesson-view-footer">
//                             {!this.props.isReadOnly && <SubmitButton cssClass="action-button" name="submit" text="save" value="Save"/>}
//                             <LinkButton cssClass="action-button" href={this.props.pageForGoBack} text="Back"/>
//                         </div>
//                     </form>
//                 </div>
//         </div>
//     </React.Fragment>
// )