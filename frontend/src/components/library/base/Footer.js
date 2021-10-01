import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            <div className="fixed-bottom">  
            <div className="container-footer">
                <div className="footer-content">
                <div className="footer-col"><span>English lab © 2021</span></div>
                <div className="footer-col">
                </div>
                <div className="footer-col">
                    <a href="mailto:admin@yoursite.ru">Contact with autor</a>
                </div>
                </div>
                </div>
        </div>
        )
    }
}