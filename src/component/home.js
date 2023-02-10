import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import Common from './common';

function Home() {

    // const navigation = useNavigate()
    return (
        // <div>

        //     <span>Hello Home</span>

        // <button onClick={()=>{navigation('/about')}} >Add</button>

        // </div>
       <Common title='Home' />

    )

}

export default Home