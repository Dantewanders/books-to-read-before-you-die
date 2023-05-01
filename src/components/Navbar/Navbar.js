import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/100 books logo.png";
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import { Grid } from '@mui/material';


{/* toggleMenu is a boolean value that is set to false by default. found lesson on usestate at https://dommagnifi.co/2020-12-03-toggle-state-with-react-hooks/*/}
const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      whiteSpace={{ xs: 'nowrap', sm: 'nowrap', md: 'nowrap' }}
      // alignItems="center"
      marginBottom="20px"
      maxWidth="xl"  >
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'> {/* sb is space between vs. space around */}
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "bookshelf logo" />
            
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <MenuBookSharpIcon/>
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Library</Link>
            </li>
             <li className='nav-item'>
              <Link to = "bookshelf" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Bookshelf</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>The List</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </Grid>
  )
}

export default Navbar