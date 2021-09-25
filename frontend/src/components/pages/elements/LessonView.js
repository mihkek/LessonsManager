import React from 'react';
import InputWithLabel from '../../library/additional/InputWithLabel'
import Label from '../../library/base/Label'
import LinkButton from '../../library/base/LinkButton'
import SubmitButton from '../../library/base/SubmitButton'

export class LessonView extends React.Component{
    /*
       Full view for lesson
       Props:
        1. ActionForSave - an action for change data
        2. .... - some parameters, that i put here when my app will be ready for it
        3. PageForGoBack - link for come back to
        4. CanEdit - if this props has false-value, you cannot will use this component in read-only mode

       Params in the route:
        1. LessonId - an unique lesson ID, that using for receiving data from api
    */
    constructor(props){
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
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
            // <h1>Bulabalaba</h1>
            <form method="post" action={this.props.action}>
                  <InputWithLabel name="name" label="Lesson name" type="text" value={this.props.lessonName} onChange={this.handleInputChange}/>
                  <InputWithLabel name="task" label="Tasks for lesson" type="text" value={this.props.lessonTask} onChange={this.handleInputChange}/>
                  <SubmitButton name="submit" text="save"/>
                  <LinkButton href={this.props.pageForGoBack} text="Back"/>
                </form>
        )
    }
}