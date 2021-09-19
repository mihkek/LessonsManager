import React from "react"

export default class SubmitButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <input type="submit" value={this.props.value} name={this.props.name} /> 
        )
    }
}