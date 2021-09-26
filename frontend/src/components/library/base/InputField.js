import React from "react"
import * as BaseCss from '../../../constants/Styles/DefaultStyles'

//Custom form's elements
//It would be not important, i created it just for composition learning)

//Costom input field. 
export default class InputField extends React.Component{
    /*
      Props:
      1.Name - name of changing property
      2.Type - type for input
      3.Value - start value for input
      4.OnChange - action,that will be start when input-data is changed
      5.cssClass - css-class for style of component
      6.IsReadOnly - readOnlyFlag
    */
    constructor(props){
        super(props)
    }
    render(){
        var opts = {}
        if(this.props.isReadOnly == true) 
            opts['readOnly'] = 'readOnly'
        return(
            <div>
                <input 
                   type={this.props.type} 
                   className={this.props.cssClass} 
                   name={this.props.name}
                   value={this.props.value} 
                   onChange={this.props.onChange}
                   {...opts}  />   
            </div>  
        )
    }
}
InputField.defaultProps = {cssClass:BaseCss.inputFieldClass};
