
// import React, { useEffect, useState } from 'react'
// import {Typography,Card,CardActions,CardContent,CardMedia,Button, Grid} from '@mui/material'
// import axios from 'axios';

//  const Home = () => {
//   var[output,setOutput]=useState([])                                                //array for 10 data
//   useEffect(()=>{
//      axios.get("https://fakestoreapi.com/products")
//        .then((response)=>{
//            console.log(response.data);
//            setOutput(response.data);
//       })
//       .catch((error)=>{console.log(error);});
//   },[])  
//   // const handleSubmit = (e) => {
//   //   e.preventDefault()
//   //   .then((response) => {
//   //     console.log(response.data)
//   //     console.log("data added")
//   //     navigate('/cart')
//   //   })
//   //   .catch((error) => {
//   //     console.log(error)
//   //   })
//   // const handleSubmit= (e) => {
//   //   e.preventDefault()
//   //   axios.post('http://localhost:3040/addpro', input)
//   //   .then((response) => {
//   //     console.log(response.data)
//   //     console.log("data added")
//   //     navigate('/l')
//   //   })
//   //   .catch((error) => {
//   //     console.log(error)
//   //   })
//   }
//   return (
//     <div>
    
       
      
//     <Grid container spacing={2} sx={{padding:3}}>
      
//       {output.map((val,i)=>{
//                return(
//                  <Grid item key={i} xs={12} sm={6} md={4}>
//          <Card sx={{ maxWidth: 345 }}>
//          <CardMedia
//            sx={{ height: 140 }}
//            image={val.image}
//            title={val.title}
//          />
//          <CardContent>
//            <Typography gutterBottom variant="h5" component="div" >
//              {val.title}
//            </Typography>
//            <Typography variant="body2" color="text.secondary">
//            {val.description}
//            </Typography>
//          </CardContent>
      
//          <CardActions>
//             <Button size="small">Add to cart</Button>  
//            {/* <Button variant='contained' ><Link to={'/cart'} onClick={handleSubmit} style={{textDecoration:'none',color:'white'}}>Add to Cart</Link></Button>  */}
//            <Button size="small"> More</Button>
//          </CardActions>
//        </Card>
//        </Grid>
     
//        )
//      })}
//     </Grid>
//        </div>
//      )
//    }


// export default Home
import React, { useEffect, useState } from 'react'
import {Typography,Card,CardActions,CardContent,CardMedia,Button, Grid} from '@mui/material'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Home = () => {
var[output,setOutput]=useState([])                                                //array for 10 data
useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
         console.log(response.data);
         setOutput(response.data);
      })
      .catch((error)=>{console.log(error);});
  },[])  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    setSubmitted(true)
  };
  return (
    <div  >
   
      <Grid container spacing={2} sx={{padding:3}}>
  
   {output.map((val,i)=>{
            return(
              <Grid item key={i} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" size="small">
        {val.description}
        </Typography>
      </CardContent>
   
      <CardActions>
          <Button size="small"><Link to={'/cart'} onclick={handleSubmit}>Add to cart</Link></Button>  

        <Button size="small"> More</Button>
      </CardActions>
    </Card>
    
    </Grid>
  
    )
  })}
 </Grid>


    </div>
  )
}
export default Home
