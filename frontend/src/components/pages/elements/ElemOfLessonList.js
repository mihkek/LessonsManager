import React from 'react';
import * as CiteMode from '../../../constants/AppConstants'

export class ElemOfLessonList extends React.Component{
    /*
      Props:
      2.IsReadOnly - if this param is false, it means that you cannot editData
      2.HrefToDelete - link to a delete lesson action
    */
    constructor(props){
        super(props)
    }
    render(){
        return(
             <div>
                 <h1>{this.props.name}</h1>
                 <h4>{this.props.task}</h4>
                 <a href={this.props.href}>View lesson</a>
                {!this.props.isReadOnly && <a href={this.props.hrefToDelete}>Delete lesson</a>}
             </div>
        )
    }
}