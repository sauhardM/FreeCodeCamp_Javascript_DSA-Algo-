// Refactor Global Variables Out of Functions

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

  const listOfBooks = bookList.slice(0,bookList.length);
  listOfBooks.push(bookName);
  return listOfBooks;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList,bookName) {

  const listOfBooks = bookList.slice(0,bookList.length);
  const book_index = listOfBooks.indexOf(bookName);
  if (book_index >= 0) {

    listOfBooks.splice(book_index, 1);
    return listOfBooks;

    // Change code above this line
    }
}

