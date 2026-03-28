import react, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);



  return (
    <div className='navbar' id='contact'>
         <div className="logo">
                <span>FCT</span> <h5>Flux Creative Technologies</h5>
         </div>

            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#hero" className='active' onClick={closeMenu}>Home</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href='#contacts' onClick={closeMenu}>Contact</a></li>

            </ul>
        
         
         <div className="contact" id='contact'>
                <li><a href='#contacts' onClick={closeMenu}>Get in touch</a></li>
         </div>
         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </div>

  )
}

export default Navbar