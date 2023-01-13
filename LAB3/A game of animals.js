/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 

  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false. 
*/
// using ES5 function constructors
/*
let noOfObjects = 0;
function Animals(color, weight) {
  if (noOfObjects > 100) {
    throw `Error Max Number of Animals That Can Be Created are 100`;
  } else {
    this.color = color;
    this.weight = weight;
    noOfObjects++;
  }
}
Animals.prototype.eat = () => console.log(`I'm Eatting`);
Animals.prototype.run = () => console.log(`I'm Running`);
Animals.prototype.walk = () => console.log(`I'm Walking`);
Animals.prototype.attack = () => console.log(`I'm Attacking`);

function Bird(color, weight) {
  Animals.call(this, color, weight);
}
Object.setPrototypeOf(Bird.prototype, Animals.prototype);
Bird.prototype.fly = () => console.log(`I'm Flying`);
*/
// using ES6 classes
let noOfObjects = 0;

class Animals {
  constructor(color, weight) {
    if (noOfObjects > 100) {
      throw `Error Max Number of Animals That Can Be Created are 100`;
    } else {
      this.color = color;
      this.weight = weight;
      noOfObjects++;
    }
  }
  eat() {
    console.log(`I'm Eatting`);
  }
  run() {
    console.log(`I'm Running`);
  }
  walk() {
    console.log(`I'm Walking`);
  }
  attack() {
    console.log(`I'm Attacking`);
  }
}

class Bird extends Animals {
  constructor(color, weight) {
    super(color, weight);
  }
  flying() {
    console.log(`I'm Flying`);
  }
}

let cat = new Animals(`black`, 50);
let dog = new Animals(`white`, 70);
let eagle = new Bird(`white`, 5);

cat.attack();
isBird(cat);

function isBird(x) {
  if (x instanceof Bird) {
    return true;
  } else {
    return false;
  }
}
