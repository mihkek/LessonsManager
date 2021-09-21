import React from "react";
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class Label extends React.Component{
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