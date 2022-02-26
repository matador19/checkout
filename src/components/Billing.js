import './Billing.css'
import { useState } from "react"
const Billing = ({onBilling}) => {
    const [biller,setbiller]=useState([])
    const [first_Name,setfirst_Name] = useState('')
    const [last_Name, setlast_Name] = useState('')
    const [email,setemail] = useState('')
    const [street_Address,setstreet_Address] = useState('')
    const [country,setcountry] = useState('')
    const [city,setcity] = useState('')
    const [phone,setphone] = useState('')
    const [postal_Address,setpostal_Address]= useState('')

    //const [billing_info, setBillingInfo] ={}

  

    const onSubmit=(e)=>{
        const billing={first_Name,last_Name,email,street_Address,country,city,phone,postal_Address};
        e.preventDefault();
        fetch('http://localhost:8000/billing',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(billing)
        }).then(()=>{
            //console.log('something added')
        })
  
        onBilling()

        setfirst_Name('')
        setlast_Name('')
        setemail('')
        setstreet_Address('')
        setcountry('')
        setcity('')
        setphone('')
        setpostal_Address('')
        

        
    }

    /*const handleChange = (e) =>{
      const key = e.target.name;
      const val =e.target.value;
      let billInfo ={};
      const billingObj =  {[key] : val};
    setBillingInfo({...billing_info,...billingObj})
      
    }*/

  return (
    <div id="Billing" className="col-md-5 order-md-1">
        <h1 style={{fontSize:25}}>Billing Address</h1>
        <form className='add-form' onSubmit={onSubmit}>
        <div className="row">
        <div className = 'col-md-6 mb-2 '>
            <label>First Name</label>
            <input  className="form-control" type='text' placeholder='First Name' value={first_Name} onChange={(e)=>setfirst_Name(e.target.value)}></input>
        </div>
        <div className = 'col-md-6 mb-2 '>
            <label>Last Name</label>
            <input  className="form-control" type='text' placeholder='Last Name'  value={last_Name} onChange={(e)=>setlast_Name(e.target.value)}></input>
        </div>
        </div>
        <div className="mb-2">
            <label >Email</label>
            <input  className="form-control" type='text' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        </div>
        <div className="mb-2">
            <label >Street Address</label>
            <input  type='text' className="form-control" placeholder='Street Address'  value={street_Address} onChange={(e)=>setstreet_Address(e.target.value)}></input>
        </div>
        <div className="mb-2">
            <label >Country</label>
            <input  type='text' className="form-control" placeholder='Country' value={country} onChange={(e)=>setcountry(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label >City</label>
            <input  type='text' placeholder='City' className="form-control"  value={city} onChange={(e)=>setcity(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label>Phone</label>
            <input  type='text' placeholder='Phone' className="form-control"  value={phone} onChange={(e)=>setphone(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label >Postal Address</label>
            <input  type='text' placeholder='Postal Address' className="form-control"  value={postal_Address} onChange={(e)=>setpostal_Address(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <input className="form-control btn btn-block" style={{background:'green'}} type='Submit' value='Submit'></input>
        </div>
        </form>
    </div>
    
  )
}

export default Billing