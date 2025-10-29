

const Book = ({bookObj,onLike = f => f, onRemove=f=>f}) => {

    const {_id,title,author,numberInStock} = bookObj;
    return ( <tr>

         <td>{_id}</td>
         <td>{title}</td>
         <td>{author}</td>
         <td>{numberInStock}</td>

   
        <td><button type="button" class="btn btn-danger" onClick=''>Delete</button></td>
        <td><button type="button" class="btn btn-warning">Edit</button></td>
    </tr> );
}
export default Book;
