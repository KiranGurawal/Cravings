import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { width } from '@mui/system';
import { Router, useSearchParams } from 'react-router-dom';
import { Link} from 'react-router-dom'

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {                               //to close the cart flex
        setAnchorEl(null);
    };
    return (
        <Navbar fixed='top' bg="light" expand="lg" style={{ height: "60px"}}>
            <Container fluid><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4-aO_9Sh5b6Ja6DF-K5b1W3BH41Gozzs6w&usqp=CAU" style={{height:"30px", width:"30px"}}></img>
                <Navbar.Brand href="#" fw-bold>Cra<span style={{ color: "red" }}>vings</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link ><Link to="/home" className='Link'>Home</Link></Nav.Link>
                        <Nav.Link  ><Link to="/About" className='Link'>About</Link></Nav.Link>
                        <NavDropdown title="Login" id="navbarScrollingDropdown">
                            <NavDropdown.Item><Link to="/adminlogin" className='Link'>Admin <span style={{color:"red"}}>Login</span></Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/login" className='Link'>Customer <span style={{color:"red"}}>Login</span></Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Register" id="navbarScrollingDropdown">
                            <NavDropdown.Item><Link to= "/register" className='Link'>Customer <span style={{color:"red"}}>Registration</span></Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Badge badgeContent={0} color="primary" style={{ fontSize: 25, cursor: "pointer" }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    >
                        <i class="fa-solid fa-cart-shopping" ></i>
                    </Badge>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div className='card-deatails d-flex justify-content-center align-items-center' style={{ width: "20rem" }}>
                            <i className='fas fa-close smallclose'
                                onClick={handleClose}
                                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                            <p style={{ fontSize: 19 }}>Your Cart Is Empty</p>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif' style={{ width: "9rem", padding: "10", height:"7rem" }}></img>
                        
                        </div>
                    </Menu>


                                 
                </Navbar.Collapse>
            </Container>
        
        </Navbar>
    );
}
export default Header;