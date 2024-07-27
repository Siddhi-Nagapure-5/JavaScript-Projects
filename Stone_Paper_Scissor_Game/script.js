let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".item");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");
let userCh = document.querySelector("#userchoice");
let compCh = document.querySelector("#compchoice");

const drawGame = () => {
    msg.innerText = "GAME DRAW..";
}
const updateUserScore = () => {
    userScore = userScore + 1;
    user.innerText = String(userScore);

}
const updateCompScore = () => {
    compScore = compScore + 1;
    comp.innerText = String(compScore);

}
const checkWinner = (userChoice, compChoice) => {
    console.log("Checking winner...");
    if ((userChoice == "rock" && compChoice == "scissor") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissor" && compChoice == "paper")) {
        updateUserScore();
        msg.innerText = "You won, Congratulations....";
    }
    else {
        updateCompScore();
        msg.innerText = "Computer won, Congratulations....";

    }
}
const resetGame = () => {
    console.log("Game Resetted..");
    let msg = document.querySelector("#msg");
    msg.innerText = "PICK YOUR MOVE";
    userScore = 0;
    compScore = 0;
    user.innerText = "0";
    comp.innerText = "0";
}
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}
const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = generateComputerChoice();
    console.log(compChoice);
    userCh.innerText = "[" + userChoice + "]";
    compCh.innerText = "[" + compChoice + "]";
    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        checkWinner(userChoice, compChoice);
    }



}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("choice was clicked....", userChoice);
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", resetGame);