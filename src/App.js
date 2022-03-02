import { useState } from "react";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Billing from "./components/Billing";
import Cart from "./components/Cart";
import PaymentOption from "./components/PaymentOption";
import Success from "./components/success";
function App() {
 const [phone,setphone]=useState()
  return (
    <Router>
<div className="container">
<Routes>

  <Route path='/' element={
  <div className="row gx-5">
  <Billing ></Billing>
  <Cart></Cart>
  </div>}
  />
  <Route  path='/paymentprovider' element={<PaymentOption phone={setphone}/>}/>
  <Route  path='/status' element={<Success phone={phone}/>}/>
  </Routes>
</div>
    </Router>
  );
}

export default App;
