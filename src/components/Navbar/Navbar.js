import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/100 books logo.png";
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import {HiOutlineMenuAlt3} from "react-icons/hi"; {/*found icons at https://react-icons.github.io/react-icons/icons?name=hi*/}

{/* toggleMenu is a boolean value that is set to false by default. found lesson on usestate at https://dommagnifi.co/2020-12-03-toggle-state-with-react-hooks/*/}
const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'> {/* sb is space between vs. space around */}
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "bookshelf logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>The Bookshelf</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <MenuBookSharpIcon/>
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to = "bookshelf" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Bookshelf</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar