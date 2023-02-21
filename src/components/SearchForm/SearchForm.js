import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useGlobalContext } from '../../context.';
import "./SearchForm.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = (props) => {
  return (
    <div className= 'search-form'>
      <div className= 'container'>
        <div className= 'search-form-content'>
          <form className= 'search-form'></form>
          <div className= 'search-form-elements flex flex-c bg-white'>
            <input type = "text"
            className ='form-control' placeholder = '  The Inferno ...'/>
            <button type = "submit" className = 'flex flex-c'>
              <SearchIcon sx={{ fontSize: 60 }}className = 'text-light-blue'/>
              {/* icon from material ui and instructions */}
            </button>
        </div>
      </div>
    </div>
  </div>
  )
}


export default SearchForm

