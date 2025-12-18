import { useState } from 'react'
import { fetchData } from '../fetchData.js';

const styles = {
    display:'flex', 
    justifyContent: 'center',
    alignItems: 'center',   
    minHeight: '75vh'
  }



const ExploreBooks = () => {

    return (
       <>
       <h1>Explore Books</h1>
       <input type="text"  id='subject' name="subject" placeholder='Enter the subject' />
       <button onClick={fetchData}>Click to browse Books</button>

       <div id='displayBooks'></div>
        </>
        
      );
}
export default ExploreBooks;