import Totals from "./Totals"
import './Cart.css'
const Cart = () => {
  return (
    <div id="Cart" className="col-md-4 order-md-2">
        <div className="row gy-5">
        <h4 className="d-flex justify-content-between align-items-center mb-2">Your cart items</h4>
        <ul>
            <div>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6>Item 1</h6>
                    <small className="text-muted">Description</small>
                </div>
                <span>$10</span>
            </li>
            </div>
            <div>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6>Item 2</h6>
                    <small className="text-muted">Description</small>
                </div>
                <span>$10</span>
            </li>
            </div>
            <div>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                 <div>
                    <h6>Item 3</h6>
                    <small className="text-muted">Description</small>
                </div>
                <span>$10</span>
            </li>
            </div>
        </ul>
        <Totals></Totals>
        </div>

    </div>
  )
}

export default Cart