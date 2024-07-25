import './Navbarr.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <div className='nav1'>
                    <span>
                        <Link to='/'><img src='https://tse4.mm.bing.net/th?id=OIP.s5kW9IVXIpcTpB7ejAfHUAHaHa&pid=Api&P=0&h=180' alt='Logo.png' /></Link>
                    </span>
                    <Link className='nv1' to='/'>Springdale Public School</Link>
                </div>
                <div className='hamburger' onClick={toggleMenu}>
                    &#9776;
                </div>
                <div className={`nav2 ${isMenuOpen ? 'open' : ''}`}>
                    <Link to='/about'>About Us</Link>
                    <Link to='/academic'>Academics</Link>
                    <Link to='/admission'>Admissions</Link>
                    <Link to='/faculty'>Faculty</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contactus'>Contact Us</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbarr;
