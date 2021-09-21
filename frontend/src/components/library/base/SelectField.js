import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

//Costom select field
export default class SelectField extends React.Component{
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