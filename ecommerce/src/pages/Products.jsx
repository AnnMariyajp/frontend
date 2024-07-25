
import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../Feature/ContextProvider'
const Products= ({product}) => {

  const{dispatch}=useContext(CartContext)
  return (
    <div className="col">
    <div class="card h-60 ">
      <img src={product.thumbnail}class="card-img-top h-30" />
    
      <div class="card-body"> 
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">Price:₹{product.price}</p>
        <button class="btn btn-primary bg-black" 
        onClick={()=>dispatch({type:"Add",product:product})}>
        Add to Cart</button>
        </div>
      </div>
    </div>

      
        

    
  )
}

export default Products