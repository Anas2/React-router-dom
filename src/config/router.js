import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../component/home';
import About from '../component/abouts';
import Login from '../component/loginSignUp/login';
import Signup from '../component/loginSignUp/signup';
import Contact from '../component/contact';
import './router.css';

function Approuter() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li className='login'>
                        <Link to='login'>Login</Link> / <Link to='signup'>Sign up</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='contact' element={<Contact />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter