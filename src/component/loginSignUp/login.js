import { Box, Typography,Button } from '@mui/material';
import './loginsignup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    email: "",
    password: "",
  };

function Login(){

    const [userData, setUserdata] = useState(initialValues);
    const navigate = useNavigate();
  
    const handleUserData = ((e) => {
  
      const { name, value } = e.target;
      setUserdata({
        ...userData,
        [name]: value,
      });
      // console.log(userData);
    })
    const sendDataToHome = (userObject) => {
  
      console.log(userObject);
      navigate("/home", {
        state: userObject,
      })
      
    }

    return(
        <>
        
        <Box className='mainBox'>
        <Typography variant='h5' >Login</Typography>
            <Box className='p-5 insideMainBox'>
                <Box> <input  placeholder='email' name="email" value={userData.email} onChange={handleUserData} /> </Box>
                <Box> <input  placeholder='password' name="password" value={userData.password} onChange={handleUserData} /> </Box>
                <Box><Button variant='contained' fullWidth className='mt-4' onClick={()=>{sendDataToHome(userData)}} >Login</Button></Box>
            </Box>
            
        </Box>
        </>
    )
}

export default Login