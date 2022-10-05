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
  let c = parseInt(coords[0])

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
}