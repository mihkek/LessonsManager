import React from "react"
import SubmitButton from "../base/SubmitButton";

export class SimpleForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form onSubmit={this.props.onSubmit}>       
             <div>
              
                 {this.props.fields.map(e => (
                                e.data
                            ))}   
                <SubmitButton type="submit" value={this.props.buttonText}/> 
            </div>
            </form>
          );
    }
}
