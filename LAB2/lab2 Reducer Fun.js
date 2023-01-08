var formattedUsers = [
  {
    fullName: "Ahmed Ali",
    age: 27,
    country: "Egypt",
    city: "Alexadria",
  },
  {
    fullName: "Hossam Mohamed",
    age: 42,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
  },
  {
    fullName: "John James",
    age: 47,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
    streetName: "Nasr street",
  },
  {
    fullName: "Tarek Hassan",
    age: 23,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
    buildingNumber: 15,
  },
  {
    fullName: "Hussein Youssuf",
    age: 17,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
  },
];
// Write the implementation of reducerFunc.
//get user who have an age less than 40
var userAges = [];
formattedUsers.forEach((user) => {
  if (user.age < 40) {
    userAges.push(user.age);
  }
});

function reducerFunc(accumulator, currentValue) {
  //reduce
  accumulator = accumulator + currentValue;
  return accumulator;
}

var average = userAges.reduce(reducerFunc, 0) / userAges.length;
console.log("the average is: " + average + " years");
