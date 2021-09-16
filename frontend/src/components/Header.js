
import { Link } from 'react-router-dom'
import React from 'react';

 export class Header extends React.Component
 {
    constructor(props) {
        console.log(props.logied)
        super(props);
        //this.updateLogied = this.updateLogied.bind(this);
        this.state = {
          mode: '',
        };
    }
    staticMenu(){
        return (
            [<li><Link to='/'>Home</Link></li>,
            <li><Link to='/About'>About</Link></li>]
        )
    }
    notLoginMenu(){
        return (
            <li><Link to='/Sing in'>Sing in</Link></li>
          )
    }
    logiedMenu(){
        return (
            <li><Link to='/Logout'>Logout</Link></li>
          )
    }
    // updateLogied (e){
    //     console.log("Logout - " + e.target.isLog)
    //     this.props.updateLogied(e.target.isLog);
    // }

        render() {
           return(
            <header>
                <nav>
                    <ul>
                    {this.staticMenu()}
                    {this.props.logied ? this.logiedMenu(): this.notLoginMenu() }
                    </ul>
                </nav>
                </header>
            )
        }
}