import { useState,useEffect  } from 'react'

import axios from 'axios';

import BookList from '../components/bookList'
import { v4 } from 'uuid';
import NewBook from './newBook.jsx';
import { useParams, useNavigate } from 'react-router-dom';

import { books as bookService } from '../assets/bookService.js'

const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '10px', 
       marginTop: '20px',
    }

const UpdateBook = ({onUpdate}) => {

    const navigate = useNavigate();
     const { id } = useParams();
const [book, setBook] = useState({
    title: "",
    author: "",
    subject: ""
    
  });

   useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/booksinfo/${id}`);
        setBook({
          title: data.title,
          author: data.author,
          subject: data.subject,
        });
     
      } catch (err) {
        console.error('Error fetching book:', err);
      }
    };
    fetchBook();
  }, [id]);


  const submitForm = (e) => {
    e.preventDefault();
    onUpdate({_id: id, ...book});
    navigate('/manage-books');

  };

    return (
       <div>
        
        <form onSubmit = {submitForm} style={formStyle}>
            <input type="text" 
            required 
           
            value={book.title} 
            onChange={(event)=>setBook({...book, title:event.target.value})} 
            />
            <input type="text"
            required 
           
            value={book.author} 
            onChange={(event)=>setBook({...book, author:event.target.value})}
            />
            <input type="text"
            required 
          
            value={book.subject} 
            onChange={(event)=>setBook({...book, subject:event.target.value})}
            />
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
        
      );
}
export default UpdateBook;