import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

//Custom form's elements
//It would be not important, i created it just for composition learning)

//Costom input field. 
export default class InputField extends React.Component{
    constructor(props){
        super(props)
      //  typeof(props.cssClass) == "undefined" ? this.props.className=BaseCss.inputFieldClass : this.props.className = props.cssClass
    }
    render(){
        return(
            <div>
                <input type={this.props.type} className={this.props.cssClass} name={this.props.name} value={this.props.login} onChange={this.props.onChange} />   
            </div>  
        )
    }
}
InputField.defaultProps = {cssClass:BaseCss.inputFieldClass};
