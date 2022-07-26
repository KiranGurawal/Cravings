import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getName } from '../Loginsession'
import CustomerNav from '../views/CustomerNav'
import ProductCard from '../views/ProductCard'

export default function CustomerPanel() {
  const navigate = useNavigate();
  if (getName() !== "null") {
    const get = JSON.parse(getName());
   // console.log(get.mail);
    if (get.Role === 2) {
      return (
        <>
          <CustomerNav />
          <ProductCard />
        </>
      )
    }
    else {
      alert("You cant view other user's account");
      navigate("/adminpanel");
    }

  }
  else {
    alert("login first");
    navigate("/login");

  }
}
