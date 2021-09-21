import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class SubmitButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <input type="submit" className={this.props.cssClass} value={this.props.value} name={this.props.name} /> 
        )
    }
}
SubmitButton.defaultProps = {cssClass:BaseCss.buttonClass};