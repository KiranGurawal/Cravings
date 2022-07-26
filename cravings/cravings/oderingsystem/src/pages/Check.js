import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Check() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8080/fooditem/getitems")
    //         .then(res => res.json()).then((result) => {
    //             setProducts(result);
    //             console.log(result);
    //         })
    // }, [])

    return (<>
        <br></br>
        <br></br>
        <br></br>
        <center> <div><u><h1>Our<span style={{ color: "red" }}> Menu </span></h1></u></div></center>
        <div>

            <>
               
                

                
                    <Card style={{ width: '14rem', border: "none" }} className="mx-2 mt-4 card_style">
                        <Card.Img variant="top" src="img/icecream/Strawberry.jpg" style={{ height: "16rem" }} className="mt-3" />
                        <Card.Body>
                            <Card.Title>Strawberry</Card.Title>
                            <Card.Text>
                                price..
                            </Card.Text>
                            <Button variant="danger"><Link to="/login" className='Link'>Add To Cart</Link></Button>
                        </Card.Body>
                    </Card>
                
            </>
      
</div>

        <br></br>
        <br></br>
    </>

    );
}
export default Check; 
