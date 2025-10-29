import { useState } from 'react'

import BookList from '../components/bookList'
import { v4 } from 'uuid';
import NewBook from './newBook.jsx';

import { books as bookService } from '../assets/bookService.js'

const styles = {
    display:'flex', 
    justifyContent: 'center',
    alignItems: 'center',   
    minHeight: '75vh'
  }

const addBook=(title,author,noInStock)=>{
    const newBook = {id:v4(), title,author, noInStock};

    setBooks([...booksArray,newBook])
  }
const AddBook = () => {
  let [booksArray, setBooks] = useState(bookService);
  
    return (
       <>
       
       <h1 style={{textAlign:'center'}}>Add a New Book</h1>
       <div style={styles}>
            <NewBook onAddBook={addBook}/>
        </div>
        </>
        
      );
}
export default AddBook;