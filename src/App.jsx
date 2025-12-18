import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigtion'
import Home from './components/home'
import Footer from './components/footer'
import ManageBooks from './components/ManageBooks'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddBook from './components/addBook'
import ExploreBooks from './components/exploreBooks'
import axios from "axios";
import UpdateBook from './components/updateBook'

function App() {

  const [count, setCount] = useState(0)

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3000/api/booksinfo`;
      try {
        const response = await axios.get(url);
        //console.log(response.data);
        setBooks(response.data);
      } catch (err) {
        console.log(`ERROR in fetching: ${err.message}`);
      }
    };
    fetchData();
  }, []); // empty dependency array --> run only once when the component mounts

  const handleDelete = async (bookToDelete_id) => {
    
    console.log("Delete handled");
    const url = `http://localhost:3000/api/deletebook/${bookToDelete_id}`;
    try {
      const { data, status } = await axios.delete(url);
      if (status == 200) {
        const newBooks = books.filter((book) => book._id !== bookToDelete_id);
        setBooks(newBooks);
      } else {
        console.log("Error in deleting the book");
      }
    } catch (err) {
      console.log(`ERROR in deleting ${err}`);
    }
  };

  //Adding a new book to the database
  const addBook = async (book) => {
    const url = `http://localhost:3000/api/addbook`;

    try {
      const { data } = await axios.post(url, book);
      if (typeof data === "object") {
        const newBook = data;
        console.log(newBook);
        setBooks([...books, newBook]);
      } else {
        console.log("Error in adding the book");
      }
    } catch (err) {
      console.log(`ERROR in adding ${err}`);
    }
    navigate("/add-book");
  };

  
  const updateBook = async (updatedBookObj) => {
  const url = `http://localhost:3000/api/updatebook/${updatedBookObj._id}`;

  try {
    const { data, status } = await axios.put(url, updatedBookObj);

    if (status === 200) {
     
      const withoutOld = books.filter(
        (book) => book._id !== updatedBookObj._id
      );

      const newBooks = [...withoutOld, data];

      setBooks(newBooks);
    } else {
      console.log("ERROR in updating");
    }

    navigate("/manage-books");
  } catch (err) {
    console.log(`ERROR in updating: ${err.message}`);
  }
};

  const homeStyles = {
    display:'flex', // cant use textAlign: center because it only affects 
    // inline content (like text and images) but not block-level components.
    //  so need to use display: flex
    justifyContent: 'center',// Centers horizontally
    alignItems: 'center',    // Centers vertically
    minHeight: '80vh'// The height the container spans of the viewport height
    //if it was 100vh then it will span the height of the entire viewport
  }
  return (
    <>
    
 
      <Navigation />
   
      <Routes>
        <Route
          path="/home"
          element={
            <div style={homeStyles}>
              <Home />
            </div>
          }
        />
        {/* <Route path="/manage-books" element={<ManageBooks />} /> */}

        <Route
          path="/manage-books"
          element={<ManageBooks books={books} onDelete={handleDelete}/>}
        />

        <Route path="/add-book" element={<AddBook onAdd={addBook} />} />
        <Route path="/explore-book" element={<ExploreBooks />} />\
        <Route path="/updatebook/:id" element = {<UpdateBook onUpdate={updateBook}/>}/>
      </Routes>
    
      {/* <div style={homeStyles}>
             <Home/>
      </div> */}
      <Footer/>
     
    </>
  )
}

export default App
