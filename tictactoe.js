const ticTacToe = (xName, oName) => {
  const X = "X";
  const O = "O";
  let currentPlayer = X;

  const players = {
    X: xName,
    O: oName,
  };

  const nextPlayer = {
    X: O,
    O: X,
  };

  //visual representation of data structure
  const board = [
    "ongoing",
    // "_", "_", "_",
    // "_", "_", "_",
    // "_", "_", "_"
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const isValidMove = (move) => {
    return 1 <= move && move <= 9 && board[move] === "";
  };

  const computStatus = () => {
    //ongoing, winX, winO, draw
    let result = "ongoing";
    //check for a win O
    //check for a win X
    const combo = [
      //row
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      //column
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      //diagonals
      [1, 5, 9],
      [3, 5, 7],
    ];
    // tried this bit on my own
    for (let i = 0; i < combo.length; i++) {
      let l = combo[i][0];
      let m = combo[i][1];
      let n = combo[i][2];

      if (board[l] === "X" && board[m] === "X" && board[n] === "X") {
        return "winX";
      } else if (board[l] === "O" && board[m] === "O" && board[n] === "O") {
        return "winO";
      }
    }
    //check for draw
    // first we assume that all cells are filled
    let allCellsFilled = true;
    // then we check if any of the cell is empty
    for (let i = 1; i <= 9; i++) {
      if (board[i] === "") {
        allCellsFilled = false;
        break;
      }
    }
    //if any of the cell if empty we break the loop
    // and return game status as "ongoing"
    if (allCellsFilled) return "draw";

    //swanand sir's version
    // let allCellsFilled = false;
    // for (let i = 1; i <= 9; i++) {
    //   if (board[i] !== "") {
    //     allCellsFilled = true;
    //   }
    // }
    // if (allCellsFilled) return "draw";

    return "ongoing";
  };

  return (player, move) => {
    //validate the right player
    if (player !== currentPlayer) {
      return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
    }
    //validate the right move
    if (!isValidMove(move)) {
      return [false, "Invalid move, try again"];
    }

    board[move] = currentPlayer;
    board[0] = computStatus();
    currentPlayer = nextPlayer[currentPlayer];
    //advance the game:
    // 1. update the board
    // 2. compute the game status
    // 3. next player turn
    return [true, board];
  };
};

module.exports = { ticTacToe };
