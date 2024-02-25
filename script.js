let userScore=0;
let compScore=0;
let userWin;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateCompChoice = () => {
    let options = ["rock", "Paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drowGame = () => {
    
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#283644";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = generateCompChoice().toLowerCase(); // Convert to lowercase
    console.log("computer choice = ", compChoice);

    userChoice = userChoice.toLowerCase(); // Convert to lowercase for consistency

    if (
        (userChoice === "rock" && compChoice === "rock") ||
        (userChoice === "paper" && compChoice === "paper") ||
        (userChoice === "scissor" && compChoice === "scissor")
    ) {
        // Draw game
        drowGame();
    } else {
        userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);  
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
