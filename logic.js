let btns = document.querySelectorAll(".value");
let historyX = document.getElementById("hisX");
let historyO = document.getElementById("hisO");
let usr1_turn = true;
let usr2_turn = false;
let already_win = 0;
btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        if (usr1_turn && !usr2_turn && btn.innerText == "" && already_win != 1) {
            let X = 'X';
            btn.innerText = X;
            btn.style.color = "red";
            usr1_turn = false;
            usr2_turn = true;
            console.log(`button ${idx + 1} was clicked`);
            historyX.innerText += `\n X --> ${idx + 1}`;
            already_win = checkwin(X);

        }
        else if (!usr1_turn && usr2_turn && btn.innerText == "" && already_win != 1) {
            let O = 'O';
            btn.innerText = O;
            btn.style.color = "blue";
            usr1_turn = true;
            usr2_turn = false;
            console.log(`button ${idx + 1} was clicked`);
            historyO.innerText += `\n O --> ${idx + 1}`;
            already_win = checkwin(O);

        }
        else {
            btn.disable;
        }
    });
});
// checks winning upon each buttob click
function checkwin(value) {
    if (btns[0].innerText == btns[1].innerText && btns[1].innerText == btns[2].innerText && btns[0].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[3].innerText == btns[4].innerText && btns[4].innerText == btns[5].innerText && btns[3].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[6].innerText == btns[7].innerText && btns[8].innerText == btns[7].innerText && btns[6].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[0].innerText == btns[3].innerText && btns[6].innerText == btns[3].innerText && btns[0].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[1].innerText == btns[4].innerText && btns[4].innerText == btns[7].innerText && btns[1].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    } else if (btns[2].innerText == btns[5].innerText && btns[5].innerText == btns[8].innerText && btns[2].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[0].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
        return 1;
    }
    else if (btns[2].innerText == btns[4].innerText && btns[4].innerText == btns[6].innerText && btns[2].innerText != "") {
        alert(`${value} won!\nClick Next Round to start next game.`);
        calScore(value, 1);
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
        alert("Match Draw!\nClick Next Round to start next game.");
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

    }
    else if (value = "O" && plus == 1) {
        scoreO += plus;
        document.getElementById("scoreO").innerText = scoreO;
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
    });
    historyX.innerText = "Move History";
    historyO.innerText = "Move History";
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


