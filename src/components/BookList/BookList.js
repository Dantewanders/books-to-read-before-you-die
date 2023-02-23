import react from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import {useBookContext} from '../../BookData/bookData'
import Book from './Book'


const BookList = (props) => {

const bookContext = useBookContext()

const books = bookContext.books

console.log(books)

    return (
      <>
        {books.map(book => {
          return (
            <Book
              id={book.id}
              title={book.title}
              cover_img={`https://covers.openlibrary.org/b/id/${book.cover_id}-S.jpg`}
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