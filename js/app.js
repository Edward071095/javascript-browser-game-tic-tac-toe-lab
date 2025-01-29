//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/
const choices = ['X', 'O', ' ']
const winningCombos = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 6,],
    [0, 4, 8,],
    [2, 4, 6,],
]

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '',]
let turn = 'X';
let winner = true;
let tie = true;

/*------------------------ Cached Element References ------------------------*/

const squaredEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('#message')
const resetBtnEl = document.querySelector('#Reset Button')

/*-------------------------------- Functions --------------------------------*/
function init() {


    render()
};


function render() {
    updateBoard()
    updateMessage()
};


function updateBoard() {
    board.forEach((square, index) => {
        squaredEls[index]
        console.log(squaredEls[index])
        console.log(square)
        if (square === 'X') {
            squaredEls[index].innerText = 'X'
        } else if (square === 'O') {
            squaredEls[index].innerText = 'O'
        }
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEls.innerText = 'it is X turn'
    } else if (winner === false && tie === true) {
        messageEls.innerText = 'tie game'
    } else {
        messageEls.innerText = 'you are the winner'
    }
}

function handleClick(event){
    console.log("it works")
  const squareIndex = event.target.id;
  console.log(winner);
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
 if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
    return
  }
  if (winner === true){
    return
  } 

};

function placePiece (index) {
    board[index] = turn 
    console.log(board)
};

function checkForWinner () {
    if ( 
         (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) ||
         (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) ||  
         (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) ||
         (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) ||
         (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) ||
         (board[2] !== "" && board[2] === board[5] && board[2] === board[6]) ||
         (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) ||
         (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) 
     ) { 
                  winner = true;
        }
};

function checkForTie () {
    if (winner = true) {
        return; 
    } else if (board[index] = "") {
        tie = false
    } else {
        tie = true
    }
};

function switchPlayerTurn () {
    if (winner) {
        return; 
    }
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
};


/*----------------------------- Event Listeners -----------------------------*/
squaredEls.forEach(square => {
    square.addEventListener('click', handleClick);
});
resetBtnEl.addEventListener('click', init);
init()







