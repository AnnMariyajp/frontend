import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Cart from './pages/Cart'
import{ Routes, Route} from 'react-router-dom'  
import { AuthProvider } from './AuthContext'
import Footer from '/src/component/Footer'
import Admin from './component/Admin';
import Cartt from '/src/pages/Cartt'
 function App() {
  const [count, setCount] = useState(0)
  // const [list, setList] = useState(Posts)
  return (
    <>
      <div>
        <AuthProvider>
        <Header/>
     
        <Routes>
        <Route path="/"element={<Home/>}/>
          <Route path="/h"element={<Home/>}/>
          <Route  path="/l"element={<Login/>}/>
        
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/r"element={<Register/>}/>
          <Route path="/cartt"element={<Cartt/>}/>
      </Routes>
      </AuthProvider>
   
      <Footer/>
      </div>
      
    </>
  )
}

export default App
