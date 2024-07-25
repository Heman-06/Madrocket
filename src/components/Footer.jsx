import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="ftr1">
                <span className="ftr2">
                    <h3>Springdale Public School</h3>
                </span>
                <span>
                    <Link  style={{color:"black"}} to='/about'>About Us</Link>
                    <Link  style={{color:"black"}} to='/academic'>Academics</Link>
                    <Link  style={{color:"black"}} to='/faculty'>Faculty</Link>
                    <Link  style={{color:"black"}} to='/contactus'>Contact Us</Link>
                </span>
                <span>
                    <p>© 2024 Springdale Public School. All rights reserved.</p>
                </span>
            </div>
        </>
    )
}

export default Footer