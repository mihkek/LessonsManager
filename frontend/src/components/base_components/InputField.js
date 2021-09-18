import React from "react"

//Custom form's elements
//It would be not important, i created it just for composition learning)

//Costom input field. 
export default class InputField extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none"
                type={this.props.type} name={this.props.name} value={this.props.login} onChange={this.props.onChange} />   
            </div>  
        )
    }
}
//Costom select field
export class SelectField extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
export class SimpleForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form onSubmit={this.props.onSubmit}>       
             <div>
              
                 {this.props.fields.map(e => (
                                e.data
                            ))}   
                    <input type="submit" value={this.props.buttonText} /> 
            </div>
            </form>
          );
    }
}
