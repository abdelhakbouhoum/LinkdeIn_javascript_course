/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  name: "Car",
  matricul: "123456-A-2",
  brand: "Reanault",
  model: "Megane",
  placesNbr: 5,
  color: "black",
  motor: {
    type: "Gazoil",
    horseNbr: 6,
  },
};

const client = {
  name: "Client",
  id: "AB262626",
  firstName: "Abdelhak",
  lastName: "BOUHOUM",
  gender: "Male",
  age: 30,
  nationality: "Moroccan",
  bornDate: "24/09/1983",
  Married: true,
};
