import React from "react"
import SubmitButton from "../base/SubmitButton";
import * as BaseCss from '../../../constants/Styles/DefaultStyles'
import '../../../constants/Styles/Css/SImpleForm.css'

export class SimpleForm extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <form onSubmit={this.props.onSubmit}>       
             <div className="container">
                        <div class="row justify-content-center align-items-center">
                    
                        {this.props.fields.map(e => (
                                        e.data
                                    ))}   
                        <SubmitButton type="submit" value={this.props.buttonText} style="width:40%"/> 
                    </div>
                </div>
            </form>
          );
    }
}
