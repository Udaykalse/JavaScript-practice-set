const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const computerChoiceText = document.getElementById('computerChoiceText');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    updateUI(playerChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'win';
  return 'lose';
}

function updateUI(playerChoice, computerChoice, result) {
  computerChoiceText.textContent = `Computer chose: ${computerChoice.toUpperCase()}`;
  
  if (result === 'win') {
    resultText.textContent = '🎉 You Win!';
    playerScore++;
  } else if (result === 'lose') {
    resultText.textContent = '😢 You Lose!';
    computerScore++;
  } else {
    resultText.textContent = '😐 It\'s a Draw!';
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}
