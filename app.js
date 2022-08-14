var starBtn=document.getElementById("button")
const ROCK="ROCK"
const PAPER="PAPER"
const SCISSORS="SCISSORS"
let gameStarted 
const getWiner = function (cChoice=ROCK,uChoice){
    console.log("USER PICKED",uChoice);
    console.log("COMPUTER PICKED",cChoice);
    if (cChoice===uChoice){
        return "DRAW GAME"

    }
    else if ((cChoice===PAPER&& uChoice===SCISSORS)||
     (uChoice===SCISSORS&& cChoice===ROCK)||
     (uChoice===ROCK&& cChoice===PAPER))
     
    {
        return "USER WINS";

    }
    else if ((uChoice===PAPER&& cChoice===SCISSORS)||
    (uChoice===SCISSORS&& cChoice===ROCK)||
    (uChoice===ROCK&& cChoice===PAPER)){
        return "COMPUTER WINS"

    }

}
const computerChoice= function(){
    const val = Math.random();
    let sellectedChoice;
    if (val<0.3){
        sellectedChoice=ROCK

    }
    else if(val<0.7){
        sellectedChoice=PAPER

    }
    else{
        sellectedChoice=SCISSORS
    }
    return sellectedChoice
}
const start=()=>{
    if(gameStarted){
        return;

    }
    gameStarted=true
    let userChoice=prompt(`please sellect${ROCK} ${PAPER} ${SCISSORS}`)
    let sellectedChoice;
    if(userChoice!==ROCK&&userChoice!==PAPER&& userChoice!==SCISSORS){
        sellectedChoice="ROCK"


    }
    else{
        sellectedChoice=userChoice
    }
    let sellectedComputerChoice=computerChoice();
    const winner=getWiner
    ((cChoice=sellectedComputerChoice)
    (userChoice=sellectedComputerChoice));
    console.log(winner);
}
starBtn.addEventListener("click",start)