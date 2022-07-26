import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../views/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { setName, getName, removeName } from '../Loginsession';
import { useNavigate } from "react-router-dom"


function AdminPanel() {
  const navigate = useNavigate();

  // useEffect(() => {

  // });
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/fooditem/getitems")
      .then(res => res.json())
      .then((result) => {
        setItems(result);
      }
      )
  }, [])
  if (getName() !== "null") {
    const get = JSON.parse(getName());
    if (get.Role === 1) {
      // const logout = (e) => {

      //   setName("");
      //   navigate("/adminlogin")
      //   //alert(getName());
      // }


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
                <Button variant="info" onClick={() => { setName("null"); navigate("/"); }} style={{ marginLeft: "38rem" }}>Logout</Button>


              </Nav>
            </Container>
          </Navbar>

          <br />
          <br />
          <br />
          <div>
            <section>
              <br></br>
              <div><center><h1>All<span style={{ color: "red" }}> Items</span></h1></center></div>

              <div className="card-container">
                <div className="card">
                  <div className="scroller">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Item Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Description</th>

                        </tr>
                      </thead>
                      {items.map(item => (
                        <tbody key={item.itemid}>

                          <tr >
                            <td>{item.itemid}</td>
                            <td>{item.itemname}</td>

                            <td>{item.itemprice}</td>
                            <td>{item.description}</td>


                          </tr>
                        </tbody>))}
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </>
      )
    }
    else {
      //alert("You can't view other user's accounts");
      navigate("/customerpanel");
    }

  }
  else {
    navigate("/adminlogin");
    alert("Login first");
    //<Link to={"/adminlogin"} />

  }
}
export default AdminPanel;