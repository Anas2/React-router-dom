import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../component/home';
import About from '../component/abouts';
import Login from '../component/loginSignUp/login';
import Signup from '../component/loginSignUp/signup';
import Contact from '../component/contact';
import AboutClick from '../component/AboutClick';
import ContactParams from '../screens/contact screen/ContactParams'
import './router.css';


function Approuter() {
 
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        {/* <Link to='/'>{Dashboard}</Link> */}
                    </li>
                    <li>
                        {/* <Link to='about'>About</Link> */}
                    </li>
                    <li>
                        {/* <Link to='contact'>sContact</Link> */}
                    </li>
                    <li className='login'>
                        <Link to='login'>Login</Link> / <Link to='signup'>Sign up</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='aboutclick' element={<AboutClick />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='contact' element={<Contact />} />
                <Route path='contact/:fname' element={<ContactParams />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter