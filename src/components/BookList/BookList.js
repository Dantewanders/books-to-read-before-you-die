import react from 'react';
import { useBookContext } from '../../BookData/bookData';
import Book from '../Book/Book';
import Loading from '../Loader/Loader';
import coverImg from "../../images";
import './BookList.css';

const BookList = () => {
  const {books,loading, resultsTitle} = useBookContext();
  const booksWithCovers = books.map((singleBook) => {
    return{/*https://covers.openlibrary.org/b/id/240727-S.jpg*/
      ...singleBook, /*spread operator*/
      /*removing /works/ gets only the id number*/
      id:(singleBook.id).replace('/works/',''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
    });
    if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList