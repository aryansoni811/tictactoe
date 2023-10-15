const { ticTacToe } = require("./tictactoe");

const play = ticTacToe("Messi", "Ronaldo");

const printBoard = (board) => {
  console.log(` ${board[1] || "_"} ${board[2] || "_"} ${board[3] || "_"}`);
  console.log(` ${board[4] || "_"} ${board[5] || "_"} ${board[6] || "_"}`);
  console.log(` ${board[7] || "_"} ${board[8] || "_"} ${board[9] || "_"}`);
  console.log(board[0]);
};


let result, board, currentMove;
const playerX = "X";
const playerO = "O";

[result, board] = play("X", 8);
printBoard(board);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i =1;
while (board[0] === "ongoing"){
    readline.question(`Enter Your Move ${i%2===0?playerX:playerO}`, currentMove => {
      [result, board] = play("O", currentMove);
      if (result) {
        printBoard(board);
      } else console.log(board);
    });
}