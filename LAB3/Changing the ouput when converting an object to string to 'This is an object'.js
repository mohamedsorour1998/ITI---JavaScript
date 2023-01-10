/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
*/

Object.prototype.toString = function error() {
  if (typeof this === "object") {
    return `This is an object`;
  }
};
const obj = {};
String(obj); // Output: 'This is an object'.

// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
const obj1 = { message: "This is a message" };
const obj2 = {};

Object.prototype.toString = function msg() {
  if (typeof this === "object") {
    if (this.hasOwnProperty("message")) {
      return this.message;
    } else {
      return `This is an object`;
    }
  }
};

String(obj1); // Output: 'This is a message'.
String(obj2); // Output: 'This is an object'.
