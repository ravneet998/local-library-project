function getTotalBooksCount(books) {
  return books.length; // .length returns the number of books in the array
}

function getTotalAccountsCount(accounts) {
  return accounts.length; // .length returns the number of accounts in the array
}

function getBooksBorrowedCount(books) {
  return books.reduce((borrowCount, { borrows }) => { // .reduce method added to borrowed books, and is used to iterate through each book in array.
    const mostRecent = borrows[0];
    if (!mostRecent.returned) borrowCount++; // if most recent transaction of borrows have not been returned, the total borrow counter is increased.
    return borrowCount;
  }, 0);
}

function getMostCommonGenres(books) {
  let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5); // returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
}

function getMostPopularBooks(books) {
  return books
  .map((book) => { // map through each book in books
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5); // returns an array containing five objects or fewer that represents the most popular books in the library
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5); // returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
