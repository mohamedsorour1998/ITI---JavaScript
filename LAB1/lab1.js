var detailedUsers = [
  {
    firstName: "Ahmed",
    lastName: "Ali",
    dateOfBirth: "1995-10-10",
    address: "Alexadria, Egypt",
  },
  {
    firstName: "Hossam",
    lastName: "Mohamed",
    dateOfBirth: "1980-05-10",
    address: "Nasr City, Cairo, Egypt",
  },
  {
    firstName: "John",
    lastName: "James",
    dateOfBirth: "1975-03-05",
    address: "Nasr street, Nasr City, Cairo, Egypt",
  },
  {
    firstName: "Tarek",
    lastName: "Hassan",
    dateOfBirth: "1999-12-03",
    address: "15, street name, district, city, country",
  },
  {
    firstName: "Hussein",
    lastName: "Youssuf",
    dateOfBirth: "2005-12-03",
    address: "abc, street name, district, city, country",
  },
];

formattedUser(detailedUsers);

function formattedUser(x) {
  //The outer forEach() loop is used to iterate through the array of objects.
  x.forEach((user) => {
    fullName(user.firstName, user.lastName);
    calculateAge(user.dateOfBirth);
    formatAddress(user.address);
    //adding new line after each user
    console.log("\n");
  });
}

// name
function fullName(fn, ls) {
  console.log("fullName: " + fn + " " + ls);
}
// age
function calculateAge(dob) {
  //type conversion for dob from string to Date, and then we wrape it to object becasue primitve
  //data type can only store a single data, have no methods and are immutable
  let date1 = new Date(dob);
  let date2 = new Date();
  date2.toISOString().split("T")[0];
  let diffTime = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let age = diffDays / 365;
  age = Math.trunc(age);
  console.log("age:" + age);
}
// address
function formatAddress(address) {
  addresssplited = address.split(",");
  addresselement = addresssplited.length;
  switch (addresselement) {
    case 2:
      var country = addresssplited[1];
      var city = addresssplited[0];
      console.log("country: " + country + "\ncity: " + city);
      break;
    case 3:
      var country = addresssplited[2];
      var city = addresssplited[1];
      var district = addresssplited[0];
      console.log(
        "country: " + country + "\ncity: " + city + "\ndistrict: " + district
      );
      break;

    case 4:
      var country = addresssplited[3];
      var city = addresssplited[2];
      var district = addresssplited[1];
      var streetName = addresssplited[0];
      console.log(
        "country: " +
          country +
          "\ncity: " +
          city +
          "\ndistrict: " +
          district +
          "\nstreetName: " +
          streetName
      );
      break;

    case 5:
      //igonring building number
      if (isNaN(addresssplited[0])) {
        // it is not vaild
        var country = addresssplited[4];
        var city = addresssplited[3];
        var district = addresssplited[2];
        var streetName = addresssplited[1];
        console.log(
          "country: " +
            country +
            "\ncity: " +
            city +
            "\ndistrict: " +
            district +
            "\nstreetName: " +
            streetName
        );
        break;
      } else {
        // it is valid
        var country = addresssplited[4];
        var city = addresssplited[3];
        var district = addresssplited[2];
        var streetName = addresssplited[1];
        var buildingNumber = addresssplited[0];
        console.log(
          "country: " +
            country +
            "\ncity: " +
            city +
            "\ndistrict: " +
            district +
            "\nstreetName: " +
            streetName +
            "\nbuildingNumber: " +
            buildingNumber
        );
        break;
      }
  }
}
