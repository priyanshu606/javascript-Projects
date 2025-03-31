let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".Choice");
const msg = document.getElementById("msg");
const userscore  = document.getElementById("user-score");
const compscore  = document.getElementById("comp-score");
const generateCompChoice = ()=>{
   const options = ["rock","paper","scissors"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "GAME DRAW. Play again";
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userscore.textContent = userScore;
    msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compscore.textContent = compScore;
    msg.textContent = `YOU LOSE. computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame  = (userChoice)=>{
   const compChoice = generateCompChoice();
   console.log("computer choice ",compChoice);
   if(userChoice==compChoice){
     drawGame();
   }else{
    let userWin = true;
    if((userChoice=="rock" && compChoice=="paper") || (userChoice=="paper" && compChoice=="scissors")
        || (userChoice=="scissors" && compChoice=="rock")){
        userWin = false;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice  = choice.getAttribute("id");
        console.log("user choice",userChoice); 
        playGame(userChoice);
     })
})