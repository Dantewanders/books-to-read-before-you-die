import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title=the+lord+of+the+rings";
const BookContext = React.createContext();

const BookProvider = () => {
  /*children is a special prop that is used to render the children of the component*/
  const [searchTerm, setSearchTerm] = useState("The Inferno");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("${URL}${searchTerm}");
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          /*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)where start and end represent the index of items in that array. The original array will not be modified.*/
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Results");
        } else {
          setResultTitle("No Results Found");
        }
      } else {
        setBooks([]);
        setResultTitle("No Results Found");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <BookContext.Provider
      value={{
        /*value is an object that contains the data that we want to share with our components*/
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}>
    </BookContext.Provider>
  );
};
export const useBookContext = () => {
  return useContext(BookContext);
};

export { BookContext, BookProvider };
