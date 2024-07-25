import React, { useContext } from 'react'
import CartProduct from '../component/CartProduct'
import { CartContext } from '../Feature/ContextProvider'    
import { totalItem,totalPrice } from '../Feature/CartReducer'
const Cartt = () => {
    const{cart}=useContext(CartContext)
  return (
    
    <div className="container mt-3">
        <div className='="row'>
         <div className="col-8">
            {cart.map(p=>(
                <CartProduct product={p}></CartProduct>
            ))}
        </div>   
        <div className="col-4 p-2"> 
            <div className='bg-black text-white'>
                <h5>Total Items:{totalItem(cart)}</h5>
                <h5>Total Price:₹{totalPrice(cart)}</h5>
                <button className='btn  btn-warning'>Checkout</button>
            </div>

        </div> 
        </div>
    </div>
  )
}

export default Cartt
