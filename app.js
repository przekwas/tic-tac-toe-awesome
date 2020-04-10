const cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let currentPlayer = 'X';
let isGameOver = false;
let moves = 0;

function cellClicked(e) {

    if(isGameOver) {
        resetGame();
        return;
    }

    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return;
    }
    
    e.target.textContent = currentPlayer;
    moves++;

    checkWinner();

    togglePlayer();
}

function checkWinner() {
    if (cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    } else if (cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    }  else if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
        isGameOver = true;
        console.log(currentPlayer + ' WINS!');
    } else if (moves === 9) {
        isGameOver = true;
        console.log('DRAW!');
    }
}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function resetGame() {
    isGameOver = false;
    moves = 0;
    currentPlayer = 'X';
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}