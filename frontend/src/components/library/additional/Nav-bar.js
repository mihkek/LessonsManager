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
        this.constructMenu = this.constructMenu.bind(this)
    }
    constructMenu(){
        this.props.Menu.map(e => {
            if((e.dropdownList != undefined)&&(e.dropdownList.length != 0)){
                return(
                    <React.Fragment>
                           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              { e.dropdownList.map(drop => {
                                     <Nav.Link href={drop.link}>{drop.text}</Nav.Link>
                              })}
                           </NavDropdown>
                    </React.Fragment>
                )
            }
            else{
            return (
                    <React.Fragment>
                        <Nav.Link href={e.href}>{e.text}</Nav.Link>
                    </React.Fragment>
                )
            }
        })
    }
    render(){
        console.log(this.props.Menu)
        return(
            <div>
            <div className="row">
                <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href={this.props.BrandLink}>{this.props.BrandText}</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {
                                        this.props.Menu.map(e => {
                                                <Nav.Link href="/">sfsdf</Nav.Link>
                                                console.log("DDDd")
                                                // <Nav.Link href={e.href}>{e.text}</Nav.Link>
                                        })
                                    }
                                {/* {this.constructMenu} */}
                                {/* <Nav.Link href="/">Home</Nav.Link>
    
                                <Nav.Link href="/about-us">Contact Us</Nav.Link>
    
                                <Nav.Link href="/contact-us">About Us</Nav.Link>
    
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    
                                    <NavDropdown.Divider />
    
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    
                                </NavDropdown> */}
    
                                </Nav>
    
                                <Form inline>
    
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
