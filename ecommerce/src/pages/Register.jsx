// import { Button, TextField, Typography } from '@mui/material'
// import axios from 'axios'
// import React, { useState } from 'react'
// import { MdCenterFocusStrong } from 'react-icons/md'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const Register = () => {
//   const navigate = useNavigate()
//    const [input,setInput] = useState({FirstName:'',LastName:'',MobNo:'',Email:'',Password:''})
//     const handleChange = (e) =>{
//       setInput({...input,[e.target.name]:e.target.value})
//       console.log(input)
//     }

   
  
  
//     const addData = (e) => {
//       e.preventDefault();
//       console.log(input)
//       setSubmitted(true)
//     }
    

//   return (
    
      
//       <div >
//     <div style={{textAlign:"center",padding:'15%'}}>

//       <Typography  variant='h5' >Create an account</Typography>
//         <br/>
//       <TextField  label="First Name" variant="outlined" required onChange={handleChange} name="FirstName" value={input.FirstName} />
//       <br />
//       <br />
//       <TextField label="Last Name" variant="outlined" required onChange={handleChange} name="LastName" value={input.LastName} />
//       <br />
//       <br />
//       <TextField label="Mob no" variant="outlined" required onChange={handleChange} name="MobNo" value={input.MobNo} />
//       <br />
//       <br />
//       <TextField label="email" variant="outlined" required onChange={handleChange} name="Email" value={input.Email} />
//       <br />
//       <br />
//       <TextField label="password" variant="outlined" required type="password" onChange={handleChange} name="Password" value={input.Password} />
//       <br />
//       <br />
      
//       <Button variant='contained' onClick={addData} >SingnUp</Button>
//       <br/>
//       <br/>
//       <Typography variant='h7'>Already have an account? <a href="http://localhost:5173/l">Login</a></Typography>
//       </div>
      
//   </div>
//   )
// }


// export default Register
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
   const [input,setInput] = useState({FirstName:'',LastName:'',MobNo:'',Email:'',Password:''})
    const handleChange = (e) =>{
      setInput({...input,[e.target.name]:e.target.value})
      console.log(input)
    }

   
   
  const addData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3040/add', input)
    .then((response) => {
      console.log(response.data)
      console.log("data added")
      navigate('/h')
    })
    .catch((error) => {
      console.log(error)
    })
    
  };
  return (
  
      
      <div style={{textAlign:"center",padding:'15%'}}>    
      <Typography  variant='h5' >Create an account</Typography>
        <br/>
      <TextField  label="First Name" variant="outlined" required onChange={handleChange} name="FirstName" value={input.FirstName} />
      <br />
      <br />
      <TextField label="Last Name" variant="outlined" required onChange={handleChange} name="LastName" value={input.LastName} />
      <br />
      <br />
      <TextField label="Mob no" variant="outlined" required onChange={handleChange} name="MobNo" value={input.MobNo} />
      <br />
      <br />
      <TextField label="email" variant="outlined" required onChange={handleChange} name="Email" value={input.Email} />
      <br />
      <br />
      <TextField label="password" variant="outlined" required type="password" onChange={handleChange} name="Password" value={input.Password} />
      <br />
      <br />
      <Button variant='contained' className="bg-black text-white"><Link to={'/h'}onClick={addData} >SignUp</Link></Button>

      <br/>
      <br/>
      <Typography variant='h7'>Already have an account? <a href="http://localhost:5173/l">Login</a></Typography>
      </div>
      
   
  )
}


export default Register