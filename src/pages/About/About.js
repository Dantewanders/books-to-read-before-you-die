import React from "react";
import { Fragment } from "react";
import { Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import  "./about.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect } from "react";
require("ag-grid-community/styles/ag-grid.css");

function About() {

  const rowData =[
    { Author: "Dante Alighieri", Title: "The Divine Comedy", Year: "1320" },
    { Author: "William Shakespeare", Title: "Hamlet", Year: "1603" },
    { Author: "William Shakespeare", Title: "Romeo and Juliet", Year: "1597" },
    {
      Author: "James Joyce",
      Title : "Ulysses",
      Year: "1922"
  },
  {
    Author:"F. Scott Fitzgerald",
    Title:"The Great Gatsby",
    Year:"1925"
 },
 {
    Author:"Vladimir Nabokov",
    Title:"Lolita",
    Year:"1955"
 },
 {
  Author: "William Faulkner",
  Title:"The Sound and the Firy",
  Year:"1929"
},
{
  Author: "Aldous Huxley",
  Title : "Brave New World",
  Year: "1932"
},
{
  Author: "Joseph Heller",
  Title: "Catch-22",
  Year: "1961"
},
{
  Author: "D.H. Lawrence",
  Title: "Sons and Lovers",
  Year: "1913"
},
{
  Author: "John Steinbeck",
  Title: "The Grapes of Wrath",
  Year: "1939"
},
{
  Author: "Malcolm Lowry",
  Title: "Under the Volcano",
  Year: "1947"
},
{
  Author: "Joseph Heller",
  Title: "Catch-22",
  Year: "1961"
},
{
  Author: "D.H. Lawrence",
  Title: "Sons and Lovers",
  Year: "1913"
},
{
  Author: "John Steinbeck",
  Title: "The Grapes of Wrath",
  Year: "1939"
},
{
  Author: "Malcolm Lowry",
  Title: "Under the Volcano",
  Year: "1947"
},
{
  Author: "Theodore Dreiser",
 Title: "An American Tragedy",
  Year: "1925"
},
{
  Author: "Carson McCullers",
 Title: "The Heart Is a Lonely Hunter",
  Year: "1940"
},
{
 Author: "Kurt Vonnegut",
  Title: "Slaughterhouse Five",
  Year: "1969"
},
{
  Author: "Ralph Ellison",
  Title: "Invisible Man",
  Year: "1952"
},
{
  Author: "Richard Wright",
 Title: "Native Son",
  Year: "1940"
},
{
  Author: "Mark Twain",
  Title: "Huckleberry Finn",
  Year: "1884"
},
{
  Author: "Robert Louis Stevenson",
  Title: "Strange Case of Dr. Jekyll and Mr. Hyde",
  Year: "1886"
},
{
Author: "Oscar Wilde",
  Title: "The Picture of Dorian Gray",
  Year: "1891"
},
{
  Author: "John Buchan",
  Title: "The Thirty-nine Steps",
  Year: "1915"
},
{
  Author: "Virginia Woolf",
  Title: "Mrs Dalloway",
  Year: "1925"
},
{
  Author: "Ernest Hemingway",
  Title: "For Whom the Bell Tolls",
 Year: "1940"
},
{
  Author: "J.R.R. Tolkien",
  Title: "The Lord of the Rings",
  Year: "1954 & 1955"
},
{
  Author: "Harper Lee",
  Title: "To Kill a Mockingbird",
  Year: "1960"
},
{
  Author: "William Shakespear",
  Title: "Hamlet",
  Year: "1623"
},
{
  Author: "John Steinbeck",
  Title: "Of Mice and Men",
  Year: "1937"
},
{
  Author: "Charles Dickens",
  Title: "A Tale of Two Cities",
  Year: "1859"
},
{
  Author: "Miguel De Cervantes",
  Title: "Don Quixote",
  Year: "1612 & 1620"
},
{
  Author: "Daniel Defoe",
  Title: "Robinson Crusoe",
  Year: "1719"
},
{
  Author: "Jonathan Swift",
  Title: "Gulliver's Travels",
  Year: "1726"
},
{
Author: "Jane Austen",
  Title: "Emma",
  Year: "1815"
},
{
  Author: "E.M. Forster",
  Title: "A Passage to India",
  Year: "1924"
},
{
  Author: "Mary Shelley",
  Title: "Frankenstein",
  Year: "1818"
},
{
  Author: "Emily Bronte",
  Title: "Wuthering Heights",
  Year: "1847"
},
{
  Author: "Emily Bronte",
  Title: "Jane Eyre",
  Year: "1847"
},
{
  Author: "William Makepeace Thackeray",
  Title: "Vanity Fair",
  Year: "1848"
},
{
  Author: "Herman Melville",
  Title: "Moby-Dick",
  Year: "1851"
},
{
  Author: "Gustave Flaubert",
  Title: "Madame Bowary",
  Year: "1856"
},
{
  Author: "George Eliot",
  Title: "The Mill on the Floss",
  Year: "1860"
},
{
  Author: "Fyodor Dostoevsky",
  Title: "The Brothers Karamazov",
  Year: "1879 & 1880"
},
    
  ];


  const columnDefs = [
    { field: "Author" },
    { field: "Title"},
    { field: "Year"  },
  ];
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt="20px"
      
    >
       <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 1200, borderRadius: "25px", mb:"20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              One of my aims is to begin catching up on all the reading I've
              neglected for, well, the majority of my life. So, I started by
              researching several combinations of 'books to read before you
              die'. After carefully reading through what was on offer I decided
              to take the collective wisdom from the various sources by
              painstakingly comparing lists to determine how much overlap
              existed between them. I used this information to create a new list
              of the top books based on the number of times the book appeared as
              one of the list's recommendations. The more the book was referred
              to by the lists, the more the experts agreed, and that book became
              part of my new and improved books to read before you die list.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
        />
      </div>

     

      <Grid item maxWidth={10}>
        <Typography variant="body1" mb="20px" maxWidth={1300}></Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 1600, borderRadius: "25px", opacity: "inherit" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              100 Books
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Grid container rowSpacing={0} columnSpacing={12} mt="3px">
                <Grid item xs={4}>
                  <ListItem sx={{ display: "list-item" }}>
                    Dracula
                  </ListItem>
                </Grid>

                <Grid item xs={4}>
                  <ListItem sx={{ display: "list-item" }}>
                   The Divine Comedy
                  </ListItem>
                </Grid>

                <Grid item xs={4}>
                  <ListItem sx={{ display: "list-item" }}>
                    The Kite Runner
                  </ListItem>
                </Grid>

                

               

                
              </Grid>
              {/* </Box> */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" mt="30px" mb="15px">
          Lets get started on your Literary Journey
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
