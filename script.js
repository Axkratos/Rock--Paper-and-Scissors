const buttons = document.querySelectorAll(".btns button");
const playertxt = document.querySelector("#playertxt");
const computertxt = document.querySelector("#computertxt");
const resulttxt = document.querySelector("#resulttxt");
let player;
let computer;
let result;

buttons.forEach((button) => button.addEventListener("click", () => {
  player = button.textContent;
  computerturn();
  playertxt.textContent = `Player: ${player}`;
  computertxt.textContent = `Computer: ${computer}`;
  resulttxt.textContent = checkwinner();
}));

function computerturn() {
  const randnum = Math.floor(Math.random() * 3) + 1;
  switch (randnum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}

function checkwinner() {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "Rock") {
    return player === "Paper" ? "You Win!" : "You Lose!";
  } else if (computer === "Paper") {
    return player === "Scissor" ? "You Win!" : "You Lose!";
  } else if (computer === "Scissor") {
    return player === "Rock" ? "You Win!" : "You Lose!";
  }
}

