const choices = document.querySelectorAll("img");
const msg = document.querySelector("#play");

const user = document.querySelector("#uresult");
const comp = document.querySelector("#cresult");

const reset = document.querySelector("#reset");

const usertext = document.querySelector("#user-choice");
const comptext = document.querySelector("#comp-choice");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * 3);
    return (options[random]);
};

const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = `GAME IS DRAW`;
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if(userWin === true){
        console.log("YOU WIN");
        msg.innerText = `YOU  BEAT  COMP`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else{
        console.log("COMP WIN");
        msg.innerText = `COMP  BEAT  YOU`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    usertext.innerText = userChoice;
    comptext.innerText = compChoice;
    console.log(`user choice = ${userChoice}`);
    console.log("comp choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "ROCK"){
            userWin = compChoice === "SCISSORS" ? true : false;
        }
        else if(userChoice === "PAPER"){
            userWin = compChoice === "ROCK" ? true : false;
        }
        else if(userChoice === "SCISSORS"){
            userWin = compChoice === "PAPER" ? true : false;
        }
        showWinner(userWin);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    user.innerText = userScore;
    comp.innerText = compScore;
    msg.innerText = "PLAY YOUR GAME";
    msg.style.backgroundColor = "darkviolet";
    usertext.innerText = "----------";
    comptext.innerText = "----------";
})