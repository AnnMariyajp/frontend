import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '/src/AuthContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ADMIN_EMAIL = 'annam1@gmail.com'; 
const ADMIN_PASSWORD = '3445';

const Login = () => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [input,setInput] = useState({Email:'',Password:''})
  const { setAuthenticated, setUserId, userId } = useAuth();

  useEffect(() => {
    console.log("useeffect")
    if(submitted){
      axios.get('http://localhost:3040/view', {params:{Email:input.Email}})
      .then((response) => {
        const email = response.data.Email
        console.log(response.data)
        console.log(email)

        if(email == input.Email){
          console.log("email matched")
          if(response.data.Password == input.Password){
            console.log("password matched")
            setAuthenticated(true)
            setUserId(response.data.Email)
            console.log("user id: " + userId)
            setAuthenticated(true)
            navigate('/')
          }
          else{
            console.log("password not matched")
          }
        }
        else{
          console.log("email not matched")
        }
      })
      .catch((error) => {
        console.log("error" + error)
      })
      .finally(() => {
        setSubmitted(false)
      })
    }
  },[submitted])
    
  

    const handleChange = (e) =>{
      setInput({...input,[e.target.name]:e.target.value})
      console.log(e.target.value)
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if (input.Email === ADMIN_EMAIL && input.Password === ADMIN_PASSWORD) {
        setAuthenticated(true);
        setUserId(ADMIN_EMAIL); // Assuming you want to set the userId as the email
        navigate('/admin'); // Navigate to admin page
        return; // Exit function after navigating
      }
    
      try {
        const response = await axios.get('http://localhost:3040/view', { params: { Email: input.Email } });
        const userData = response.data;
    
        if (userData.Email === input.Email && userData.Password === input.Password) {
          console.log("Credentials matched");
          setAuthenticated(true);
          setUserId(userData.Email);
          navigate('/'); // Redirect based on user role or other conditions
        } else {
          console.log("Credentials did not match");
          alert('Invalid username or password.'); // Show alert message
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert('An error occurred during login. Please try again later.'); // Show alert message for API call failures
      }
      console.log(input)
      setSubmitted(true)
    };


  return (
    <div>
    <div style={{textAlign:"center",padding:'15%'}}>

    <Typography variant='h4'>Login Here</Typography>
      <br/>
      
      <TextField label="Email" variant="outlined" name="Email" required value={input.Email} onChange={handleChange} />
      <br />
      <br />
      <TextField label="Password" variant="outlined" name="Password" required type="password" value={input.Password} onChange={handleChange} />
      <br />
      <br />
      <Button variant='contained'className="bg-black" ><Link to={'/h'} onClick={handleSubmit} style={{textDecoration:'none',color:'white'}}>Login</Link></Button>
          
      <br/>
      <br/>
      <Typography variant='h7'>Don't you have an account? <a href="http://localhost:5173/r">Register</a></Typography>
      </div>       
  </div>           
                
   
  )
}

export default Login
