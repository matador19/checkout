import './Billing.css'
import { useState } from "react"
const Billing = ({onBilling}) => {

    const [first_Name,setfirst_Name] = useState('')
    const [last_Name, setlast_Name] = useState('')
    const [email,setemail] = useState('')
    const [street_Address,setstreet_Address] = useState('')
    const [country,setcountry] = useState('')
    const [city,setcity] = useState('')
    const [phone,setphone] = useState('')
    const [postal_Address,setpostal_Address]= useState('')

  

    const onSubmit=(e)=>{
        e.preventDefault();

        
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

  return (
    
    <div id="Billing" className="col-md-5 order-md-1">
        <h1 style={{fontSize:25}}>Billing Address</h1>
        <form className='add-form' onSubmit={onSubmit}>
        <div className="row">
        <div className = 'col-md-6 mb-2 '>
            <label>First Name</label>
            <input className="form-control" type='text' placeholder='First Name' value={first_Name} onChange={(e)=>setfirst_Name(e.target.value)}></input>
        </div>
        <div className = 'col-md-6 mb-2 '>
            <label>Last Name</label>
            <input className="form-control" type='text' placeholder='Last Name'  value={last_Name} onChange={(e)=>setlast_Name(e.target.value)}></input>
        </div>
        </div>
        <div className="mb-2">
            <label >Email</label>
            <input className="form-control" type='text' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        </div>
        <div className="mb-2">
            <label >Street Address</label>
            <input type='text' className="form-control" placeholder='Street Address'  value={street_Address} onChange={(e)=>setstreet_Address(e.target.value)}></input>
        </div>
        <div className="mb-2">
            <label >Country</label>
            <input type='text' className="form-control" placeholder='Country' value={country} onChange={(e)=>setcountry(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label >City</label>
            <input type='text' placeholder='City' className="form-control"  value={city} onChange={(e)=>setcity(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label>Phone</label>
            <input type='text' placeholder='Phone' className="form-control"  value={phone} onChange={(e)=>setphone(e.target.value)}></input>
        </div>
        <div className = 'mb-2'>
            <label >Postal Address</label>
            <input type='text' placeholder='Postal Address' className="form-control"  value={postal_Address} onChange={(e)=>setpostal_Address(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <input className="form-control btn btn-block" style={{background:'green'}} type='Submit' value='Submit'></input>
        </div>
        </form>
    </div>
    
  )
}

export default Billing