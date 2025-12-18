export async function fetchData(){
    
    const subject = document.getElementById("subject").value;
    const displayResults = document.getElementById("displayBooks");

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        displayResults.innerHTML = "";

        data.items.forEach(book => {
            displayResults.innerHTML += `<div>
            
              <img src="${book.volumeInfo.imageLinks.thumbnail}">
              <p><strong>Title:</strong> ${book.volumeInfo.title}</p>
              <p><strong>Description:</strong> ${book.volumeInfo.description}</p>
              <p><strong>Publisher:</strong> ${book.volumeInfo.publisher}</p>
              <p><strong>Published Date:</strong> ${book.volumeInfo.publishedDate}</p>
               <p><strong>Ratings:</strong> ${book.volumeInfo.ratingsCount}</p>
               <p><a href="${book.volumeInfo.previewLink}">Preview</a></p>


            </div>`
        });

        
    }catch(error){

        console.error("error",error);
    }
    

}