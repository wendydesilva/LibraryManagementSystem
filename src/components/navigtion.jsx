import Logo from '../assets/images/logo.png';
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
         <a className="nav-link" href="#">Home</a>
         <a className="nav-link" href="#">Manage Books</a>
         <a className="nav-link" href="#">Add Book</a>
         <a className="nav-link" href="#">Explore Books</a>
       
       </div>
     </div>
   </div>
 </nav>


     );
}
 
export default Navigation;