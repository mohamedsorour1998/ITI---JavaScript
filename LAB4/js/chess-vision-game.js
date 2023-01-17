/*
  Create a chess vision game like the one in this link: https://www.chess.com/vision

  Required Features:
  - The user clicks on the 'start' button, after that, a timer of 30 seconds starts.
  - During these 30 seconds, the game asks the user to click on a random square by telling
  the coordinates of this square as domenstrated in the link.
  - The user should click on the correct square.
  - If the clicked square matches the wanted square, it's considered a correct answer, and
  a green check mark is written next to it the the results section.
  - If it's wrong, a red cross mark is written next to it.
  - The score is always displayed and gets updated after every answer.
  - After the 30 seconds elapse, the board should not accept any clicks. and the final score
  is displayed.
  - The style of the page can be different from that in the link.

  Bonus Features:
  - Create two modes for the game. One for white, where the bottom row is considered the "1" row
  and the left column is considered the "a" column one for black where the bottom row is 
  considered the "8" row and the left row is considered the "h" row.
  - Create a mixed mode, where the game suggests for the user the square he/she should click
  on, and also the current direction of the board (white or black).
*/
startButton = document.getElementById("btn");
startButton.addEventListener("click", () => {
  startGame();
});
toggleBlack = document.getElementById("black");

function startGame() {
  inGameEvents();
  setTimeout(() => {
    endGame();
  }, 31000);
}
function inGameEvents() {
  drawBoard();
  drawXY();
  startTimer();
  showInstructions();
  // checkInput(targetId) is a call back function which activated automaticly on click!
}
function endGame() {
  alert("the game ended");
  // removeBoard();
  // restScore();
  // restTimer();
}

//Global Vaiabels
var avalibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var avalibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
var orders;
var i;
var l;
var globalDivId;
var globalDiv;
var divContainer = document.getElementById("board-holder");

//functions implementations
function drawBoard() {
  for (i = 1; i <= 8; i++) {
    avalibleLetters.forEach((element) => {
      l = element;
      let newDiv = document.createElement("div");
      newDiv.style.width = "15px";
      newDiv.style.height = "15px";
      newDiv.style.padding = "15px";
      newDiv.style.borderRadius = "1px";
      newDiv.id = `${l}${i}`;
      globalDivId = newDiv.id;
      globalDiv = newDiv;

      newDiv.addEventListener("click", (event) => {
        //passing event.target.id as argument for the call back function, to be used in
        //it to know which element had been called and it's id
        checkInput(event.target.id);
      });
      if (
        i % 2 == 0 &&
        (l == avalibleLetters[0] ||
          l == avalibleLetters[2] ||
          l == avalibleLetters[4] ||
          l == avalibleLetters[6])
      ) {
        newDiv.style.background = "#33FF44";
      } else if (
        i % 2 != 0 &&
        (l == avalibleLetters[1] ||
          l == avalibleLetters[3] ||
          l == avalibleLetters[5] ||
          l == avalibleLetters[7])
      ) {
        newDiv.style.background = "#33FF44";
      } else {
        newDiv.style.background = "#CCCCCC";
      }
      divContainer.appendChild(newDiv);
    });
  }
}
function drawXY() {
  //print x
  divContainer.children[0].innerHTML = `${divContainer.children[0].id
    .split("")
    .reverse()
    .join("")}`;
  for (let i = 1; i < 8; i++) {
    divContainer.children[i].innerHTML = `${
      divContainer.children[i].id.split("")[0]
    }`;
  }
  //print y
  for (let j = 8; j < 64; j += 8) {
    divContainer.children[j].innerHTML = `${
      divContainer.children[j].id.split("")[1]
    }`;
  }
}
function startTimer() {
  const counter = document.getElementById("counter");
  var x = setInterval(() => {
    // edit in timer element
    currentTime = Number(`${counter.innerHTML}`.split(":")[1]);
    Nexttime = currentTime - 1;
    counter.innerHTML = `00:${String(Nexttime)}`;
    if (Nexttime == 0) {
      clearInterval(x);
    }
  }, 1000);
}
function showInstructions() {
  //give the player a random div to click
  let instructions = [];
  let instructionView = document.getElementById("instruction");
  const randomX =
    avalibleLetters[Math.floor(Math.random() * avalibleLetters.length)];
  const randomY =
    avalibleNumbers[Math.floor(Math.random() * avalibleNumbers.length)];
  instructions.push(randomX);
  instructions.push(randomY);
  instructions = instructions.join("");
  instructionView.innerHTML = `Click on : ${instructions}`;
  orders = instructions;
  instructions = instructions.split("");
  instructions.pop();
  instructions.pop();
}
function checkInput(targetId) {
  //validate input of the calller this matches the shown instructions
  if (targetId == orders) {
    //if it correct, add to score, show correct sign, show the next random x & y to instruct player
    //add to score
    let score = document.getElementById("score-board");
    let currentScore = Number(`${score.innerHTML}`.split(":")[1]);
    nextScore = currentScore + 1;
    score.innerHTML = `score:${String(nextScore)}`;
    // show correct sign
    const parent = document.getElementById("imgContainer");
    const img = document.createElement("img");
    img.src = "./../img/tick.jpg";
    img.style.padding = "15px";
    parent.appendChild(img);
    //show the next random x & y to instruct player
    showInstructions();
  } else {
    //if it is not correct, show not correct sign, show the next random x & y to instruct player
    const parent = document.getElementById("imgContainer");
    const img = document.createElement("img");
    img.src = "./../img/cross.jpg";
    img.style.padding = "15px";
    parent.appendChild(img);
    //show the next random x & y to instruct player
    showInstructions();
  }
}
function toggleWhiteBlack() {
  //enable white/black
  alert("iam black!");
}
function removeBoard() {
  //remove board
  //my brodther farhood told me to remove event listner from each element
}
function restScore() {
  //remove board
  //my brodther farhood told me to remove event listner from each element
}
function restTimer() {
  //remove board
  //my brodther farhood told me to remove event listner from each element
}
