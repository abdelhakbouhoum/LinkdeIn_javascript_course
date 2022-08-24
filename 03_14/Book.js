class Book {
  constructor(name, author, isbn, language, pagesNbr, rentStatus) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.language = language;
    this.pagesNbr = pagesNbr;
    this.rentStatus = rentStatus;
  }
  toggleRent(rentalOk) {
    this.rentStatus = rentalOk;
  }
}

export default Book;
