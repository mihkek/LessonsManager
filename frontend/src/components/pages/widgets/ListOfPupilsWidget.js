import React, {useEffect, useState} from "react";
import { BaseWidget } from "./BaseWidget";
import * as MODE from '../../../constants/AppConstants'
import * as UrlConstructor from '../../../functions/UrlConstructor'
import axios from "axios";
import { Link } from "react-router-dom";

export function ListOfPupilsWidget(props){
    /*
      Props:
      1. ApiUrl - api-url for getting data
      2. Title
    */
      const [componentState, setComponentState] = useState(undefined);
      useEffect(()=>{
        var url = UrlConstructor.constructUrl(props.apiUrl, ["myPupils"])
        var session_id = localStorage.getItem('session_id')
        
        axios({
            method: 'get', 
            url: url, 
            secure: true,
            headers: {},
            params: {
                "session_id" : session_id
            }
        })
          .then(response => {
            console.log( "Res of get pupils - "+ JSON.stringify(response.data.pupils))
            setComponentState(response.data.pupils)
          })
          .catch(error => {
             setComponentState(undefined)
          })
      }, setComponentState)

      return(
        <aside>
        <div class="widget">
           <h3 class="widget-title">{props.title}</h3>
           <ul class="widget-category-list">
            {componentState !=undefined && componentState.map(e => (
                <li><Link to="">{e.login}</Link> </li>
            ))}
           
          </ul>
        </div>
      </aside>
      )
}