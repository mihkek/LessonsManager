import React from 'react';
import { ElemOfLessonList } from './ElemOfLessonList';
import { LessonView } from './LessonView';
import { Route,Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { ConfirmWindow } from '../../library/additional/ConfirmWindow';
import {deleteLesson} from '../../../functions/DeleteLesson'


export class LessonList extends React.Component{
    /*
       Props:
       1.PageRoute - route for page, where the component is
       2.IsReadOnly - if this param is false, it means that you cannot editData
       3.ApiUrl - url, that component and his childs will use for API-requests
    */
    constructor(props){
        super(props)
        this.state = {
            isModal : false
        }
    }

    makeHrefForLesson = (mainLink, idLesson) => {
        return this.props.pageRoute+"/"+ mainLink+"/"+idLesson    
    }
    render(){
        return(
           
                 <React.Fragment>
                   
             
                        {this.props.data.map(e=>(
                        
                                <ElemOfLessonList 
                                    name={e.name} task={e.task} 
                                    isReadOnly = {this.props.isReadOnly}
                                    apiUrl = {this.props.apiUrl}
                                    id={e.id}
                                    deleteAction = {this.props.deleteAction}
                                    href={this.makeHrefForLesson("lesson", e.id)}/> 
                        
                        ))}
                  </React.Fragment>
     
        )
    }
}