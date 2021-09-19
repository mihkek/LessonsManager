import React from "react";

export default class Label extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <label htmlFor={this.props.name}>{this.props.label}</label>
        )
    }
}