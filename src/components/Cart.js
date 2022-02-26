import Totals from "./Totals"
import './Cart.css'
import { useEffect, useState } from "react"
const Cart = () => {
    const[carts,setcarts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/cart').then(res=>{
          return res.json()
        }).then(data=>{
          console.log(data)
          setcarts(data)
        })
      },[])
  return (
    <div id="Cart" className="col-md-4 order-md-2">
        <div className="row gy-5">
        <h4 className="d-flex justify-content-between align-items-center mb-2">Your cart items</h4>
        <ul>
        {carts.map((cart)=>(<div key={cart.id}>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6>{cart.item}</h6>
                    <small className="text-muted">{cart.desc}</small>
                </div>
                <span>{cart.price}</span>
            </li>
            </div>))}
        </ul>
       <Totals cartprice={carts}></Totals>
        </div>

    </div>
  )
}

export default Cart