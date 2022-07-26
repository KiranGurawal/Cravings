import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import ProductCard from './ProductCard';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

import { getName, removeName, setName } from '../Loginsession';

export default function CustomerNav() {

  // useEffect(() => {
  //   document.getElementById("quant").innerHTML = localStorage.getItem("quant")
  // })



  let navigate = useNavigate();
  const logout = (e) => {

    setName("null");
  removeName();
    navigate("/")
    // alert(getName());
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {                               //to close the cart flex
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="light" fixed='top' variant="light" style={{ height: "60px" }}>
        <Container>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4-aO_9Sh5b6Ja6DF-K5b1W3BH41Gozzs6w&usqp=CAU" style={{ height: "30px", width: "30px" }}></img>
          <Navbar.Brand href="#" fw-bold>Cra<span style={{ color: "red" }}>vings</span></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link><Link to="/customerpanel" className='Link'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/customerorders" className='Link'>Order List</Link></Nav.Link>
            <Badge badgeContent={0} color="primary" style={{ fontSize: 25, cursor: "pointer" }}>

              <Link to="/cart">  <i class="fa-solid fa-cart-shopping" style={{ marginLeft: "40rem" }}></i></Link>

            </Badge>
            <span id="quant"></span>
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
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif' style={{ width: "9rem", padding: "10", height: "7rem" }}></img>

              </div>
            </Menu>

            <Button variant="info" onClick={logout} style={{ marginLeft: "1rem" }}>Logout</Button>


          </Nav>
        </Container>
      </Navbar>

    </>
  )

}
