/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const historyBook = new Book(
  "Book of History",
  "Historian Author",
  "ABHYDI256-45",
  "Arabic",
  586,
  true
);

const scienceBook = new Book(
  "Book of Science",
  "Science Author",
  "SCIYDI256-22",
  "English",
  255,
  false
);

const geoBook = new Book(
  "Book of Geography",
  "Geography Author",
  "GIOYDI263-71",
  "Frensh",
  539,
  false
);

const philoBook = new Book(
  "Book of Philosofy",
  "Philosofy Author",
  "PHILODI852-12",
  "Arabic",
  216,
  true
);

const langBook = new Book(
  "Book of Language",
  "Language Author",
  "LANGUAI555-44",
  "Arabic",
  963,
  true
);

console.log("The book of history object:", historyBook);
console.log("The Author of the book of history :", historyBook.author);

console.log("The book of Science object:", scienceBook);
console.log("The Author of the book of Science :", scienceBook.author);

console.log("The book of Geography object:", geoBook);
console.log("The Author of the book of Geography :", geoBook.author);

console.log("The book of Philosofy object:", philoBook);
console.log("The Author of the book of Philosofy :", philoBook.author);

console.log("The book of Language object:", langBook);
console.log("The Author of the book of Language :", langBook.author);
