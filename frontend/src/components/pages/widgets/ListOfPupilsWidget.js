import React from "react";
import { BaseWidget } from "./BaseWidget";

export class ListOfPupilsWidget extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BaseWidget title="My pupils" items={[]}/>
        )
    }
} 