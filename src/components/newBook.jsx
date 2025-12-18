import { useState } from "react";
const NewBook = ({onAddBook=f=>f}) => {

    const [title, setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [subject,setSubject] = useState("");
    const submitData = (event)=>{
       event.preventDefault() ;
       onAddBook({
          title,
          author,
          subject,
});
       setTitle("");
       setAuthor("");
       setSubject("");
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
            placeholder="Subject" 
            value={subject} 
            onChange={(event)=>setSubject(event.target.value)}
            />
            <button type="submit" class="btn btn-primary">Add Book</button>
        </form>
    </div> );
}
 
export default NewBook;