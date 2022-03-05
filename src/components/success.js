import {useEffect} from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import './Success.css' 
const Success = () => {
  const [cartings,setcartings]=useState([]);
  var { status } =useParams()
  const [sum,setsum]=useState()
  const { phone }=useParams()
  
  useEffect(()=>{
    fetch('http://localhost:5000/cart').then(res=>{
      return res.json()
    }).then(data=>{
      setcartings(data)
    })
  },[])

useEffect(()=>{
  const fun_sum = cartings.reduce(function(prev,curr){return prev=prev+curr.price},0)
     setsum(fun_sum)
},[cartings])
  return (
  <div className='container align-items-center col-md-5 mt-4' >
        { status=='false' ?  <div id = 'failed' >
          <h3>Status report</h3>
          <img src="/Assets/failed.png" style={{height:75, width:75}}/>
        <h6 style={{textAlign:'center'}} className='mt-5'>Your transaction failed. Please try again</h6>
        </div>:
        <div id='success'>
           <h3>Status report</h3>
          <img src="/Assets/success.png" style={{height:75, width:75}}/>
          <h6>Transaction complete</h6>
          <h6>Your total amount paid: {sum} by { phone }</h6>
        </div>}
        
    </div>
  )
}

export default Success