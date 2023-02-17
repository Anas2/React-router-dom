import Common from './common';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function AboutClick() {

    const location = useLocation();
    console.log(location);
    const [userInfo, setUserInfo] = useState(location.state);

    return (

        <div>
            <h1>About </h1>

            <div>{userInfo.id}</div>
            <div>{userInfo.name}</div>
            <div>{userInfo.description}</div>


        </div>

    )
}

export default AboutClick