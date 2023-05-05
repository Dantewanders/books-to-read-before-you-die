import { Link } from "react-router-dom";
import "./BookList.css";
import { Grid } from "@mui/material";

const Book = (props) => {
  return (
    <Grid
      container
      className="book-item-container"
      spacing={2}
      justifyContent="center"
      direction="row"
    >
      <Grid item className="book-item-container" xs={12} sm={4} md={4} lg={3}>
      <div className="book-item-img">
          <img src={props.cover_img} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <Link to={`/book${props.id}`} {...props}>
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{props.title}</span>
            </div>
          </Link>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <span>{props.author.join(", ")}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15">
            <span className="text-capitalize fw-7">Total Editions: </span>
            <span>{props.edition_count}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">First Publish Year: </span>
            <span>{props.first_publish_year}</span>
          </div>
        </div>
      
      </Grid>
    </Grid>
  );
};

export default Book;
