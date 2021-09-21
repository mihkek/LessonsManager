import React from "react"
import Label from '../base/Label'
import SelectField from '../base/SelectField'

//Costom select field
export class SelectFieldWithLabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              <Label label={this.props.label}/>
                 <SelectField name={this.props.name} options={this.props.options} cssClass={this.props.cssClass} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}