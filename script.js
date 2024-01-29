let boxes=document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let newbtn = document.getElementById("new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
const newGame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    let playerXName = prompt("Enter Player X's name:");
let playerOName = prompt("Enter Player O's name:");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText="O";
        turnO=false;
        count++;
       }
       else{
        box.innerText="X";
        turnO=true;
        count++;

       }
       box.disabled=true;
       checkWinner();
       if (count === 9 && !checkWinner()) {
        msg.innerText = "It's a Draw";
        msgcontainer.classList.remove("hide");
    }
 
    })
});
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
let playerXName = prompt("Enter Player X's name:");
let playerOName = prompt("Enter Player O's name:");
playerXName=playerXName;
playerOName=playerOName;
const showWinner = (winner) => {
    let winnerName = winner === "X" ? playerXName : playerOName;
    msg.innerText = `Congratulations, the Winner is ${winnerName}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner= ()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&& pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }

        }
        
    }
};
newbtn.addEventListener("click", newGame);
resetbtn.addEventListener("click", resetGame);