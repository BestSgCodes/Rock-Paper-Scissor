let playerTurn = "";
let aiTurn = "";
let divs = document.querySelectorAll(".symbols");
let scores = document.querySelectorAll(".score")
const turns = ["rock", "paper", "scissor"]

let draw = 0;
let win = 0;
let loss = 0;

aiChoice = 0;

let aiChance = () => {
    aiChoice = Math.floor(Math.random() * 3)

    if (aiChoice === 0) {
        aiTurn = turns[0];
    } else if (aiChoice === 1) {
        aiTurn = turns[1];
    } else {
        aiTurn = turns[2];
    }

    return aiTurn
}

let aiSymbol = aiChance();

let scoreCheck = () => { 
    if (aiSymbol === playerTurn){
    draw += 1;
} else if(aiSymbol === "rock" && playerTurn === "paper" || aiSymbol === "paper" && playerTurn === "scissor" || aiSymbol === "scissor" && playerTurn === "rock") {
    win += 1;
} else{
    loss += 1;
}}

divs.forEach((div, i) =>{
    divs[i].addEventListener("click", () => {
        playerTurn = turns[i];

        aiSymbol = aiChance();
        scoreCheck();
        scores[0].textContent = `WIN: ${win}`;
        scores[1].textContent = `LOSS: ${loss}`;
        scores[2].textContent = `DRAW: ${draw}`;
    })
})