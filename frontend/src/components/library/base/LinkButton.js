import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class LinkButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a href={this.props.href} className={this.props.cssClass}>{this.props.text}</a> 
        )
    }
}
LinkButton.defaultProps = {cssClass:BaseCss.buttonClass};