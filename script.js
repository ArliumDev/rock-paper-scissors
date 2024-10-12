let gameButtons = document.querySelectorAll('div.buttons > button');
let winsCounter = document.getElementById('wins');
let drawsCounter = document.getElementById('draws');
let defeatsCounter = document.getElementById('defeats');
let gameResult = document.getElementById('game-result');
let resetButton = document.getElementById('reset-game');
let wins = 0;
let defeats = 0;
let draws = 0;
let playerChoice, computerChoice;
let cpuTest = document.getElementById('cpu-test');

winsCounter.textContent = `wins: ${wins}`;
drawsCounter.textContent = `draws: ${draws}`;
defeatsCounter.textContent = `defeats: ${defeats}`;

const cpuMovement = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
  console.log(computerChoice);
};

const roundCheck = (winArg) => {
  cpuMovement();
  if (winArg[playerChoice] === computerChoice) {
    wins++;
    winsCounter.textContent = `wins: ${wins}`;
  } else if (playerChoice === computerChoice) {
    draws++;
    drawsCounter.textContent = `draws: ${draws}`;
  } else {
    defeats++;
    defeatsCounter.textContent = `defeats: ${defeats}`;
  }
};

const game = () => {
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  if (wins == 5) {
    gameResult.textContent = 'You win!';
    gameResult.classList.remove('toggleV');
  } else if (defeats == 5) {
    gameResult.textContent = 'You lose';
    gameResult.classList.remove('toggleV');
  } else {
    roundCheck(winConditions);
  }
};

gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    console.log(`Player choice is ${playerChoice}`);
    game();
  })
});