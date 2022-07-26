import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { setName, getName } from '../Loginsession';
import { useNavigate } from 'react-router-dom';
function Orderlist() {
  const navigate = useNavigate();
  const [totalorders, setOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/order/getallorder")
      .then(res => res.json())
      .then((result) => {
        setOrder(result);
      }
      )
  }, []);
  const accept = (orderid, st) => {
    // console.log(orderid);
    // console.log(totalorders);
    // console.log(st);
    let status = "";
    if (st === "Declined") {
      alert("Order is already declined");
      status = "Declined";
    }
    else if (st === "Accepted") {
      alert("Order is already accepted");
      status = "Accepted";
    }
    else if(st==="Delivered")
    {
      alert("Already delivered");
      status="Delivered";
    }
    else {
      status = "Accepted";
    }
    const update = [orderid, status];
   // alert("Hello" + update);
    fetch("http://localhost:8080/order/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    }).then(res => res.text()).then((result) => {
      console.log(result);
      //alert(result);
    })
window.location.reload(false);

  }
  const decline = (orderid, st) => {
    // console.log(orderid);
    // console.log(totalorders);
    // console.log(st);
    let status = "";
    if (st === "Accepted") {
      alert("Order already accepted");
      status = "Accepted";
    }
    else if (st === "Declined") {
      alert("Order is already declined");
      status = "Declined";
    }
    else if(st==="Delivered")
    {
      alert("Order is already delivered");
      status = "Delivered";
    }
    else {
      status = "Declined";
    }
    const update = [orderid, status];
    //alert("Hello"+update);
    fetch("http://localhost:8080/order/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    }).then(res => res.text()).then((result) => {
      console.log(result);
      //alert(result);
    })

    window.location.reload(false);
  }
  const logout = (e) => {

    setName("null");
    navigate("/adminlogin")
    // alert(getName());
  }
  if (getName()!=="null") {
    const get = JSON.parse(getName());
    if(get.Role===1){
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
                <Button variant="info" onClick={logout} style={{marginLeft:"38rem"}}>Logout</Button>
                {/* onClick={logout}>Logout */}
  
  
              </Nav>
            </Container>
          </Navbar><br />
          <br />
          <br />
          <section>
            <div><center><h1>Order <span style={{ color: "red" }}>List</span></h1></center></div>
  
            <div className="card-container">
              <div className="card">
                
                <div className="scroller"><table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> Order Id</th>
                      <th scope="col">Customer Id</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Transaction Id</th>
                      <th scope="col">Status</th>
                      <th scope="col">Update Status</th>
                    </tr>
                  </thead>
                  {totalorders.slice(0).reverse().map(orders => (
                    <tbody key={orders.orderid}>
  
                      <tr >
                        <td>{orders.orderid}</td>
                        <td>{orders.customerid}</td>
                        <td>{orders.itemname}</td>
  
                        <td>{orders.address}</td>
                        <td>{orders.totalprice}</td>
                        <td>{orders.transactionid}</td>
                        <td>{orders.status}</td>
                        <td><button className='btn btn-success' onClick={() => accept(orders.orderid, orders.status)}>Accept</button><button className='btn btn-danger' onClick={() => { decline(orders.orderid, orders.status) }}>Decline</button></td>
  
  
                      </tr>
                    </tbody>))}
                  <tbody>
  
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </section>
        </>
  
      )
    }
    else{
      //alert("You cannot view other user's account")
      navigate("/customerpanel");
    }
    
  }
  else {
    alert("Login first");
    navigate("/adminlogin");
  }


}
export default Orderlist;
