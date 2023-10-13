const { ticTacToe } = require("./tictactoe");

const play = ticTacToe("Messi", "Ronaldo");

const printBoard = (board) => {
  console.log(` ${board[1] || "_"} ${board[2] || "_"} ${board[3] || "_"}`);
  console.log(` ${board[7] || "_"} ${board[5] || "_"} ${board[6] || "_"}`);
  console.log(` ${board[4] || "_"} ${board[8] || "_"} ${board[9] || "_"}`);
};

// let bLine = [];
// const printBoard = () => {
//   for (let i = 1; i <= 9; i++) {
//     bLine.push(board[i]);
//     if (i % 3 === 0) console.log(`${bLine}\n`);
//   }
// };
let result, board;

[result, board] = play("X", 5);
printBoard(board);

[result, board] = play("X", 5);
if (result) {
  printBoard(board);
} else console.log(board);
