import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './header.css';



const Header = (props) => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>100 Books to read before you die!</h2><br />
                <p className='header-text fs-18 fw-3'>One of my aims is to begin catching up on all the reading I’ve neglected for, well, the majority of my life. 
                So, I started by researching several combinations of ‘books to read before you die,’After carefully reading through what was on offer I decided to take the collective wisdom from the various sources by painstakingly comparing lists to determine how much overlap existed between them.
                I used this information to create a new list of the top books based on the number of times the book appeared as one of the list’s recommendations. 
                The more the book was referred to by the lists, the more the experts agreed, and that book became part of my new and improved books-to-read-before-you-die list.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}
export default Header