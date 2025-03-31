let randomNumber = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessFeild')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.result')

const p = document.createElement('p')
let prevGuess = []
let numofGuesses = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('please enter a valid number')
   }else if(guess<1){
    alert('please enter a number greater than 0')
   }else if(guess>100){
    alert('please enter a number less than 100')
   }else{
    prevGuess.push(guess);
    if(numofGuesses==11){
        ClearGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame();
    }else{
        ClearGuess(guess);
        checkGuess(guess);
    }
   }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
  }else if(guess<randomNumber){
    displayMessage(`number is too low`)
  }else{
    displayMessage(`number is too heigh`)
  }
}

function ClearGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML+=`${guess} ,`;
  numofGuesses++;
  remaining.innerHTML = `${11-numofGuesses}`
}

function displayMessage(message){
   lowOrhi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
     randomNumber = parseInt(Math.random()*100+1)
     prevGuess = [];
     numofGuesses = 1;
     guessSlot.innerHTML = ''
      remaining.innerHTML = `${11-numofGuesses}`
      userInput.removeAttribute('disabled')
      startOver.removeChild(p);
     playGame = true;
  })
}
