import React ,{useRef,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from '../../context.';
import "./SearchForm.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();

    if((tempSearchTerm.replace(/{^\s\$/g, '')).length === 0) {
      /*if the search is empty, then the search is set to '0'*/
      setSearchTerm("The Inferno");
      setResultTitle("try another search");
    }
    else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/search');

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
}


export default SearchForm

