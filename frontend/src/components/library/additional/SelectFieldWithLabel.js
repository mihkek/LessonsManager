import React from "react"
import Label from '../base/Label'

//Costom select field
export class SelectFieldWithLabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              <Label label={this.props.label}/>
                    <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                         {this.props.options.map(e => (
                            <option value={e.value}>{e.text}</option>
                        ))}               
                    </select>
            </div>
        )
    }
}