import { books as bookService } from '../assets/bookService.js'
import BookList from '../components/bookList'

const headerStyles = {
  textAlign:'center'
}
const ManageBooks = ({bookObj}) => {

  
    return (
        <>
           <h1 style={headerStyles}>Manage Books</h1>
           <BookList books={bookService}/>
        </>
      );
}
export default ManageBooks;