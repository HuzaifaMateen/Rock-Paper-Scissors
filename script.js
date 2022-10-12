let playerScore = 0;
let computerScore = 0;
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const computerDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let playerChoice;
let computerChoice;
let result;
// main function
for (let i = 0; i < possibleChoices.length; i++){
	possibleChoices[i].addEventListener('click', function(e){
		playerChoice = e.target.id;
		playerChoiceDisplay.innerHTML = playerChoice;
		generateComputerChoice();
		getResult();
	});
}
// computer choice
function generateComputerChoice() {
	const randomIndex = Math.floor(Math.random() * possibleChoices.length + 1);
	
	if(randomIndex === 1){
		computerChoice = "rock";
	} if (randomIndex === 2){
		computerChoice = "paper";
	} if (randomIndex === 3){
		computerChoice = "scissors";
	}
	computerDisplay.innerHTML = computerChoice;
}
// result and score
function getResult() {
	if (playerChoice === computerChoice){
		resultDisplay.innerHTML = "Result:" + " "+ "Draw!";
	} else if (playerChoice === "rock" && computerChoice ==="paper"){
		resultDisplay.innerHTML = "Result:" + " " + "You lost!";
		computerScore++;
		computer.textContent = computerScore;
	} else if (playerChoice === "rock" && computerChoice === "scissors"){
		resultDisplay.innerHTML = "Result:" + " " + "You Win!";
		playerScore ++;
		player.textContent = playerScore;
	} else if(playerChoice === "paper" && computerChoice === "scissors"){
		resultDisplay.innerHTML = "Result:" + " " + "You lost!";
		computerScore++;
		computer.textContent = computerScore;
	} else if (playerChoice === "paper" && computerChoice === "rock"){
		resultDisplay.innerHtml = "Result:" + " " + "You Win!";
		playerScore ++;
		player.textContent = playerScore;
	} else if(playerChoice === "scissors" && computerChoice === "rock"){
		resultDisplay.innerHTML = "Result:" + " " + "You lost!";
		computerScore++;
		computer.textContent = computerScore;
	} else {
		resultDisplay.innerHTML = "Result:" + " " + "You Win!";
		playerScore ++;
		player.textContent = playerScore;
	}
}