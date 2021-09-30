import React from "react"
import SubmitButton from "../base/SubmitButton";
import '../../../constants/Styles/Css/SImpleForm.css'
import LinkButton from "../base/LinkButton";
import { Link } from "react-router-dom";

export class SimpleForm extends React.Component{
    /*
      Props:
      1.ButtonText - text for button on the form
      2.Fields - list of components on the form
      3.OnSublmit - action for form
      4.Type - type for input
      5.HasBack - set\not set link for go back to last page. 
      6.backPageLink - link for go back to last page. If HasBack param = false, this param can be undefind
      7.Message - message, that component must to view
    */
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="container form-container">
                <Link><h3>Sing in</h3></Link>
                   {this.props.message}
                <form onSubmit={this.props.onSubmit}>       
                <div className="container">
                            <div class="row justify-content-center align-items-center">
                        
                            {this.props.fields.map(e => (
                                            e.data
                                        ))}   
                            <SubmitButton type="submit" value={this.props.buttonText} style="width:40%"/> 
                        </div>
                        {this.props.hasBack && <LinkButton href={this.props.backPageLink} text="back"/> }
                    </div>
                </form>
            </div>
          );
    }
}
