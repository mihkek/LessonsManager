import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

export default class SubmitButton extends React.Component{
     /*
      Props:
      1.Name - name of changing property
      2.Value - start value for input
      3.cssClass - css-class for style of component
    */
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