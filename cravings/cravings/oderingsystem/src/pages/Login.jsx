import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from '../views/Header';
import Footer from '../views/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { setName, getName } from '../Loginsession';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (event) => {
    //alert("check");
    event.preventDefault();
    const customer = { email, password }
    console.log(customer);
    fetch("http://localhost:8080/customer/id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    }).then(res => res.text()).then((result) => {
      //alert(result);
      if (result === "You can login") {
        console.log("Hello");
        const data = {Role:2,mail:email}
        setName(JSON.stringify(data));
        navigate("/customerpanel");//just for checking the working
      }
      else {
        alert(result);
        setName("null");
      }

    })
  };
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={6}>
            <section>

              <div className="register">
                <div className="cors">
                  <center><h1>Log<span style={{ color: "red" }}>In</span></h1></center>

                  <form id='form' className='form'>
                    <input type="text" placeholder='Username' value={email}
                      onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(event) => {
                      setPassword(event.target.value)
                    }} />
                    <button className='btn btn-primary' onClick={handleClick}>Sign in</button>
                  </form>
                  <div className="footer">
                    <h4>Don't have an Account?</h4><Link to='/register'>Register Now</Link>
                  </div>
                </div>

              </div>
            </section>


          </Col>
          <Col sm={6}><img src="login.png" className='aboutimg'></img></Col>
        </Row>

      </Container>





      <Footer />
    </>
  )
}
export default Login;