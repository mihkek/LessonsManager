import React from "react";
import react from "react";
import { NavLink, Navbar,NavDropdown,Nav, Container, Form, FormControl, Button } from "react-bootstrap";

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
        List of input params would take new elements in the future
    */
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div className="row">
                <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href={this.props.BrandLink}>{this.props.BrandText}</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                
                                        {this.props.Menu.map(e => (
                                            <React.Fragment>
                                            {e.dropdownList != undefined ? 
                                                    <React.Fragment>
                                                        <NavDropdown title={e.text} id="basic-nav-dropdown">
                                                        {e.dropdownList.map(eIN => (
                                                                <NavDropdown.Item href={eIN.href}>{eIN.text}</NavDropdown.Item>
                                                            ))}
                                                            </NavDropdown>
                                                        </React.Fragment>
                                               : <Nav.Link href={e.href}>{e.text}</Nav.Link> }
                                          </React.Fragment>
                                           
                                        ))}       
                                </Nav>
    
                                        <Form align="rigth">
            
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            
                                        <Button variant="outline-success">Search</Button>
    
                                </Form>
    
                            </Navbar.Collapse>
    
                        </Navbar>
    
                        <br />
    
                       
        
    
                </div>
    
            </div>
    
        </div>
    
        )
    }
}
