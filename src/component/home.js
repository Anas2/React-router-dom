import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import Common from './common';
import { useLocation } from 'react-router-dom';
import './components.css';

function Home() {

    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div className='main'>
            <div><h3>Hello! And Welcome To The Home Screen</h3></div>
            <div> First name : {data.firstName}</div>
            <div> Last name : {data.lastName}</div>
            <div> Email : {data.email}</div>
            <div> Password : {data.password}</div>
            <div> Confirmed Password : {data.confirmedPassword}</div>
        </div>
        // <div>

        //     <span>Hello Home</span>

        //     <button onClick={() => { moveToAbout(arr) }} >Add</button>

        // </div>
        //    <Common title='Home' />

    )

}

export default Home