import React from "react"
import Label from "../base/Label"
import InputField from "../base/InputField"
//Custom form's elements
//It would be not important, i created it just for composition learning)

//Costom input field. 
export default class InputWithLabel extends React.Component{
    /*
      Props:
      1.Name - name of changing property
      2.Label - label text
      3.Type - type for input
      4.Value - start value for input
      5.OnChange - action,that will be start when input-data is changed
      6.IsReadOnly - read only flag for component
    */
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Label name= {this.props.name} label={this.props.label}/>
                <InputField type={this.props.type} name={this.props.name} isReadOnly={this.props.isReadOnly} value={this.props.value} onChange={this.props.onChange}/>
            </div>  
        )
    }
}
