import {useEffect} from 'react'
import {useState} from 'react'
import './Success.css' 
const Success = ({phone}) => {
  const [cartings,setcartings]=useState([]);
  const [status,setstatus]=useState(true);
  const [sum,setsum]=useState()

  
  useEffect(()=>{
    fetch('http://localhost:8000/cart').then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      setcartings(data)
    })
  },[])

useEffect(()=>{
  const fun_sum = cartings.reduce(function(prev,curr){return prev=prev+curr.price},0)
  console.log(sum)
     setsum(fun_sum)
},[cartings])

  return (
  <div className='container align-items-center col-md-5 mt-4' >
        { status ?  <div id = 'failed' >
          <h3>Status report</h3>
          <img src="/Assets/failed.png" style={{height:75, width:75}}/>
        <h6 style={{textAlign:'center'}} className='mt-5'>Your transaction failed. Please try again</h6>
        </div>:
        <div id='success'>
           <h3>Status report</h3>
          <img src="/Assets/success.png" style={{height:75, width:75}}/>
          <h6>Transaction complete</h6>
          <h6>Your total amount paid: {sum} by {phone}</h6>
        </div>}
        
    </div>
  )
}

export default Success