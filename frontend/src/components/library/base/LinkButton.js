import React from "react"

export default class LinkButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a href={this.props.href} style={this.props.style}>{this.props.text}</a> 
        )
    }
}