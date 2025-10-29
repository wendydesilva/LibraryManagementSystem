import { useState } from "react";
const NewBook = ({onAddBook=f=>f}) => {

    const [title, setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [noInStock,setnoInStock] = useState("");
    const submitData = (event)=>{
       event.preventDefault() ;
       onAddBook(title,author,noInStock);
       setTitle("");
       setAuthor("");
       setnoInStock("");
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '10px', 
       marginTop: '20px',
    }
    return ( <div>
        
        <form onSubmit = {submitData} style={formStyle}>
            <input type="text" 
            required 
            placeholder="Book Title" 
            value={title} 
            onChange={(event)=>setTitle(event.target.value)} 
            />
            <input type="text"
            required 
            placeholder="Author" 
            value={author} 
            onChange={(event)=>setAuthor(event.target.value)}
            />
            <input type="text"
            required 
            placeholder="No of Books in Stock" 
            value={noInStock} 
            onChange={(event)=>setnoInStock(event.target.value)}
            />
            <button type="button" class="btn btn-primary">Add Book</button>
        </form>
    </div> );
}
 
export default NewBook;