function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id); // .find to search for matching author id
  return found; // returns the author object that has the matching id
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id); // .find to search for matching book id
  return foundBooks // returns the book object that has the matching id
}

function partitionBooksByBorrowedStatus(books) { // returns an array with two arrays inside of it. all of the inputted books are present in either the first or second array.
  let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true) // book objects representing books that have been returned
 );
  
  let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false) // book objects representing books that are currently checked out
 );
  
  let lastArray = [[...booksBorrowed], [...booksReturned]];
 return lastArray;
}

function getBorrowersForBook(book, accounts) { 
return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}
// return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
