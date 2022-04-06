/*config resposible for logic across the application ,open/close overlay, validation, store values etc. */

function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;//by zmienic string na numer dodajemy +
    //console.log(editedPlayer);
    playerConfigElemnt.style.display = 'block';
    backdropElement.style.display = 'block';
  
}

function closePlayerConfig(){
    playerConfigElemnt.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.innerText = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
// '' means falsy
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.innerText = 'Please enter a valid name.';
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer-1].name = enteredPlayerName;

    closePlayerConfig();
}


