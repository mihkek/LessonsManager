import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

//Costom select field
export default class SelectField extends React.Component{
     /*
      Props:
      1.Name - name of changing property
      2.Label - label text
      3.Type - type for input
      4.Value - start value for input
      5.OnChange - action,that will be start when input-data is changed
      6.Option - list of data for select
    */
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              <label >{this.props.label}</label>
                    <select name={this.props.name} className={this.props.cssClass} value={this.props.value} onChange={this.props.onChange}>
                         {this.props.options.map(e => (
                            <option value={e.value}>{e.text}</option>
                        ))}               
                    </select>
            </div>
        )
    }
}
SelectField.defaultProps = {cssClass:BaseCss.selectClass};