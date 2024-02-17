import React from 'react'
import './Navbar.css'
import logo from '../../Assets/ico1.png'
import contactImg from '../../Assets/cnt.png'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Projects</Link>

        </div>
        <button className='desktopMenuBtn' onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
    </nav>
  )
}

export default Navbar