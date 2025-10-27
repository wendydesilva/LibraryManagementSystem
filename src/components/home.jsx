import Book from '../assets/images/book.jpg';
const Home = () => {

    const style = {
        textAlign:'center'
    }
return(
<div style={style}>
    <h1>Welcome to BookHive Library Management System</h1>
    <p>Manage, add and explore books easily</p>
    <img src={Book} alt="Book" width={'300px'} height={'300px'}/>
</div>
);

    
  
    
}
 
export default Home;