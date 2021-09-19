import React from "react"
import Label from "../base/Label"
import InputField from "../base/InputField"
//Custom form's elements
//It would be not important, i created it just for composition learning)

//Costom input field. 
export default class InputWithLabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Label name= {this.props.name} label={this.props.label}/>
                <InputField type={this.props.type} name={this.props.name} value={this.props.login} onChange={this.props.onChange}/>
            </div>  
        )
    }
}
