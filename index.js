/* const person = require('./person');
console.log(person.name);
 */

let objects = [
  { id: 1, value: 7 },
  { id: 2, value: 5 },
  { id: 3, value: 6 },
  { id: 4, value: 6 },
  { id: 5, value: 11 },
  { id: 6, value: 2 },
  { id: 7, value: 1 },
  { id: 8, value: 10 },
];

// Set initial values for the highest and lowest objects
let lowestObject = objects[0];
let highestObject = objects[0];

console.log(`Highest object: ${highestObject.value}`);
console.log(`Lowest object: ${lowestObject.value}`);
console.log('Running...');

while (objects.length > 0) {
  // Remove the first object from the array
  let object = objects.shift();

  // Compare the object's value to the current highest and lowest values
  if (object.value > highestObject.value) {
    highestObject = object;
  }
  if (object.value < lowestObject.value) {
    lowestObject = object;
  }
}
console.log(`Highest object: ${highestObject.value}`);
console.log(`Lowest object: ${lowestObject.value}`);
