let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset");
let newGanmeBtn = document.querySelector("#newbtn");
let msgcontaine = document.querySelector(".msg-containe");
let msg = document.querySelector("#msg");

let turnO = true;
const winpttrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgcontaine.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("button was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgcontaine.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winpttrn) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText,

    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("Winner",pos1val);
        showWinner(pos1val);
      }
    }
  }
};
newGanmeBtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);
