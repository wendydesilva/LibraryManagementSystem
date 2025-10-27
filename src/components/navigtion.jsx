import Logo from '../assets/images/logo.png';
import ManageBooks from './ManageBooks.jsx';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    const navContentstyles = {

        flexGrow: 1, 
        justifyContent: 'flex-end',
        color:'white'
    }
    const navStyles = {
        backgroundColor: '#283954'
    }
    return ( 
    
<nav className="navbar navbar-expand-lg navbar-dark" style={navStyles}>
   <div className="container-fluid">
     <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" style={{ height: '60px', width:'60px'}} /></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav" style={navContentstyles}>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/manage-books">Manage Books</NavLink>
            <NavLink className="nav-link" to="/add-book">Add Book</NavLink>
            <NavLink className="nav-link" to="/api-books">Explore Books</NavLink>
       
       </div>
     </div>
   </div>
 </nav>


     );
}
 
export default Navigation;