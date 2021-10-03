import React from "react"
import SubmitButton from "../base/SubmitButton";
import '../../../constants/Styles/Css/SImpleForm.css'
import LinkButton from "../base/LinkButton";
import { Link } from "react-router-dom";

export class ConfirmWindow extends React.Component{

    constructor(props){
        super(props)
        this.clickOk = this.clickOk.bind(this)
        this.clickCancel = this.clickCancel.bind(this)
    }
    clickOk(){
        this.props.action(true)
    }
    clickCancel(){
      this.props.action(false)
    }
    render(){
      if(!this.props.visible)
        return null
      return (
        <div className='modalWindow' >
          <div className='modalWindow-dialog' onClick={e => e.stopPropagation()}>
            <div className='modalWindow-header'>
              <h3 className='modalWindow-title'>{this.props.title}</h3>
              <span className='modalWindow-close' onClick={this.props.cancelAction} >
                &times;
              </span>
            </div>
            <div className='modalWindow-body'>
              <div className='modalWindow-content'>{this.props.content}</div>
            </div>
            <div className='modalWindow-footer'>
                <button className="baseButton" onClick={this.clickOk}>Ok</button>
                <button className="baseButton" onClick={this.clickCancel} >Cancel</button>
            </div>
            
          </div>
        </div>
      )
    }
}
