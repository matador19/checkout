import { useEffect, useState } from "react"
const Totals = ({cartprice}) => {
    const [Subtotal,setSubtotal] = useState(0)
    const [Discount,setDiscount] = useState(10)
    const [Shipping,setShipping] = useState(0)
    const [Tax,setTax]=useState(10)

   useEffect(()=>{
       const sum = cartprice.reduce(function(prev,curr){return prev=prev+curr.price},0)
       setSubtotal(sum)
   },[cartprice])
  return (
    <div>
        <ul>
        <li className="list-group-item d-flex justify-content-between">
            <h6>Sub total</h6>
            <span>{Subtotal}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between ">
            <h6>Discount</h6>
            <span >{Discount}</span>      
        </li>
        <li className="list-group-item d-flex justify-content-between ">
            <h6>Shipping</h6>
            <span >{Shipping}</span> 
        </li>
        <li className="list-group-item d-flex justify-content-between ">
            <h6>Tax</h6>
            <span >{Tax}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between ">
            <h4>GrandTotal</h4>    
            <span>{Subtotal-Discount+Shipping+Tax}</span>       
        </li>
        </ul>
    </div>
  )
}

export default Totals