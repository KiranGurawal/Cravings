import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getName } from '../Loginsession';
import CustomerNav from './CustomerNav';
function ProductCard() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [foodid, setItem] = useState('');
    const [foodprice, setPrice] = useState('');
    const [customerid, setCustomer] = useState('');
    const [foodname, setItemName] = useState('');
    const [cart, setCart] = useState([]);
    // const [pid,setPid] = useState('');
    // const [pname,setpName] = useState('');
    // const [cid,setCid] = useState('');
    // const [price,setpPrice] = useState('');
    useEffect(() => {
        fetch("http://localhost:8080/fooditem/getitems")
            .then(res => res.json()).then((result) => {
                setProducts(result);
                console.log(result);
            })

    }, [])
const get = JSON.parse(getName());
    function getdata(itemid, itemname, itemprice) {
        if (getName()!=="null") {
             
            let customerid =get.mail;
          
            const cartitem = { itemid, itemname, itemprice, customerid }
            console.log(cartitem);
            fetch("http://localhost:8080/cart/addcart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cartitem)

            }).then(() => {
                console.log(cartitem);
                alert("Item added to cart");
                console.log("Item added to cart")
            })
        }
        else {
            //alert(getName());
            alert("Login first");
            navigate("/login");
           
        }
    }


    return (<>

        <br></br>
        <br></br>
        <br></br>
        <center> <div><u><h1>Our<span style={{ color: "red" }}> Menu </span></h1></u></div></center>
        <div>

            <>
                <div className='container mt-3 '>
                    <h2 className='text-center'><span style={{ color: "red" }}>Piz</span>za</h2>
                    <div className='row d-flex justify-content-center align-items-center'>

                        {products.map(product => (
                            product.category=="Pizza"?
                            <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style, Imghover">
                                <Card.Img variant="top" src={'img/' + product.itemid + '.jpg'} key={product.itemid} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title >{product.itemname} </Card.Title>
                                    <Card.Text>
                                    ₹ {product.itemprice}
                                    </Card.Text>

                                    <Button variant="danger" onClick={() => getdata(product.itemid, product.itemname, product.itemprice)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>:<></>
                        )
                        )}
                    </div>
                </div>

                <div className='container mt-3 '>
                    <h2 className='text-center'><span style={{ color: "red" }}>Bur</span>ger</h2>
                    <div className='row d-flex justify-content-center align-items-center'>

                        {products.map(product => (
                             product.category=="Burger"?
                            <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style,  Imghover">
                                <Card.Img variant="top" src={'img/' + product.itemid + '.jpg'} key={product.itemid} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title >{product.itemname} </Card.Title>
                                    <Card.Text>
                                    ₹ {product.itemprice}
                                    </Card.Text>

                                    <Button variant="danger" onClick={() => getdata(product.itemid, product.itemname, product.itemprice)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>:<></>
                        )
                        )}
                    </div>
                </div>

                <div className='container mt-3 '>
                    <h2 className='text-center'><span style={{ color: "red" }}>Manchu</span>rian</h2>
                    <div className='row d-flex justify-content-center align-items-center'>

                        {products.map(product => (
                             product.category=="Manchurian"?
                            <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style,  Imghover">
                                <Card.Img variant="top" src={'img/' + product.itemid + '.jpg'} key={product.itemid} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title >{product.itemname} </Card.Title>
                                    <Card.Text>
                                    ₹ {product.itemprice}
                                    </Card.Text>

                                    <Button variant="danger" onClick={() => getdata(product.itemid, product.itemname, product.itemprice)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>:<></>
                        )
                        )}
                    </div>
                </div>

                <div className='container mt-3 '>
                    <h2 className='text-center'><span style={{ color: "red" }}>Ro</span>ll</h2>
                    <div className='row d-flex justify-content-center align-items-center'>

                        {products.map(product => (
                             product.category=="Roll"?
                            <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style,  Imghover">
                                <Card.Img variant="top" src={'img/' + product.itemid + '.jpg'} key={product.itemid} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title >{product.itemname} </Card.Title>
                                    <Card.Text>
                                    ₹ {product.itemprice}
                                    </Card.Text>

                                    <Button variant="danger" onClick={() => getdata(product.itemid, product.itemname, product.itemprice)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>:<></>
                        )
                        )}
                    </div>
                </div>


            </>
        </div>
        <br></br>
        <br></br>
    </>
    );
}
export default ProductCard; 
