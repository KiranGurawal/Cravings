import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { setName, getName } from '../Loginsession';
import { useNavigate } from 'react-router-dom';
import CustomerNav from './CustomerNav';
import Footer from './Footer';
import { DeliveryDiningRounded } from '@mui/icons-material';

function Customerorder() {

  const navigate = useNavigate();
  const [totalorders, setOrder] = useState([]);

  useEffect(() => {
    const get = JSON.parse(getName());
    let id = get.mail;
    //alert(id);
    let api = "http://localhost:8080/order/getorderbyid/" + id;
    fetch(api, {
      method: "GET",

    }).then(res => res.json()).then((result) => {
      setOrder(result);
      // alert("Hello"+result);
    }
    )
  }, []);
  const delivered = (orderid, st) => {
    //alert("Orderid" + orderid);
    let status = " ";
    if (st === "Pending") {
      alert("Order is not accepted yet");
      status = "Pending"
    }
    else if (st === "Declined") {
      alert("Order is already declined");
      status = "Pending";
    }
    else {
      status = "Delivered";
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
  if (getName() !== "null") {
    // alert("Hello"+getName());
    const get = JSON.parse(getName());
    if (get.Role === 2) {
      return (
        <>
          <br />
          <br />
          <br />
          <br />

          <section>
            <CustomerNav />
            <div><center><h1>Your <span style={{ color: "red" }}>Orders</span></h1></center></div>

            <div className="card-container">
              <div className="card">
                <div className="scroller">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"> Order Id</th>

                        <th scope="col">Item Name</th>

                        <th scope="col">Total Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Update Status</th>
                      </tr>
                    </thead>
                    {totalorders.slice(0).reverse().map(orders => (
                      <tbody key={orders.orderid}>

                        <tr >
                          <td>{orders.orderid}</td>

                          <td>{orders.itemname}</td>


                          <td>{orders.totalprice}</td>
                          <td>{orders.status}</td>
                          <td><button className='btn btn-success' style={{ textAlign: "center" }} onClick={() => delivered(orders.orderid, orders.status)}>Delivered</button></td>

                          {/* onClick={() => accept(orders.orderid)}> */}
                        </tr>
                      </tbody>))}
                    <tbody>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Footer />
          </section>
        </>
      )

    }
    else {
      // alert("You can't view other user's account");
      navigate("/adminpanel");
    }
  }
  else {
    alert("Login first");
    navigate("/login");
  }
}
export default Customerorder;