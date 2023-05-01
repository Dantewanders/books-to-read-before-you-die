import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './header.css';



const Header = (props) => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex   text-white'>
            <br />
                <h2 className='header-title text-capitalize'>The Bookshelf</h2>
                <br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <SearchForm />
            </div>
        </header>
    </div>
  )
}
export default Header