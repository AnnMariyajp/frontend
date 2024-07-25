// import React from 'react'
// import { Button, Card } from 'react-bootstrap'

// const Cart= ({product}) => {
//   return (
//     <div>
//       <h1 className='text-center mt-3'>All Items</h1>
//       <img src={product.thumbnail}class="card-img-top" alt="..."/>
//     <div class="card">
//       <div class="card-body"> 
//         <h5 class="card-title">{product.title}</h5>
//         <p class="card-text">{product.description}</p>
//         <button class="btn btn-primary">Add to Cart</a>
//         </div>
      
//     </div>

      
        

//     </div>
//   )
// }

// export default Cart
import React, { useState } from 'react'
import Data from '/Data.json'
import Products from '/src/pages/Products'
const Cart = () => {
  
  const [products,setProducts]=useState(Data.products)
  return (
  
    <div className="container mt-5">
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
        products.map(p=>(
            <Products product ={p}/>
        ))
 }
    </div>
    </div>
  )
}

export default Cart