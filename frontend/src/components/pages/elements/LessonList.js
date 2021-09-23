import React from 'react';
import { ElemOfLessonList } from './ElemOfLessonList';

export class LessonList extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div>
                {this.props.data.map(e=>(
                    <ElemOfLessonList name={e.name} task={e.task}/>
                ))}
            </div>
        )
    }
}