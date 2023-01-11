const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const choices = ['rock', 'paper', 'scissors'];

let playerSelection
let computerSelection
let userImg = document.createElement("img");
let comImg = document.createElement("img");
let playerScore = 0;
let computerScore = 0;

userImg.src = "icon/tiger.png";
comImg.src = "icon/tiger.png";
document.getElementById('dashboard').innerHTML = "Let's get started!";
document.getElementById('userScore').innerHTML = "Your Score:" + " " + playerScore;
document.getElementById('comScore').innerHTML = "Com Score:" + " " + computerScore;
document.getElementById("userChoice").appendChild(userImg);
document.getElementById("comChoice").appendChild(comImg);

function replayGame() {
  window.location.reload();
}

function DisplayChoices(playerSelection, computerSelection){
  
  if(playerSelection === 0){
      userImg.src = 'icon/rock.png';
  }
  else if(playerSelection === 1){
      userImg.src = 'icon/paper.png';
  }
  else if(playerSelection === 2){
      userImg.src = 'icon/scissors.png';
  }

  if(computerSelection === 0){ 
      comImg.src = 'icon/rock.png';
  }
  else if(computerSelection === 1){
      comImg.src = 'icon/paper.png';
  }
  else if(computerSelection === 2){
      comImg.src = 'icon/scissors.png';
  }

}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    document.getElementById('dashboard').innerHTML = 'dRAWWR'
  } 
  else if (playerSelection === 0 && computerSelection === 2) {
    playerScore++;
    document.getElementById('dashboard').innerHTML ='+1';
  }
  else if (playerSelection === 1 && computerSelection === 0) {
    playerScore++;
    document.getElementById('dashboard').innerHTML ='+1';
  }
           
  else if (playerSelection === 2 && computerSelection === 1) {
    playerScore++;
    document.getElementById('dashboard').innerHTML ='+1';
  } 
  else {
    computerScore++;
    document.getElementById('dashboard').innerHTML = 'loser';
  }

 document.getElementById('userScore').innerHTML = "Your Score:" + " " + playerScore;
 document.getElementById('comScore').innerHTML = "Com Score:" + " " + computerScore;

  if(playerScore === 5 || computerScore=== 5)
  {
  
     document.querySelector("#rock").disabled = true;
     document.querySelector("#paper").disabled = true;
     document.querySelector("#scissors").disabled = true;
 
     if(playerScore === 5){
          document.getElementById("dashboard").style.color = "lime";
          document.getElementById("dashboard").innerHTML = "You are the real player!"; 
     }
     else {
          document.getElementById("dashboard").style.color = "black";
          document.getElementById("dashboard").innerHTML = "n0o8s";
     }


}}

function game() {

  DisplayChoices(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);

} 


rockBtn.addEventListener('click', function(){
  playerSelection = 0;
  computerSelection= Math.floor(Math.random() * choices.length);
  game();
});
paperBtn.addEventListener('click', function(){
  playerSelection = 1;
  computerSelection= Math.floor(Math.random() * choices.length);
  game();
});
scissorsBtn.addEventListener('click', function(){
  playerSelection = 2;
  computerSelection= Math.floor(Math.random() * choices.length);
  game();
});