import react from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import {useBookContext} from '../../BookData/bookData'
import Book from './Book'

const BookList = (props) => {

const books = useBookContext()

    return (
      <>
        {books.map(book => {
          return (
            <Book
              id={book.id}
              title={book.title}
              cover_img={book.cover_img}
              author={book.author}
              edition_count={book.edition_count}
              first_publish_year={book.first_publish_year}
            />
          )
        })
        }
      </>
    )
  }
  
  export default BookList