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


let playerWins = 0;
let computerWins = 0;
let draws = 0;

//plays a single round
function playRound(playerSelection){

    let winner;
    const computerSelection = computerPlay();

    //player win conditions
    if( (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') ){

            playerWins++;
            results.innerText = `player wins the round\n\nPlayer: ${playerSelection}----Computer: ${computerSelection}\n\n`;
            results.innerText += `Results.......\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}\nDraws: ${draws}\n\n`;
            
            if(playerWins >= 5){
                results.innerText = `\nCongratulations!! You have defeated the computer!`;
                return;    
            }
    }
    //computer win conditions
    else if((computerSelection == 'rock' && playerSelection == 'scissors') || 
            (computerSelection == 'paper' && playerSelection == 'rock') || 
            (computerSelection == 'scissors' && playerSelection == 'paper') ){

                computerWins++;
                results.innerText = `computer wins the round\n\nPlayer: ${playerSelection}----Computer: ${computerSelection}\n\n`;
                results.innerText += `Results.......\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}\nDraws: ${draws}\n\n`;

                if(computerWins >= 5){
                    results.innerText = `\nYou have been defeated... better luck next time`;
                    return;
                }
    }
    //draw
    else{
        draws++;
        results.innerText = `round was a draw\n\nPlayer: ${playerSelection}----Computer: ${computerSelection}\n\n`;
        results.innerText += `Results.......\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}\nDraws: ${draws}\n\n`;
    }

}


//rock, papper, scissors buttons
const btn1 = document.createElement('button');
btn1.innerText = 'Rock';
btn1.setAttribute('id', 'rock');

const btn2 = document.createElement('button');
btn2.innerText = 'Paper';
btn2.setAttribute('id', 'paper');

const btn3 = document.createElement('button');
btn3.innerText = 'Scissors';
btn3.setAttribute('id', 'scissors');

const results = document.createElement('div');
results.setAttribute('id', 'results');

//add buttons to container
const container = document.querySelector('#container');
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(results);

//create nodelist of buttons
const buttons = document.querySelectorAll('button');

//add event listener to each button
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        
        (playerWins >= 5 || computerWins >= 5)?
        results.innerText = `\nRefresh to play again`
        : playRound(button.id);
        
    });

});
