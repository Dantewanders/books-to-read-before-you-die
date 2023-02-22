import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loader'
import coverImg from '../../images/cover_NF.jpg';
import './BookDetails.css'
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () =>{
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)
  const navigate = useNavigate();
  useEffect (() => {
    setLoading(true)
    async function getBookDetails(){
      
    }
  return (
    <div>BookDetails</div>
  )
}

export default BookDetails