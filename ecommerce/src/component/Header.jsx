import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { BsCart } from 'react-icons/bs'
import { useContext } from 'react'
//import '/src/index.css'
import{AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '/src/Feature/ContextProvider'
const Header = () => {
  const{cart}=useContext(CartContext)
  return(

    <div >
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='bg-black'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Shopy
          </Typography>
          <Button ><Link to={'/l'}style={{textDecoration:'outlined',color:'white'}}>login</Link></Button>

           <Button ><Link to={'/h'}style={{textDecoration:'none',color:'white'}}>Home</Link></Button> 
          <Button><Link to={'/cart'}style={{textDecoration:'none',color:'white'}}>Deals</Link></Button>
          <div>
          <input type="text"placeholder='Search for products' />
            </div>
            <div class="bca">
               <MdSearch />
                <Link to={'/cartt'}className='text-white'><BsCart/>{cart.length}</Link>  

      </div> 
        </Toolbar>
      </AppBar>
    </Box>
 
    
    </div>
  )
}

export default Header
