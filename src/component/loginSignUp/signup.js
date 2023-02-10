import { Box, Typography, Button } from '@mui/material'


function signUp() {
    return (
        <>
            
            <Box className='mainBox'>
            <Typography variant='h5' >Sign up</Typography>
                <Box className='p-5 insideMainBox'>
                    <Box> <input placeholder='first name' /> </Box>
                    <Box> <input placeholder='last name' /> </Box>
                    <Box> <input placeholder='email' /> </Box>
                    <Box> <input placeholder='password' /> </Box>
                    <Box> <input placeholder='confirmed password' /> </Box>
                    <Box><Button variant='contained' fullWidth className='mt-4' > Sign Up</Button></Box>
                </Box>

            </Box>
        </>
    )
}

export default signUp