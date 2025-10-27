

const Book = ({bookObj,onLike = f => f, onRemove=f=>f}) => {

    const {_id,title,category,author,numberInStock,price,publishYear} = bookObj;
    return ( <tr>

         <td>{_id}</td>
         <td>{title}</td>
         <td>{category.name}</td>
         <td>{author}</td>
         <td>{numberInStock}</td>
         <td>{price}</td>
         <td>{publishYear}</td>
   
        <td><button type="button" class="btn btn-danger" onClick=''>Delete</button></td>
    </tr> );
}
export default Book;
