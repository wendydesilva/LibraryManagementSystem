import { useNavigate } from "react-router-dom";

const Book = ({bookObj,onDelete = (f) => f}) => {

    const navigate = useNavigate();
    const {_id,title,author,subject} = bookObj;

    const handleEdit = () => {
    
       navigate(`/updatebook/${_id}`);
  };

    return ( <tr>


         <td>{title}</td>
         <td>{author}</td>
         <td>{subject}</td>

   
        <td><button type="button" className="btn btn-danger" onClick={() => onDelete(bookObj._id)}>Delete</button></td>
        <td><button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button></td>
    </tr> );
}
export default Book;
