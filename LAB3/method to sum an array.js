/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
*/

Array.prototype.sum = function mysum() {
  //sum an array
  let result = 0;
  this.forEach((element) => {
    if (isNaN(element)) {
      // not a number
      console.log(`Target array must contain numbers only`);
    } else {
      // it is a number
      result = result + element;
    }
  });
  console.log(result);
};

[1, 2, 3].sum(); // Output: 6
