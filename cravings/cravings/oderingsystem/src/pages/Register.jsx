import React, { useState } from 'react'
import Header from '../views/Header'
import Footer from '../views/Footer'
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [customers, setCustomer] = useState([])
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        
        const customer = { email, name, password, phone, address }
        const getotp = { otp }
        let api = "http://localhost:8080/customer/validateOtp/" + otp;
        fetch(api, {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(getotp)
        }).then(res => res.text())
            .then((result) => {
                // alert(result);
                if (result === "You can Login") {
                    //console.log(customer)
                    fetch("http://localhost:8080/customer/add", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(customer)

                    }).then(res => res.text()).then((result) => {
                        // alert(customer);
                        if(result==="User already exists")
                        {
                            alert("This email already exists try with another email.");
                            navigate("/register");
                        }
                        else{
                            alert("Account Created");
                        navigate("/login");
                        }

                    })
                }
                else {
                    alert("Otp is wrong");

                }
            })

    }
    /*Name Validation*/
  
    let emailPattern = /[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}/;
    let mobilePattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    // let usernamePattern = /^[A-Za-z]+([\ A-Za-z]+)*/;
    const getOtp = (e) => {
        const sendotp = { otp }
        e.preventDefault()
        if(name===""||address===""||email===""||phone===""||password===""){
            alert("All fields are required");
        }
        else if(!emailPattern.test(email)){
            alert("Enter valid email");
        }
        else if(!mobilePattern.test(phone)){
            alert("Enter a valid phone number");
        }
        else if(!passwordPattern.test(password)){
            alert("Password should be 8-20 in length and Start with [A-Z/a-z]should contain[a-z]and[special characters]");
        }
        // else if(!usernamePattern.test(name))
        // {
        //     alert("Enter a valid name");
        // }
        else{
        let api = "http://localhost:8080/customer/getOtp/" + email;
        fetch(api, {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(sendotp)

        }).then(() => {
            //alert(sendotp)
            alert("Email sent, please check you email for otpl")
        })
    }
    }

    return (
        <>
            <Header />
            <div className='reg-img'>
                <Container>
                    <Row>
                        <Col sm={3}>

                        </Col>
                        <Col sm={6}>
                            <section>

                                <div className="register">
                                    <div className="cors">
                                        <center> <h1>Reg<span style={{ color: "red" }}>ister</span></h1></center>

                                        <form id='form' className='form'>
                                            <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required/>
                                            {/* <span style={{
                                            color: "red"
                                        }} >{usernameError}</span> */}

                                            <input type="password" placeholder='Password'minlength="8" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                            {/* <span style={{
                                            color: "red"
                                        }} >{passwordError}</span> */}

                                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                            {/* <span style={{
                                            color: "red"
                                        }} >{emailError}</span> */}
                                            <input type="tel" maxLength={13} placeholder="Mobile number" minlength="10" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                            {/* <span style={{color:"red"}}>{mobileError}</span> */}

                                            <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                                            <input type="number" placeholder='Check your mail for otp' value={otp} onChange={(e) => setOtp(e.target.value)}required></input>
                                            <button className='btn btn-primary' onClick={getOtp}>Get Otp</button>
                                            <button className='btn btn-primary' onClick={handleClick}>Validate & Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </section>

                        </Col>
                        <Col sm={3}></Col>
                    </Row>

                </Container>
            </div>


            <Footer />
        </>
    )
}
export default Register;