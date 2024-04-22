
function fetchBooks() {
  try {
    // Send a GET request to the API
    const response =  fetch('https://anapioficeandfire.com/api/books');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON response
    const books = response.json();
    
    // Call the renderBooks() function to render the book titles into the DOM
    renderBooks(books);
    return books.json();
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
