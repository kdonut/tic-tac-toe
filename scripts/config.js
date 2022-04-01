/*config resposible for logic across the application ,open/close overlay, validation, store values etc. */

function openPlayerConfig(event) {
    playerConfigElemnt.style.display = 'block';
    backdropElement.style.display = 'block';
  
}

function closePlayerConfig(){
    playerConfigElemnt.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
// '' means falsy
    if(!enteredPlayerName){
        errorsOutputElement.innerText = 'Please enter a valid name.';
        return;
    }
}