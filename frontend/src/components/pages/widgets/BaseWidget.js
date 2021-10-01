import React from "react";
import { Link } from "react-router-dom";

export class BaseWidget extends React.Component{
    /*
      Props:
      1. Title -widget title
      2. Items - items that widget contain
    */
   constructor(props){
       super(props)
   }
    render(){
        return(
            <aside>
            <div class="widget">
               <h3 class="widget-title">{this.props.title}</h3>
               <ul class="widget-category-list">
                {this.props.items.map(e => (
                    <li><Link to="">{e.text}</Link> </li>
                ))}
               
              </ul>
            </div>
          </aside>
        )
    }
}