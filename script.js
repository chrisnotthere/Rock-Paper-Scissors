// randomly return 'rock' 'paper' or 'scissors'
function computerPlay(){

    const computerSelectionNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    switch(computerSelectionNumber){
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        case 3:
            computerSelection = 'scissors';
    }

    return computerSelection;
}

//plays a single round, takes playerSelection and computerSelection (case in-sensitive)
//and returns a string declaring the winner
function playRound(playerSelection, computerSelection){

    let winner;

    //player win conditions
    if( (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') ){

            winner = 'player';
    }
    //computer win conditions
    else if((computerSelection == 'rock' && playerSelection == 'scissors') || 
            (computerSelection == 'paper' && playerSelection == 'rock') || 
            (computerSelection == 'scissors' && playerSelection == 'paper') ){

                winner = 'computer';
    }
    //draw
    else{
        winner = 'draw';
    }

    return winner;
}

//uses playRound() 5 times for best out of 5 game
//keeps score and reports the winner (or draw) at the end
function game(){

    let rounds = 1;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    while(rounds <=5 ){

        const computerSelection = computerPlay();
        const playerSelection = prompt("What do you choose?", "rock, paper, scissors!").toLocaleLowerCase();

        if (playRound(playerSelection, computerSelection) == 'player'){
            playerWins++;
            console.log(`player wins the round\nPlayer: ${playerSelection}      Computer: ${computerSelection}`);
        }
        else if(playRound(playerSelection, computerSelection) == 'computer'){
            computerWins++;
            console.log(`computer wins the round\nPlayer: ${playerSelection}      Computer: ${computerSelection}`);
        }
        else{
            draws++;
            console.log(`round was a draw\nPlayer: ${playerSelection}      Computer: ${computerSelection}`);
        }

        rounds++;
    }

    console.log(`Results.......\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}\nDraws: ${draws}`);

    if(playerWins > computerWins){
        console.log(`Congratulations!! You have defeated the computer!`);
    }
    else if(playerWins < computerWins){
        console.log(`You have been defeated... better luck next time`);
    }
    else{
        console.log(`It appears you are equally matched!`);
    }
}

game();
