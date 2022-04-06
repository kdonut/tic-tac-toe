/*to store variables used in diffrent scripts*/
let editedPlayer = 0; //do ustawiania ktory player zostal wybbrany
let activePlayer = 0;

let currentRound = 1;

const gameData = [
    [0 ,0, 0],
    [0 ,0, 0],
    [0, 0, 0],

];


const players = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O' 
    }
];

const playerConfigElemnt = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#active-game li');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtbElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelCOnfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-new-game-btn');

const gameBoardElement = document.getElementById('game-board');

editPlayer1BtbElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelCOnfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);

for (const gameFielsElement of gameFieldElements){
    gameFielsElement.addEventListener('click',selectGameField);
    //console.log(gameFielsElement);
}