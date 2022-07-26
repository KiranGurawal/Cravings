import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../views/Header';
import Footer from '../views/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { textAlign } from '@mui/system';
import { useState } from 'react';
import { setName, getName } from '../Loginsession';
import { useNavigate } from "react-router-dom"

function AdminLogin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleClick = (event) => {
        // alert("check");
        event.preventDefault()
        const admin = { email, password }
        console.log(admin);
        fetch("http://localhost:8080/admin/username", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(admin)

        })
            .then(res => res.text())
            .then((result) => {
                // alert(result);
                if (result === "You can login") {
                    console.log("Hello")
                    const data = {Role:1,mail:email}
                    setName(JSON.stringify(data));
                    navigate("/adminpanel")
                }
                else {
                    alert(result);

                    setName("null");
                }


                //alert(getName("mydata"));



            });

    };
    return (
        <>
            <Header />
            <div className="bg_login">
                <Container>
                    <Row>
                        <Col sm={3}>

                        </Col>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <section>

                                <div className="register">
                                    <div className="cors">
                                        <center><h1>Admin<span style={{ color: "red" }}>Login</span></h1>
                                            <img src="img/admin1.jpg" alt="" style={{ height: "100px", width: "100px" }}></img></center>
                                        <form id='form' className='form'>
                                            <input type="text" placeholder='Username' value={email}
                                                onChange={(event) => setEmail(event.target.value)} />
                                            <input type="password" placeholder='Password' value={password} onChange={(event) => {
                                                setPassword(event.target.value)
                                            }} />
                                            <button className='btn btn-primary' onClick={handleClick}>Sign in</button>
                                        </form>
                                    </div>

                                </div>
                            </section>

                        </Col>

                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    )
}
export default AdminLogin;