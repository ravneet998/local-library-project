# local-library-project

In this scenario, my neighborhood wants to create a local library. One of the most important features to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program. I am tasked with building a number of different algorithms that will help complete an administrative site for a local library. All of the functions will work on three common datasets. The datasets are related, and at times, I need to work with multiple datasets to solve the problem at hand. 

The learning objectives include:
- Differentiate between the three most common JavaScript error types.
- Solve bugs by using error messages.
- Differentiate between let, const, and var, and use each appropriately.
- Create an array from a string based on particular criteria and join arrays into strings.
- Write strings that embed expressions using template literals.
- Access all the values and keys of an object.
- Use find(), filter(), map(), some(), and every() to solve different problems.
- Use reduce() to solve different problems.
- Use sort() to sort arrays in various ways.

Regarding datasets, there are three: accounts, authors, and books.


**Accounts**

You can view all of the accounts data inside of the public/data/ directory. Each account is an object with the following shape:

{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}
An account represents a person who is registered with the library. Accounts can take out and return books.


**Authors**

You can view all of the authors data inside of the public/data/ directory. Each author is an object with the following shape:

{
  "id": 0,
  "name": {
    "first": "Lucia",
    "last": "Moreno"
  }
}

An author represents someone who wrote one or more books in the library.

Note: Author's IDs are set to be numbers, whereas the other two datasets use string IDs.


**Books**

<p> You can view all of the books data inside of the public/data/ directory. Each book is an object with the following shape: </p>

{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}

Each book represents a physical book but also contains additional information. In particular:

The author Id matches up with an author. It represents who wrote the book.
The borrows array is a list of transactions that have occurred with this book. For example, the above book has been borrowed three times.
The id for each "borrow" record matches with an account ID. In the above example, the account with an ID of "5f446f2e2a4fcd687493a775" has not yet returned the book, meaning they still are in possession of it.
