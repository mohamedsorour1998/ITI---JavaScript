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
debugger;
var avalibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var avalibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

var i;
var l;

function drawBoard() {
  const divContainer = document.getElementById("board-holder");
  for (i = 1; i <= 8; i++) {
    avalibleLetters.forEach((element) => {
      l = element;
      let newDiv = document.createElement("div");
      newDiv.style.width = "15px";
      newDiv.style.height = "15px";
      newDiv.style.padding = "15px";
      newDiv.style.borderRadius = "1px";
      // newDiv.addEventListener("click", () => {
      //   alert("3aa");
      // });
      // newDiv.onclick = alert("aa");
      newDiv.id = `${l}${i}`;

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

const counter = document.getElementById("counter");
function startTimer() {
  //timer
  printXYrandom();
}
//2 recurision functions
function printXYrandom() {
  //print
}
function check() {
  //check
  //this
  // alert("3aaa");
}
function showScore() {
  //print
}
drawBoard();
function startGame() {
  //show clickable board
  drawBoard();
  //start timer
  startTimer();
  //show random x & y to instruct player

  //listen  to clicks on board
  //once clicked check if it correct or not , hide random x & y to instruct player
  //if it correct, add to score, show correct sign, show the next random x & y to instruct player
  //if it is not correct, show not correct sign, show the next random x & y to instruct player
  //when timer reaches 30 seconds stop accepting input
  //show final score
}
document.getElementById("btn").addEventListener("click", alert("f"));

// const div = document.getElementById("a1");
// div.addEventListener("click", alert("dii"));
