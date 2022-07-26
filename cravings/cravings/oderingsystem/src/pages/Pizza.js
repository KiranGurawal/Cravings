import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Pizza() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/fooditem/getitems")
            .then(res => res.json()).then((result) => {
                setProducts(result);
                console.log(result);
                // if(result.category==="Pizza"){
                //     console.log(result.category);
                // }
                console.log(result.category);
            })
    }, [])

    return (<>
        <br></br>
        <br></br>
        <br></br>
        <center> <div><u><h1>Our<span style={{ color: "red" }}> Menu </span></h1></u></div></center>
       
            <>
                <div className='container mt-3 '>
                    <h2 className='text-center'><span style={{ color: "red" }}>Piz</span>za</h2>
                    <div className='row d-flex justify-content-center align-items-center'> {products.map(product => (
                        <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style">
                            <Card.Img variant="top" src={'img/pizza/' + product.itemid + '.jpg'} style={{ height: "16rem" }} className="mt-3" />
                            <Card.Body>
                                <Card.Title>{product.itemid}</Card.Title>
                                <Card.Text>
                                    price..
                                </Card.Text>
                                <Button variant="danger"><Link to="/login" className='Link'>Add To Cart</Link></Button>
                            </Card.Body>
                        </Card>
                         )
                         )}
                    </div> 
                     
                </div>
            </>
     


        <br></br>
        <br></br>
    </>

    );
}
export default Pizza; 
