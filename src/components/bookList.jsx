import Book from './book'
const BookList = ({books,onDelete = (f) => f}) => {
    if(books.length == 0) return <h3>There are no Books</h3>
    return ( <>
       <table className="table">
        <thead>
            <tr>
              
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
          
            </tr>           
        </thead>
        <tbody>

              {books.map(bookObj=><Book
                key={bookObj._id}
                bookObj={bookObj} onDelete={onDelete}
              />)}
        </tbody>
       </table>
        
    </> );
}


 
export default BookList;
