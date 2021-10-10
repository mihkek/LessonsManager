import React from "react";
import react from "react";
import { NavLink, Navbar,NavDropdown,Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
// import profileLink from './profileLink.png'
import profileLink from '../../../constants/Styles/Images/profileLink.png'
import * as APPMODE from '../../../constants/AppConstants' 

export class AppNavBar extends React.Component{
    /*Input
        1. BrandText - the brand link  
        2. BrandImage - the image for brand
        3. BrandLink
        4. Menu - list of links for menu, every element contains:
                        - text
                        - href
                        - dropdownList: Text, Href
        5. Other - other components of a NavBar. It can contains a search-form, some images, and others
        6. Mode - current access model of the application
        7. UserName - name of the current user. It for viewing on the left side of avatar
        List of input params would take new elements in the future
    */
    constructor(props){
        super(props)
    }
    render(){
        var userName =  localStorage.getItem('currentUserName')
        console.log("current user - " + userName)
        return(
            <div className="container-fluid">
                   
                        <Navbar bg="light" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand className="logo" href={this.props.BrandLink}>
                                    <Link class="navbar-brand logo"  to={this.props.BrandLink}>
                                        <span>E</span>
                                        <span>N</span>
                                        <span>G</span>
                                        <span>L</span>
                                        <span>I</span> 
                                        <span>S</span>
                                        <span>H</span>
                                    </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="navbarSupportedContent">
                                <Nav className="mr-auto">
                                
                                        {this.props.Menu.map(e => (
                                            <React.Fragment>
                                            {e.dropdownList != undefined ? 
                                                    <React.Fragment>
                                                        <NavDropdown title={e.text} id="basic-nav-dropdown" className="nav-item menu-link">
                                                        {e.dropdownList.map(eIN => (
                                                                <NavDropdown.Item href={eIN.href}>{eIN.text}</NavDropdown.Item>
                                                            ))}
                                                            </NavDropdown>
                                                        </React.Fragment>
                                               : <Nav.Link className="nav-item menu-link" href={e.href}>{e.text}</Nav.Link> }
                                          </React.Fragment>
                                           
                                        ))}     
                              
                                </Nav>
                            </Navbar.Collapse>
                           
                                {this.props.mode != APPMODE.ModeGuest &&      
                                    <React.Fragment>                   
                                        <NavDropdown title="User" className="left-nav">
                                            <NavDropdown.Item href="">
                                                <Link to="/profile"><p className = "hint">My profile</p></Link> 
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="">
                                                <Link to="/logout"><p className = "hint">Logout</p></Link> 
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Image  className = "profile-image" src={profileLink}/>
                                    </React.Fragment>
                                }
                           
                        </Navbar>
                     
                        <br />
    
                       
        
    
                </div>
    
        )
    }
}
