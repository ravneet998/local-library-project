function findAccountById(accounts, id) { // returns the account object that has the matching ID
  let matchingId = accounts.find((account) => account.id === id); // .find method looks for matching id 
  return matchingId;                                
}

function sortAccountsByLastName(accounts) { // returns a sorted array of the provided account objects. the objects are sorted alphabetically by last name.
  accounts.sort((accountA, accountB) =>       accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) { // returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
  let totalBorrows = 0; // initialize a variable to 0 to increment
  for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) { // loop through books array to see if account id matches borrowed books id
    totalBorrows += 1;
   }
  }
 }
 return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
