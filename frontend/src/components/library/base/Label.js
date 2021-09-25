import React from "react";
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class Label extends React.Component{
    /*
      Props:
      1.Label - label text
      2.cssClass - css-class for style of component
    */
    constructor(props){
        super(props)
    }
    render(){
        return(
            <label className={this.props.cssClass} htmlFor={this.props.name}>{this.props.label}</label>
        )
    }
}
Label.defaultProps = {cssClass:BaseCss.labelClass};