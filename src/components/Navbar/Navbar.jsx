import react, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);



  return (
    <div className='navbar'>
         <div className="logo">
                <span>FCT</span> <h5>Flux Creative Technologies</h5>
         </div>

            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#hero" className='active' onClick={closeMenu}>Home</a></li>
                {/* <li><a href="#about">About</a></li> */}
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#contact" onClick={closeMenu}>Work</a></li>
                {/* <li><a href="#process">Our Process</a></li> */}
                {/* <li><a href="#price">Pricing</a></li> */}
            </ul>
        
         
         <div className="contact">
                <a href='#contact'>Contact Us</a>
         </div>
         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </div>

  )
}

export default Navbar