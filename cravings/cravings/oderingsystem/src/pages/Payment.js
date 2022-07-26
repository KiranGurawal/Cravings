import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { table } from 'react-bootstrap';
import { getName } from '../Loginsession';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Container, Paper, paperStyle } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import CustomerNav from '../views/CustomerNav';
import Footer from '../views/Footer';

function Payment() {
    const [cartitems, setcartitems] = useState([]);
    const [address, setAddress] = useState('');
    const [transactionid, setTransactionId] = useState('');
    let t = 0;
    const navigate = useNavigate();

    useEffect(() => {
        const get = JSON.parse(getName());

        let id = get.mail;
        // alert(id);
        let api = "http://localhost:8080/cart/getcartitems/" + id;
        fetch(api, {
            method: "GET"
        }).then(res => res.json()).then((result) => {
            setcartitems(result);

        });
    });
    if (getName() !== "null") {
        const get = JSON.parse(getName());
        if (get.Role === 2) {

            const quant = cartitems.length;
            var totalbill = 0;
            cartitems.map(total);
            function total(cart) {
                totalbill = totalbill + cart.itemprice;
            }

            var allproducts = " ";
            cartitems.map(itemName);
            function itemName(cart) {
                if (allproducts == " ") {
                    allproducts = allproducts + cart.itemname;
                }
                else {
                    allproducts = allproducts + "," + cart.itemname;
                }

            }
            const totalprice = totalbill;
            const saveorder = () => {
                // alert(totalbill)
                // alert(address);
                const customerid = get.mail;
                // const address = "Indore";
                const status = "Pending";
                const itemname = allproducts;
                let api = "http://localhost:8080/order/saveorder";
                const placeorder = { customerid, itemname, totalprice, address, status, transactionid };
                //  alert(placeorder);
                console.log(placeorder);

                fetch(api, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(placeorder)
                }).then(() => {
                    console.log(placeorder);
                    //alert(placeorder);
                })
                //alert("Payment Done");
                navigate("/customerpanel");
                alert("Order placed");
                emptycart();
            }
            const emptycart = () => {
                const customerid = get.mail;
                let api = "http://localhost:8080/cart/emptycart/" + customerid;
                fetch(api, {
                    method: "GET",
                    // headers: { "Content-Type": "application/json" },
                    // body: JSON.stringify(id)
                }).then(res => res.text()).then((result) => {
                    // alert(result);
                })
            }
            return (
                <>
                    <CustomerNav />
                    <header>
                        <div className="payment-container">
                            <div className="left">
                                <h3>BILLING <span style={{ color: "black" }}>ADDRESS</span></h3>
                                <form>

                                    Address :
                                    <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                    Transaction ID :
                                    <input type="text" placeholder="Enter Transactionid" value={transactionid} onChange={(e) => setTransactionId(e.target.value)} required />
                                </form>
                            </div>
                            <div className="right">
                                <h3>PAY<span style={{ color: "black" }}>MENT</span></h3>
                                <form>
                                    <div>
                                        <img src="img/scan1.png" className='scanimg'></img>
                                    </div>
                                    <input type="checkbox" /> Payment Done.!
                                    {/* <input type="submit" value="Proceed to Checkout" onSubmit={saveorder}/> */}
                                    <button className='btn btn-primary' onClick={saveorder}>Checkout</button>
                                </form>
                            </div>
                        </div >
                    </header >
                    <Footer />
                </>
            )
        }
        else {
            // alert("You cannot view other user's account");
            navigate("/adminpanel");
        }
    }
    else {

        alert("Login first");
        navigate("/login");



    }
}
export default Payment;