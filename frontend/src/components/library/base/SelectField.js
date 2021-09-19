import React from "react"

//Costom select field
export class SelectField extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("Select - " - this.props.options)
        return(
            <div>
              <label >{this.props.label}</label>
                    <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                         {this.props.options.map(e => (
                            <option value={e.value}>{e.text}</option>
                        ))}               
                    </select>
            </div>
        )
    }
}