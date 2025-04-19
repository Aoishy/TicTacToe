let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetbutton");
let newgamebutton=document.querySelector("#newgamebutton");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message");
let turn0=true;

const winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
          console.log("box ");
          if(turn0)//player0
          {
            box.innerText="0";
            turn0=false;
          }
          else{//playerX
            box.innerText="X";
            turn0=true;
          }
         box.disabled=true;//1 button only 1 click
         checkWinner();
    });
});



const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;

    msgcontainer.classList.remove("hide");
    for(let box of boxes)
    {
        box.disabled=true;
    }

};

const checkWinner=()=>{
    for(let pattern of winningpattern)
    {
       let post1val=boxes[pattern[0]].innerText;
       let post2val=boxes[pattern[1]].innerText;
       let post3val=boxes[pattern[2]].innerText;
       if(post1val!=""&&post2val!=""&&post3val!="")
       {
        if(post1val===post2val&&post2val===post3val)
        {
           
            showWinner(post1val);
        }
       }
    }
};

const resetGame=()=>{
    turn0=true;
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
        msgcontainer.classList.add("hide");


};
 

newgamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);