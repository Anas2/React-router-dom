import { Box, Typography,Button } from '@mui/material';
import './loginsignup.css'

function login(){
    return(
        <>
        
        <Box className='mainBox'>
        <Typography variant='h5' >Login</Typography>
            <Box className='p-5 insideMainBox'>
                <Box> <input  placeholder='email' /> </Box>
                <Box> <input  placeholder='password' /> </Box>
                <Box><Button variant='contained' fullWidth className='mt-4' >Login</Button></Box>
            </Box>
            
        </Box>
        </>
    )
}

export default login