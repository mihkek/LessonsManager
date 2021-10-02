import React from 'react';
import { Link } from 'react-router-dom';
import * as CiteMode from '../../../constants/AppConstants'
import chat_link_icon from '../../../constants/Styles/Images/chat_link_icon.png'
import person_defaultImage from '../../../constants/Styles/Images/person_defaultImage.png'
import {deleteLesson} from '../../../functions/DeleteLesson'

export class ElemOfLessonList extends React.Component{
    /*
      Props:
      1.IsReadOnly - if this param is false, it means that you cannot editData
      2.ApiUrl - url, that component and his childs will use for API-requests
      3.Id - lesson id
    */
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }
    delete(){
        var res = deleteLesson(this.props.id, "teacher")
        console.log(res)
    }   
    render(){
        return(
             <div className="lesson">
            <div className="lesson-content">
                  <a href=""><img  className="profile-user-image" src={person_defaultImage}/></a>
            </div>
            <div className="pupil-info"><a href="">Pupil - Bitch from Penza</a>
              <a href="@"><img  class="chat-link" src={chat_link_icon}/></a>
          
          </div>
          <h2 className="lesson-title">{this.props.name}</h2>
              <p>{this.props.task}</p>
              <div className="lesson-footer">
                <Link className="more-link" to={this.props.href}>View lesson</Link> 
                {!this.props.isReadOnly && <button onClick={this.delete} className="more-link" >Delete lesson</button>}
            </div>
                
               
             </div>
        )
    }
}