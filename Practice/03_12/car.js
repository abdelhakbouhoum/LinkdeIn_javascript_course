/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Car {
  constructor(
    // Defines parameters:
    name,
    matricul,
    brand,
    model,
    placesNbr,
    color,
    motorType,
    motorHorseNbr
  ) {
    // Define properties:
    this.name = name;
    this.matricul = matricul;
    this.brand = brand;
    this.model = model;
    this.placesNbr = placesNbr;
    this.color = color;
    this.motor = {
      type: motorType,
      horseNbr: motorHorseNbr,
    };
  }
  // Add methods like normal functions:
  updateColor(newColor) {
    this.color = newColor;
  }
}

export default Car;
