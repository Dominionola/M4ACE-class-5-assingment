// Arrow Functions & Context - Convert traditional functions to arrow functions, practice different arrow function syntaxes with various parameter counts and return types

// function getArea(width, height) {
//   return width * height;
// }

const getArea = (width, height) => {
  return width * height;
};

console.log(getArea(2, 2));

// function isPositive(number) {
//   return number > 0;
// }

const isPositive = (number) => {
  return number > 0;
};

console.log(isPositive(-10));

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDice());

// function createCar(brand, color) {
//   return { make: brand, paint: color };
// }

const createCar = (brand, color) => {
  return { make: brand, paint: color };
};

console.log(createCar("Gucci", "Red"));
