class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }
  payBook(bookName) {
    const book = this.books.find((x) => x.bookName === bookName);
    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.payed) {
      throw new Error(`${bookName} has already been paid."`);
    }
    book.payed = true;
    return `${bookName} has been successfully paid.`;
  }
  removeBook(bookName) {
    const book = this.books.find((x) => x.bookName === bookName);
    if (!book) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (!book.payed) {
      throw new Error(`${bookName} need to be paid before removing from the collection.`);
    }
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
    return `${bookName} remove from the collection.`;
  }
  getStatistics(bookAuthor) {
    const resArr = [];
    if (!bookAuthor) {
      resArr.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
      this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
      this.books.forEach((book) => {
        resArr.push(
          `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`
        );
      });
      return resArr.join("\n");
    }
    const authorsBook = this.books.find((x) => x.bookAuthor === bookAuthor);
    if (!authorsBook) {
      throw new Error(`${bookAuthor} is not in the collection.`);
    }
    return `${authorsBook.bookName} == ${authorsBook.bookAuthor} - ${
      authorsBook.payed ? "Has Paid" : "Not Paid"
    }.`;
  }
}
const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cervantes"));
