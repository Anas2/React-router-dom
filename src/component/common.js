import { Box, Typography, Container, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Common(props) {
    const navigation = useNavigate()
    return (

        <>
            <Box >
                <Container>
                    <Box className='p-3 rounded shadow'>
                        <Typography variant='h5' className='text-center ' >{props.title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h5'>
                            <Button variant='contained' className='mt-2 me-1' onClick={() => { navigation('/login') }} >Login</Button>
                            <Button variant='contained' className='mt-2' onClick={() => { navigation('/signup') }} >Sign Up</Button>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Common