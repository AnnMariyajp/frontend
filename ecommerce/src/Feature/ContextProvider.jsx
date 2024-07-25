 import React, { createContext,useEffect,useReducer } from 'react'
 import CartReducer from '/src/Feature/CartReducer'
 import axios from 'axios'


const initialState = [];
 export const CartContext=createContext(initialState)
 
 const ContextProvider = ({children}) => {
    const[cart,dispatch]=useReducer(CartReducer,initialState)
    useEffect(() => {
      axios.get('http://localhost:3040/cartt')
          .then(response => {
              dispatch({ type: 'SetCart', cartt: response.data });
          });
  }, []);

  const addToCart = async (product) => {
      const response = await axios.post('http://localhost:3040/cartt', product);
      dispatch({ type: 'Add', product: response.data });
  };
   return (
     <div>
       <CartContext.Provider value={{cart,dispatch,addToCart}}>
       {children}
         </CartContext.Provider>
     </div>
   )
 }

 export default ContextProvider
