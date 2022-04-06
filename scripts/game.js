/**responsible forthe  game logic */

function resetGameStatus(){
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }


}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Proszę podać imiona graczy");
    return;
  } else {
    resetGameStatus();
    gameAreaElement.style.display = "block";
    activePlayerName.textContent = players[activePlayer].name;
    currentRound = 1;
  }
}

function checkForGameOver() {
    //checking the rows
    for (let i = 0; i < 3; i++) {
        if(
            gameData[i][0]  > 0 &&
            gameData[i][0] == gameData[i][1] &&
            gameData[i][1] == gameData[i][2]

        ) {
            return gameData[i][0];
        }

    }
    //checking columns
    for (let i = 0; i < 3; i++) {
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] == gameData[1][i] &&
            gameData[1][i] == gameData[2][i]

        ) {
            return gameData[0][i];
        }

    }
    ///checking diagonals
    if ( gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[2][2]=== gameData[1][1]) 
    {
        return gameData[0][0];
    }

    if ( gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[2][0]=== gameData[1][1])
    {
        return gameData[0][2];
    }

    if (currentRound === 9)
    {
        return -1;
    }
    return 0;


}

function switchPlayer() {
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col;
  const selectedRow = selectedField.dataset.row;

  if (gameData[selectedRow-1][selectedColumn-1] === 0) {

   
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    //console.log('Wiersz - '+ selectedRow + ' Kolumna - '+ selectedColumn);

    gameData[selectedRow - 1][selectedColumn - 1] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if(winnerId !== 0 ){
        endGame(winnerId);
    }


    currentRound++;
    switchPlayer();
  }

}

function endGame(winnerId){
    gameOverElement.style.display = 'block';
    if (winnerId >0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId-1].name;

    } else {

        gameOverElement.firstElementChild.textContent = "It\'s a draw!";
       
    }
    

}