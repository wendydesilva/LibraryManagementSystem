import Book from './book'
const BookList = ({books,onLike=f=>f,onRemoveBook=f=>f}) => {
    if(books.length == 0) return <h3>There are no Books</h3>
    return ( <>
       <table class="table">
        <thead>
            <tr>
                <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Number In Stock</th>
            <th>Price</th>
            <th>Year</th>           
            </tr>           
        </thead>
        <tbody>

              {books.map(bookObj=><Book
                key={bookObj._id}
                bookObj={bookObj}
              />)}
        </tbody>
       </table>
        
    </> );
}


 
export default BookList;
