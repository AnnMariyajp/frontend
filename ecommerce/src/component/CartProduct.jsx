import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Feature/ContextProvider'
const CartProduct = ({product}) => {
    const{cart,dispatch}=useContext(CartContext)
    const Increase=(id)=>{
        const IndexI=cart.findIndex(p=>p.id===id)
        if(cart[IndexI].quantity<10){dispatch({type:"Increase",id:product.id})
        }
      console.log(cart[IndexI].quantity)
    }
    const Decrease=(id)=>{
        const IndexD=cart.findIndex(p=>p.id===id)
        if(cart[IndexD].quantity>1){dispatch({type:"Decrease",id:product.id})
        }
    }
        
  return (
    <div className='d-flex border mt-3'>
      <img src={product.thumbnail}alt="pro"/>
      <div className="detail ms-4">
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <div className="buttons">
        <button className="rounded-circle px-2" onClick={(id)=>Decrease(product.id)}>-</button>
        <button className='rounded'>{product.quantity}</button>
        <button className="rounded-circle px-2" onClick={(id)=>Increase(product.id)}>+</button>
    </div>
    <button className='btn btn-sm btn-warning'onClick={()=>dispatch({type:"Remove",id:product.id})}>Remove</button>
    </div>
    </div>
  )
}

export default CartProduct
