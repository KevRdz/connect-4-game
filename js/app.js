let playerRed = "R"
let playerYellow = "Y"
let currentPlayer = playerRed

let gameOver = false
let board
let currentColumns

let rows = 6
let columns = 7

// window.onload = function(){
//   init()
// }

init()

function init(){
  board = []
  currentColumns = [5, 5, 5, 5, 5, 5, 5]

  for (let r = 0; r < rows; r++){
    let row = []
    for (let c = 0; c < columns; c++){
      row.push(' ')

      let tile = document.createElement("div")
      tile.id = r.toString() + "-" + c.toString()
      tile.classList.add("tile")
      tile.addEventListener("click", setChip)
      document.getElementById("board").append(tile)
    }
    board.push(row)
  }
}

function setChip(){
  if (gameOver){
    return
  }
  let coords = this.id.split("-")
  let r = parseInt(coords[0])
  let c = parseInt(coords[1])

  r = currentColumns[c]
  if (r < 0){
    return
  }

  board[r][c] = currentPlayer
  let tile = document.getElementById(r.toString() + "-" + c.toString())
  if (currentPlayer == playerRed){
    tile.classList.add("red-chip")
    currentPlayer = playerYellow
  }
  else {
    tile.classList.add("yellow-chip")
    currentPlayer= playerRed
  }

  r -= 1;
  currentColumns[c] = r;

  checkWinner();
}

function checkWinner(){
  // horizontally
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < columns - 3; c++){
      if (board[r][c]!= ' '){
        if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){
          setWinner(r, c)
          return
        }
      }
    }
  }

  // vertically
  for (let c = 0; c < columns; c++){
    for (let r = 0; r < rows-3; r++){
      if (board[r][c] != " "){
        if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
          setWinner(r, c)
          return
        }
      }
    }
  }
  // anti diagonally
  for (let r = 0; r < rows - 3; r++){
    for (let c = 0; c < columns - 3; c++){
      if (board[r][c] != " "){
        if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
          setWinner(r, c)
          return
        }
      }
    }
  }
  // diagonally
  for (let r = 3; r < rows; r++){
    for (let c = 0; c < columns - 3; c++){
      if (board[r][c] != " "){
        if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
          setWinner(r, c)
          return
        }
      }
    }
  }

}

function setWinner(r, c){
  let winner = document.getElementById("winner")
  if (board[r][c] == playerRed){
    winner.innerText = "Red Wins!!"
  } else {
    winner.innerText = "Yellow Wins!!"
  }

  gameOver = true
}