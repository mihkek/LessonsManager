import React from 'react';
import { ElemOfLessonList } from './ElemOfLessonList';
import { LessonView } from './LessonView';
import { Route,Link } from 'react-router-dom';

export class LessonList extends React.Component{
    /*
       Props:
       1.PageRoute - route for page, where the component is
       2.IsReadOnly - if this param is false, it means that you cannot editData
    */
    constructor(props){
        super(props)
        this.handeDataSave = this.handeDataSave.bind(this)
    }
    handeDataSave(){

    }
    makeHrefForLesson = (mainLink, idLesson) => {
        return this.props.pageRoute+"/"+ mainLink+"/"+idLesson    
    }
    render(){
        return(
            <div>
                 <React.Fragment>
                        {this.props.data.map(e=>(
                        
                                <ElemOfLessonList 
                                    mode={this.props.mode} 
                                    name={e.name} task={e.task} 
                                    href={this.makeHrefForLesson("lesson", e.id)}/> 
                        
                        ))}
                  </React.Fragment>
            </div>
        )
    }
}