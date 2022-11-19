$(function () {
  const arrBoard1 = [1, 14, 9, 3, 12, -1, 2, 6, 7, 10, 11, 4, 15, 5, 13, 8];
  const boardPuzzle1 = document.querySelector("#slidePuzzle1");
  play(boardPuzzle1, arrBoard1);

  const arrBoard2 = [1, 14, 9, 3, 12, -1, 2, 6, 7, 10, 11, 4, 15, 5, 13, 8];
  const boardPuzzle2 = document.querySelector("#slidePuzzle2");
  play(boardPuzzle2, arrBoard2);

  const arrBoard3 = [7, 2, 6, 8, -1, 1, 4, 3, 5];
  const boardPuzzle3 = document.querySelector("#slidePuzzle3");
  play2(boardPuzzle3, arrBoard3);
});

function play(board, boardArr) {
  var squares = board.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      var firstPos = parseInt(e.target.dataset.pos);
      var empty = board.querySelectorAll(".empty")[0];
      var secondPos = parseInt(empty.dataset.pos);

      var top = secondPos - 4;
      var bottom = secondPos + 4;
      var left = secondPos - 1;
      var right = secondPos + 1;

      if ((secondPos % 4) - (left % 4) < 1) {
        left = -1;
      }
      if ((right % 4) - (secondPos % 4) < 1) {
        right = -1;
      }
      var posibilities = [left, right, top, bottom];

      if (posibilities.includes(firstPos)) {
        empty.dataset.pos = firstPos;
        e.target.dataset.pos = secondPos;

        var value1 = boardArr[secondPos];
        var value2 = boardArr[firstPos];

        boardArr.splice(secondPos, 1, value2);
        boardArr.splice(firstPos, 1, value1);

        isFinished(boardArr);
      }
    });
  });
}

function play2(board, boardArr) {
  var squares = board.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      var firstPos = parseInt(e.target.dataset.id);
      var empty = board.querySelectorAll(".empty")[0];
      var secondPos = parseInt(empty.dataset.id);
      // console.log(e.target.dataset.id);
      // console.log(empty.dataset.id);

      var top = secondPos - 3;
      var bottom = secondPos + 3;
      var left = secondPos - 1;
      var right = secondPos + 1;

      if ((secondPos % 3) - (left % 3) < 1) {
        left = -1;
      }
      if ((right % 3) - (secondPos % 3) < 1) {
        right = -1;
      }
      var posibilities = [left, right, top, bottom];

      // console.log(posibilities.includes(firstPos));
      if (posibilities.includes(firstPos)) {
        empty.dataset.id = firstPos;
        e.target.dataset.id = secondPos;

        var value1 = boardArr[secondPos];
        var value2 = boardArr[firstPos];

        boardArr.splice(secondPos, 1, value2);
        boardArr.splice(firstPos, 1, value1);

        isFinished(boardArr);
      }
    });
  });
}

function isFinished(boardArr) {
  for (i = 0; i < boardArr.length - 1; i++) {
    if (boardArr[i] != i + 1) {
      return false;
    }
  }
  // alert("Game over");
  return true;
}
