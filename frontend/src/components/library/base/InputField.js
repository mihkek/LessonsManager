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
                <input type={this.props.type} name={this.props.name} value={this.props.login} onChange={this.props.onChange} />   
            </div>  
        )
    }
}
