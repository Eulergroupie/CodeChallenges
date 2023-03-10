/* Edabit
JavaScript doesn't really have classes like other languages. They are actually
functions behind the scenes. There are several ways to create classes.

Challenge
Create a Book class using a JavaScript function - instantiable.
It should have an author and published property.

Create an Author class using a literal object - singleton.

It should have a name and books property.

Create a Publisher class by using the new constructor and an anonymous function
 - singleton.

It should have an authors and books property.

Create a Review class using a class declaration - instantiable.

It should have a rating and user property.
Bonus (optional)
Create a Bookstore class using an IIFE - singleton. It should have a books and
 prices property.

Notes
All classes should begin with Capital letters.
All class properties should have default(initial) values.
There are a few other ways to make classes but are not in this challenge, you
 can check the Resources tab to learn more.
*/

function Book(author, published) {
  [this.author, this.published] = [author, published]; 
}
var Author = {
  name: "Mark Twain",
  books: "Tom Sawyer",
  getInfo: function() {
    return this.name + ', By ' + this.Author;
  }
}
var Publisher = new function(authors, books) {
    [this.authors, this.books] = [authors, books];
    this.getInfo = function() {
      return this.authors + ' ' + books;
    }
}
class Review {
  constructor(rating, user) {
    [this.rating, this.user] = [rating, user];
  }
}
// IIFE Immediately Invoked Function Expression
const Bookstore = (function() {
  return {
    books : 'books',
    prices : 'prices' 
  } 
})();

let book = new Book;
let review = new Review;

// Testing
console.log()