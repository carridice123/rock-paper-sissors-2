const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}


// Wondering why options can be used inside the function thats because its a global variable.
// not because it was declared with const. Local variables mostly exist in functions.
// also the option.lenght part thats the smartest way to apply every thing to the array.
// realize the square brackets meaning its applies to the array.

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "it's a tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "you win";
    }
    else {
        return "Computer Wins"
    }

}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "it's a tie") {
      return `its a tie`;
    }
    else if(result == "you win"){
        return `you win ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `you lose ${computerSelection} beats ${playerSelection}`
    }
    console.log(result);

}


function getPlayerChoice(){
    let rightInput = false;
    while(rightInput == false) {
      const choice = prompt("Rock Paper Scissors");
      if(choice == null){
        continue;
      }
      const choiceInLower = choice.toLowerCase();
      if(options.includes(choiceInLower)){
        rightInput = true;
        return choiceInLower;
      }
    }

}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++){

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
       console.log("----------------");
    
    if(checkWinner(playerSelection, computerSelection) == "you win"){
        playerScore++;
    }
    else if(checkWinner(playerSelection, computerSelection) == "Computer Wins"){
        compScore++;
    }
    }
    console.log("Game Over");
    if(playerScore > compScore){
        console.log("you won!");
        console.log("your score is" + " " + playerScore);
    }
    else{
        console.log("You Lost")
        console.log("computer score is" + " " + compScore);
    }

}

game();