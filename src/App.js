import { useState } from "react";
import {BrowserRouter as Router , Routes, Route, Navigate} from "react-router-dom"
import Billing from "./components/Billing";
import Cart from "./components/Cart";
import PaymentOption from "./components/PaymentOption";
function App() {
  const [showBilling,setshowBilling]=useState(true)
  const onBilling=()=>{
    setshowBilling(!showBilling)
    console.log(showBilling)
    window.location.href ='/paymentprovider'
  }
  return (
    <Router>
<div className="container">
<Routes>

  <Route path='/' element={
  <div className="row gx-5">
  <Billing onBilling={onBilling}></Billing>
  <Cart></Cart>
  </div>}
  />
  <Route path='/paymentprovider' element={<PaymentOption/>}/>
  </Routes>
</div>
    </Router>
  );
}

export default App;
