import React from 'react';

export class ElemOfLessonList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
             <div>
                 <h1>{this.props.name}</h1>
                 <h4>{this.props.task}</h4>
                 <a href={this.props.href}>View lesson</a>
             </div>
        )
    }
}