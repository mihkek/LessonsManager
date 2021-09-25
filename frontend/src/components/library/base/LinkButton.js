import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class LinkButton extends React.Component{
    /*
      Props:
      1.Href - on this link you will be redirect after click on the component 
      2.Text - text, that user can see in the screen
      3.cssClass - css-class for style of component
    */
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