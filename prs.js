const choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection) {

  const computerSelection = choices[Math.floor(Math.random() * 3)];
  if (playerSelection === computerSelection) {
    return 'Draw';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win';
  } else {
    return 'You lose';
  }
}

let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {
 
  const playerChoice = prompt('Rock, paper, or scissors?');
  const result = playRound(playerChoice);
  console.log(result);

  if (result === 'You win') {
    playerScore++;
  } else if (result === 'You lose') {
    computerScore++;
 } 
}

if (playerScore === 5) {
  console.log('You are the real player!');
} else if (computerScore === 5){
  console.log('n0o8s');
}