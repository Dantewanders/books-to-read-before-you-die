import React, {useState, useEffect} from 'react'
import { useCallback } from 'react'

const URL = "http://openlibrary.org/search.json?title=";
const BookContext = React.createContext();

const BookProvider = ({children}) => {
    const [searchTerm,setSearchTerm] = useState("The Inferno");
    const [books,setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle]= useState("");

    Const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('${URL}${searchTerm}');
            const data = await response.json();
            const {docs} = data;
            if(docs.length) {
                newBooks = docs.slice(0, 20).map((bookSingle) => {
                    /*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
                    where start and end represent the index of items in that array. The original array will not be modified.*/                    
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;})

                    return{
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    }
                })
                    }


const
fetch(URL)
  .then(response => response.json())
  .then(data => {
    // do something with the response data
    console.log(data);
  })
  .catch(error => {
    // handle any errors
    console.error(error);
  });