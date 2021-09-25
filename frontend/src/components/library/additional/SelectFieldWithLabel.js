import React from "react"
import Label from '../base/Label'
import SelectField from '../base/SelectField'

//Costom select field
export class SelectFieldWithLabel extends React.Component{
    constructor(props){
        super(props)
    }
    /*
      Props:
      1.Name - name of changing property
      2.Label - label text
      3.Type - type for input
      4.Value - start value for input
      5.OnChange - action,that will be start when input-data is changed
      6.Option - list of data for select
    */
    render(){
        return(
            <div>
              <Label label={this.props.label}/>
                 <SelectField name={this.props.name} options={this.props.options} cssClass={this.props.cssClass} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}