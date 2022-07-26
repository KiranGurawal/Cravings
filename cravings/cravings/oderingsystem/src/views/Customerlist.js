import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { setName, getName } from '../Loginsession';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Container ,Paper} from '@material-ui/core';

function Customerlist() {
  const navigate = useNavigate();
  const [customers, setCustomer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/customer/getcustomer")
      .then(res => res.json())
      .then((result) => {
        setCustomer(result);
      }
      )
  }, [])
  if (getName() !== "null") {
    console.log(getName());
    const get = JSON.parse(getName());
    if (get.Role === 1) {

      const logout = (e) => {

        setName("null");
        navigate("/adminlogin")
        // alert(getName());
      }


      return (
        <>

          <Navbar bg="light" fixed='top' variant="light" style={{ height: "60px" }}>
            <Container>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4-aO_9Sh5b6Ja6DF-K5b1W3BH41Gozzs6w&usqp=CAU" style={{ height: "30px", width: "30px" }}></img>
              <Navbar.Brand href="#" fw-bold>Cra<span style={{ color: "red" }}>vings</span></Navbar.Brand>

              <Nav className="me-auto">
                <Nav.Link><Link to="/adminpanel" className='Link'>Home</Link></Nav.Link>
                <Nav.Link><Link to="/customerlist" className='Link'>Customer List</Link></Nav.Link>
                <Nav.Link><Link to="/orderlist" className='Link'>Order List</Link></Nav.Link>

                <Button variant="info" onClick={logout} style={{ marginLeft: "38rem" }}>Logout</Button>


              </Nav>
            </Container>
          </Navbar>
          <br />
          <br />
          <br />
          <section>
            <div><center><h1>Customer <span style={{ color: "red" }}>List</span></h1></center></div>

            <div className="card-container">
              <div className="card">
                <div className="scroller"><table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>

                    </tr>
                  </thead>
                  {customers.map(customer => (
                    <tbody key={customer.id}>

                      <tr >
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>

                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>


                      </tr>
                    </tbody>))}
                </table>
                </div>
              </div>
            </div>
          </section>
        </>

      )
    }
    else {
      //alert("You cant view other user's account");
      navigate("/customerpanel");
    }
  }
  else {
    navigate("/adminlogin");
    alert("Login first");
    //<Link to={"/adminlogin"}/>
  }
}
export default Customerlist;