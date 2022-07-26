import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { table } from 'react-bootstrap';
import { getName } from '../Loginsession';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Container, Paper, paperStyle } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { CreditScoreOutlined } from '@mui/icons-material';

function CardDetail() {
    const [cartitems, setcartitems] = useState([]);
    let t = 0;
    const navigate = useNavigate();
    useEffect(() => {
        if (!getName()) {
            alert("Login first");
            navigate("/login");
        }
        else {
            let id = getName();
            let api = "http://localhost:8080/cart/getcartitems/" + id;
            fetch(api, {
                method: "GET",
                // headers: { "Content-Type": "application/json" },
                // body: JSON.stringify(cartitems)
            }).then(res => res.json()).then((result) => {
                setcartitems(result);

                console.log(result);

            });
            // window.location.reload(false);

        }
    }, []);

    const quant = cartitems.length;
    var totalprice = 0;
    cartitems.map(total);
    function total(cart) {
        totalprice = totalprice + cart.itemprice;
    }

    return (
        <></>
    )
}
export default CardDetail;
