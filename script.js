let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let result = Math.floor(Math.random() * 3);
  if (result == 0) {
    return 'rock';
  } else if (result == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const getHumanChoice = () => {
  let humanChoice = prompt('Enter your choice (Rock, Paper, Scissors): ').toLowerCase(); 
  return humanChoice;
};

const playRound = (humanChoice, computerChoice) => {
  if (computerChoice == 'rock' && humanChoice == 'scissors') {
    console.log('You lose, Rock beats Scissors');
    computerScore++;
  } else if (computerChoice == 'paper' && humanChoice == 'rock') {
    console.log('You lose, Paper beats Rock');
    computerScore++;
  } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
    console.log('You lose, Scissors beats Paper');
    computerScore++;
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You win, Rock beats Scissors');
    humanScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log('You win, Paper beats Rock');
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You win, Scissors beats Paper');
    humanScore++;
  } else if (humanChoice == computerChoice) {
    console.log('It\'s a tie!');
  }
};

const playGame = () => {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  console.log(humanScore, computerScore);
}

playGame();