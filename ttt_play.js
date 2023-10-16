const { ticTacToe } = require("./tictactoe");
const readline = require("readline");

let rl;

const play = ticTacToe("Messi", "Ronaldo");

const printBoard = (board) => {
  console.log(` ${board[1] || "_"} ${board[2] || "_"} ${board[3] || "_"}`);
  console.log(` ${board[4] || "_"} ${board[5] || "_"} ${board[6] || "_"}`);
  console.log(` ${board[7] || "_"} ${board[8] || "_"} ${board[9] || "_"}`);
  console.log(board[0]);
};
//for input and output
function getInput(prompt, callback) {
  rl.question(prompt, callback);
}

let result, board;

const playGame = () => {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 1;

  const nextMove = (i) => {
    getInput(
      `Enter your move player ${i % 2 === 0 ? "O" : "X"}:`,
      (currentMove) => {
        [result, board] = play(`${i % 2 === 0 ? "O" : "X"}`, currentMove);
        if (result) {
          printBoard(board);
        } else console.log(board);

        if (result === false) {
          nextMove(i);
        } else if (board[0] === "ongoing") {
          i++;
          nextMove(i);
        } else {
          console.log("Game Finished");
        }
      }
    );
  };
  console.log("X has first turn : ");
  nextMove(i);
};
playGame();
