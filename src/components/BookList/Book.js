import react from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = (props) => {

    return (
      <div className='book-item flex flex-column flex-sb'>
        <div className='book-item-img'>
          <img src = {props.cover_img} alt = "cover" />
        </div>
        <div className='book-item-info text-center'>
          <Link to = {`/book/${props.id}`} {...props}>
            <div className='book-item-info-item title fw-7 fs-18'>
              <span>{props.title}</span>
            </div>
          </Link>
  
          <div className='book-item-info-item author fs-15'>
            <span className='text-capitalize fw-7'>Author: </span>
            <span>{props.author.join(", ")}</span>
          </div>
  
          <div className='book-item-info-item edition-count fs-15'>
            <span className='text-capitalize fw-7'>Total Editions: </span>
            <span>{props.edition_count}</span>
          </div>
  
          <div className='book-item-info-item publish-year fs-15'>
            <span className='text-capitalize fw-7'>First Publish Year: </span>
            <span>{props.first_publish_year}</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default Book