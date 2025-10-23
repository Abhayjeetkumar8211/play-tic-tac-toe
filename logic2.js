
let btns = document.querySelectorAll(".value");
let historyX = document.getElementById("hisX");
let historyO = document.getElementById("hisO");
let usr1_turn = true;
let usr2_turn = false;
let already_win = 0;
let turn=document.getElementById("nxttrn");
let winner=document.getElementById("winner");
const clickAudio=new Audio("buttonclick-audio.wav");
btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        if (usr1_turn && !usr2_turn && btn.innerText == "" && already_win != 1) {
            let X = 'X';
            btn.innerText = X;
            btn.style.color = "red";
            usr1_turn = false;
            usr2_turn = true;
            clickAudio.play();
            clickAudio.volume=0.5;
            console.log(`button ${idx + 1} was clicked`);
            historyX.innerText += `\n X --> ${idx + 1}`;
            already_win = checkwin(X);
            turn.innerText="O";
        }
        else if (!usr1_turn && usr2_turn && btn.innerText == "" && already_win != 1) {
            let O = 'O';
            btn.innerText = O;
            btn.style.color = "blue";
            usr1_turn = true;
            clickAudio.play();
            clickAudio.volume=0.5;
            usr2_turn = false;
            console.log(`button ${idx + 1} was clicked`);
            historyO.innerText += `\n O --> ${idx + 1}`;
            already_win = checkwin(O);
            turn.innerText="X";
        }
        else {
            btn.disable;
        }
    });
});
// checks winning upon each buttob click
function checkwin(value) {
    if (btns[0].innerText == btns[1].innerText && btns[1].innerText == btns[2].innerText && btns[0].innerText != "") {

        calScore(value, 1);
        btns[0].classList.add("winner-flash");
        btns[1].classList.add("winner-flash");
        btns[2].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[3].innerText == btns[4].innerText && btns[4].innerText == btns[5].innerText && btns[3].innerText != "") {

        calScore(value, 1);
        btns[3].classList.add("winner-flash");
        btns[4].classList.add("winner-flash");
        btns[5].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[6].innerText == btns[7].innerText && btns[8].innerText == btns[7].innerText && btns[6].innerText != "") {

        calScore(value, 1);
        btns[6].classList.add("winner-flash");
        btns[7].classList.add("winner-flash");
        btns[8].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[0].innerText == btns[3].innerText && btns[6].innerText == btns[3].innerText && btns[0].innerText != "") {

        calScore(value, 1);
        btns[3].classList.add("winner-flash");
        btns[0].classList.add("winner-flash");
        btns[6].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[1].innerText == btns[4].innerText && btns[4].innerText == btns[7].innerText && btns[1].innerText != "") {

        calScore(value, 1);
        btns[1].classList.add("winner-flash");
        btns[4].classList.add("winner-flash");
        btns[7].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    } else if (btns[2].innerText == btns[5].innerText && btns[5].innerText == btns[8].innerText && btns[2].innerText != "") {

        calScore(value, 1);
        btns[2].classList.add("winner-flash");
        btns[5].classList.add("winner-flash");
        btns[8].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[0].innerText != "") {

        calScore(value, 1);
        btns[0].classList.add("winner-flash");
        btns[4].classList.add("winner-flash");
        btns[8].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[2].innerText == btns[4].innerText && btns[4].innerText == btns[6].innerText && btns[2].innerText != "") {

        calScore(value, 1);
        btns[2].classList.add("winner-flash");
        btns[4].classList.add("winner-flash");
        btns[6].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        return 1;
    }
    else if (btns[0].innerText != "" &&
        btns[1].innerText != "" &&
        btns[2].innerText != "" &&
        btns[3].innerText != "" &&
        btns[4].innerText != "" &&
        btns[5].innerText != "" &&
        btns[6].innerText != "" &&
        btns[7].innerText != "" &&
        btns[8].innerText != "") {
        winner.innerText=`Match Draw!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        already_win = 1; 
        calScore(value, 0);

    }
    return 0;
}
// calculates scores
let scoreX = 0;
let scoreO = 0;
let rounds = 0;
function calScore(value, plus) {
    if (value == "X" && plus == 1) {
        scoreX += plus;
        document.getElementById("scoreX").innerText = scoreX;
        usr1_turn = true;
        usr2_turn = false;
        turn.innerText="";
    }
    else if (value = "O" && plus == 1) {
        scoreO += plus;
        document.getElementById("scoreO").innerText = scoreO;
        usr1_turn = false;
        usr2_turn = true;
        turn.innerText="";
    }
    else if (value="X"){
        usr1_turn = false;
        usr2_turn = true;
        turn.innerText="";
    }
    else if (value="O"){
        usr1_turn = true;
        usr2_turn = false;
        turn.innerText="";
    }
    rounds += 1;
    console.log(rounds);
    document.getElementById("games").innerText = `${rounds}`;
}
// for next button
let next = document.getElementById("continue");
next.addEventListener("click", inner0)
function inner0() {
    btns.forEach((btn) => {
        btn.innerText = "";
        btn.classList.remove('winner-flash');
    });
    historyX.innerText = "Move History";
    historyO.innerText = "Move History";
    winner.classList.add("hide-winner");
    already_win = 0;
}
// for reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", reset0);
function reset0() {
    inner0();
    scoreX = 0;
    scoreO = 0;
    rounds = 0;
    document.getElementById("scoreX").innerText = scoreX;
    document.getElementById("scoreO").innerText = scoreO;
    document.getElementById("games").innerText = rounds;
  
};
