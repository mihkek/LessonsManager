import React from 'react';
import * as Constants from '../../../constants/AppConstants'

export default class PupilPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        if(!this.props.logied)
              return (<div></div>)
        if(this.props.mode != Constants.ModePupil)
            return(
                <Redirect to='/'/>
            )
        return(
            <h1>PupilPage</h1>
        )
    }
}