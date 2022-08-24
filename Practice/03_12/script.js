/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Car from "./car.js";
const everydayCar = new Car(
  "Car",
  "123456-A-2",
  "Reanault",
  "Megane",
  5,
  "black",
  "Gazoil",
  6
);

console.log("the everydayCar object:", everydayCar);
console.log("The Matricule is:", everydayCar.matricul);
console.log("The Matricule is:", everydayCar.model);
