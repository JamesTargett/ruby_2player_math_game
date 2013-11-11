var player1Lives = 3;
var player2Lives = 3;
var currentPlayer = 1;
 
function checkLives(){
  if ((player1Lives > 0) && (player2Lives > 0)) {
    return true;
  } else {
    return false;
  }
}
 
function getAnswer(operator, x, y) {
  if (operator == 1) {
    operator = " + ";
  } else if (operator == 2) {
    operator = " - ";
  } else {
    operator = " x ";
  }
 
  return prompt("Player " + currentPlayer + ": What does " + x + operator + y + " equal?") ;
}
 
function switchPlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
    alert("You have " + player1Lives + " lives remaining");
  } else {
    currentPlayer = 1;
    alert("You have " + player2Lives + " lives remaining");
  }
}
 
function calculateAnswer(op, x, y) {
  if (op == 1) {
    return x + y;
  } else if (op == 2) {
    return x - y;
  } else {
    return x * y;
  }
}
 
function announceWinner() {
  if (player1Lives == 0) {
    alert("Player 2 wins!");
  } else {
    alert("Player 1 wins!");
  }
}
 
function checkAnswer(answer, rightAnswer) {
  if (answer == rightAnswer) {
    alert("Correct.");
  } else {
    if (currentPlayer == 1) {
      player1Lives -= 1;
      alert("Wrong! " + player1Lives + " lives left!");
    } else {
      player2Lives -= 1;
      alert("Wrong! " + player2Lives + " lives left!");
    }
  }
}
 
do {
 
  var x  = Math.floor(Math.random() * 20) + 1;
  var y  = Math.floor(Math.random() * 20) + 1;
  var op = Math.floor(Math.random() * 3)  + 1;
  
  var rightAnswer = calculateAnswer(op, x, y);
  var answer = getAnswer(op, x, y);
 
  checkAnswer(answer, rightAnswer);
  switchPlayer();
 
} while (checkLives() == true )
 
announceWinner();