import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { table } from 'react-bootstrap';
import { getName } from '../Loginsession';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Container, Paper, paperStyle } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { width } from '@mui/system';
import { Link } from 'react-router-dom';
import CustomerNav from './CustomerNav';
import Footer from './Footer';

function CardDetail() {
    const [cartitems, setcartitems] = useState([]);

 let get = JSON.parse(getName());
    const navigate = useNavigate();
useEffect(()=>{
    let id = get.mail;
   // alert(id);
    let api = "http://localhost:8080/cart/getcartitems/" + id;
    fetch(api, {
        method: "GET"
    }).then(res => res.json()).then((result) => {
        setcartitems(result);

    });
},[])
    // useEffect(() => {
    //     if (getName()!=="null") {
    //         if(get.Role===2)
    //         {
    //             // alert(get.Role);
    //             // alert(get.mail);
               
    //         }
    //         else{
    //             alert("You cant view this page");
    //         }
            
    //         // localStorage.setItem("quant",cartitems.length)
    //     }
    //     else {alert("Login first");
    //         navigate("/login");
           
    //     }
    // });

    const quant = cartitems.length;
    //alert(quant);
    localStorage.setItem("quant",quant);
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
    
    if(quant===0)
    {
        alert ("You can't checkout your cart is empty");
    }
    else{
        navigate("/payment")
    }
    }


    const deleteitem = (imgid) => {
        //alert("Delete")
        let id = imgid

        let api = "http://localhost:8080/cart/deleteitems/" + id;
        fetch(api, {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(id)
        }).then(res => res.text()).then((result) => {
           alert(result);
           window.location.reload(false);
        })
    }
    if(getName()!=="null")
    {
        if(get.Role===2)
        {
            return (
        
                <>
                <CustomerNav />
                    <div className='container mt-2 text'>
                        <div className='container mt-3 '>
                        <u><h2 className='text-center'>My<span style={{ color: "red" }}> Cart</span></h2></u>
                            <div className="card-container">
                                <div className="card">
        
                                    <table>
                                        <thead border={"1px"}>
                                            <tr>
                                                <th scope="col" style={{ height: "5vh", width: "20vh" }}>Item Image</th>
                                                <th scope="col" style={{ height: "5vh", width: "30vh" }}>Item Name</th>
                                                <th scope="col" style={{ height: "5vh", width: "30vh" }}>Price</th>
                                                <th scope="col" style={{ height: "5vh", width: "30vh" }}>Remove Item</th>
        
        
                                            </tr>
                                        </thead>
                                        {cartitems.map(items => (
                                            <tbody key={items.imgid}>
        
                                                <tr >
                                                    <td ><img src={'/img/' + items.itemid + '.jpg'} className="imgt" /></td>
                                                    <td name="itemname">{items.itemname}</td>
        
                                                    <td name="itemprice">{items.itemprice} </td>
                                                    <td><button className='btn btn-danger' onClick={() => deleteitem(items.imgid)}>Remove</button></td>
        
        
        
                                                </tr>
                                            </tbody>))}
                                    </table>
        
                                </div>
                                
                            </div>
                           <h5>Total Price : ₹ {totalbill}</h5>
                                <br></br>
                                <button className='btn btn-success' onClick={saveorder}>Checkout</button>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
                    <Footer />
                </>
            )
        }
        else{
            //alert("You can't view this page");
            navigate("/adminpanel");
        }
    }
    else{
        alert("login first");
        navigate("/login");
    }

   
}
export default CardDetail;
