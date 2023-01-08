var input = "abbflMffchocCb19 ieqvh";
numberOfOcurrences(input);

function numberOfOcurrences(x) {
  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    //charAt returns charcter at specfic index
    let char = x.charAt(i);
    for (let j = 0; j < x.length; j++) {
      if (char === x.charAt(j)) {
        counter++;
      }
    }
    if (char === " ") {
      console.log(`white spaces occured ${counter} times`);
      counter = 0;
    } else if (counter == 2) {
      console.log(`${char} occured twice`);
      counter = 0;
    } else if (counter == 1) {
      console.log(`${char} occured once`);
      counter = 0;
    } else {
      console.log(`${char} occured ${counter} times`);
      counter = 0;
    }
  }
}
