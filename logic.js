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
    if (btns[0].innerText == btns[1].innerText && btns[1].innerText == btns[2].innerText && btns[2].innerText == btns[3].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        btns[0].classList.add("winner-flash");
        btns[1].classList.add("winner-flash");
        btns[2].classList.add("winner-flash");
        btns[3].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    else if (btns[4].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[7].innerText && btns[4].innerText != "") {
        calScore(value, 1);
        btns[4].classList.add("winner-flash");
        btns[5].classList.add("winner-flash");
        btns[6].classList.add("winner-flash");
        btns[7].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        return 1;
    }
    else if (btns[8].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[10].innerText == btns[11].innerText && btns[8].innerText != "") {
        calScore(value, 1);
        btns[8].classList.add("winner-flash");
        btns[9].classList.add("winner-flash");
        btns[10].classList.add("winner-flash");
        btns[11].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        return 1;
    }
    else if (btns[12].innerText == btns[13].innerText && btns[14].innerText == btns[13].innerText && btns[14].innerText == btns[15].innerText && btns[12].innerText != "") {
         winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");
        calScore(value, 1);
        btns[12].classList.add("winner-flash");
        btns[13].classList.add("winner-flash");
        btns[14].classList.add("winner-flash");
        btns[15].classList.add("winner-flash");
        return 1;
    }
    else if (btns[0].innerText == btns[5].innerText && btns[5].innerText == btns[10].innerText && btns[15].innerText == btns[10].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        btns[0].classList.add("winner-flash");
        btns[5].classList.add("winner-flash");
        btns[10].classList.add("winner-flash");
        btns[15].classList.add("winner-flash");
         winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    else if (btns[3].innerText == btns[6].innerText && btns[6].innerText == btns[9].innerText && btns[9].innerText == btns[12].innerText && btns[3].innerText != "") {
        calScore(value, 1);
        btns[3].classList.add("winner-flash");
        btns[6].classList.add("winner-flash");
        btns[9].classList.add("winner-flash");
        btns[12].classList.add("winner-flash");
         winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    else if (btns[0].innerText == btns[4].innerText && btns[8].innerText == btns[4].innerText && btns[8].innerText == btns[12].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        btns[0].classList.add("winner-flash");
        btns[4].classList.add("winner-flash");
        btns[8].classList.add("winner-flash");
        btns[12].classList.add("winner-flash");
        alert(`${value} won!\nClick Next Round`);

        return 1;
    }
    else if (btns[1].innerText == btns[5].innerText && btns[9].innerText == btns[5].innerText && btns[9].innerText == btns[13].innerText && btns[13].innerText != "") {
        calScore(value, 1);
        btns[1].classList.add("winner-flash");
        btns[5].classList.add("winner-flash");
        btns[9].classList.add("winner-flash");
        btns[13].classList.add("winner-flash");
         winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    else if (btns[2].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[14].innerText == btns[10].innerText && btns[2].innerText != "") {
        calScore(value, 1);
        btns[2].classList.add("winner-flash");
        btns[6].classList.add("winner-flash");
        btns[10].classList.add("winner-flash");
        btns[14].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    else if (btns[3].innerText == btns[7].innerText && btns[11].innerText == btns[7].innerText && btns[11].innerText == btns[15].innerText && btns[3].innerText != "") {
        calScore(value, 1);
        btns[3].classList.add("winner-flash");
        btns[7].classList.add("winner-flash");
        btns[11].classList.add("winner-flash");
        btns[15].classList.add("winner-flash");
        winner.innerText=`${value} won!\nClick\n Next Round`;
        winner.classList.remove("hide-winner");

        return 1;
    }
    // ...existing code...
    else if (btns[2].innerText == btns[1].innerText && btns[1].innerText == btns[0].innerText && btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[2].innerText != "") {
        calScore(value, 1);
        [2,1,0,4,8].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[3].innerText == btns[2].innerText && btns[2].innerText == btns[1].innerText && btns[1].innerText == btns[5].innerText && btns[5].innerText == btns[9].innerText && btns[3].innerText != "") {
        calScore(value, 1);
        [3,2,1,5,9].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[0].innerText == btns[1].innerText && btns[1].innerText == btns[2].innerText && btns[2].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        [0,1,2,6,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[1].innerText == btns[2].innerText && btns[2].innerText == btns[3].innerText && btns[3].innerText == btns[7].innerText && btns[7].innerText == btns[11].innerText && btns[1].innerText != "") {
        calScore(value, 1);
        [1,2,3,7,11].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[6].innerText == btns[5].innerText && btns[5].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[8].innerText == btns[12].innerText && btns[6].innerText != "") {
        calScore(value, 1);
        [6,5,4,8,12].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[7].innerText == btns[6].innerText && btns[6].innerText == btns[5].innerText && btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[13].innerText && btns[7].innerText != "") {
        calScore(value, 1);
        [7,6,5,9,13].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[4].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[14].innerText && btns[4].innerText != "") {
        calScore(value, 1);
        [4,5,6,10,14].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[7].innerText && btns[7].innerText == btns[11].innerText && btns[11].innerText == btns[15].innerText && btns[5].innerText != "") {
        calScore(value, 1);
        [5,6,7,11,15].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[8].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        [0,4,8,9,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[1].innerText == btns[5].innerText && btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[10].innerText == btns[11].innerText && btns[1].innerText != "") {
        calScore(value, 1);
        [1,5,9,10,11].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[2].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[9].innerText && btns[9].innerText == btns[8].innerText && btns[2].innerText != "") {
        calScore(value, 1);
        [2,6,10,9,8].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[3].innerText == btns[7].innerText && btns[7].innerText == btns[11].innerText && btns[11].innerText == btns[10].innerText && btns[10].innerText == btns[9].innerText && btns[3].innerText != "") {
        calScore(value, 1);
        [3,7,11,10,9].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[4].innerText == btns[8].innerText && btns[8].innerText == btns[12].innerText && btns[12].innerText == btns[13].innerText && btns[13].innerText == btns[14].innerText && btns[4].innerText != "") {
        calScore(value, 1);
        [4,8,12,13,14].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[13].innerText && btns[13].innerText == btns[14].innerText && btns[14].innerText == btns[15].innerText && btns[5].innerText != "") {
        calScore(value, 1);
        [5,9,13,14,15].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[14].innerText && btns[14].innerText == btns[13].innerText && btns[13].innerText == btns[12].innerText && btns[6].innerText != "") {
        calScore(value, 1);
        [6,10,14,13,12].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[7].innerText == btns[11].innerText && btns[11].innerText == btns[15].innerText && btns[15].innerText == btns[14].innerText && btns[14].innerText == btns[13].innerText && btns[7].innerText != "") {
        calScore(value, 1);
        [7,11,15,14,13].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[12].innerText == btns[13].innerText && btns[13].innerText == btns[14].innerText && btns[14].innerText == btns[9].innerText && btns[9].innerText == btns[5].innerText && btns[12].innerText != "") {
        calScore(value, 1);
        [12,13,14,9,5].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[0].innerText == btns[1].innerText && btns[1].innerText == btns[2].innerText && btns[2].innerText == btns[5].innerText && btns[5].innerText == btns[9].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        [0,1,2,5,9].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[1].innerText == btns[2].innerText && btns[2].innerText == btns[3].innerText && btns[3].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[1].innerText != "") {
        calScore(value, 1);
        [1,2,3,6,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[4].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[9].innerText && btns[9].innerText == btns[13].innerText && btns[4].innerText != "") {
        calScore(value, 1);
        [4,5,6,9,13].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[7].innerText && btns[7].innerText == btns[10].innerText && btns[10].innerText == btns[14].innerText && btns[5].innerText != "") {
        calScore(value, 1);
        [5,6,7,10,14].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[8].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[10].innerText == btns[5].innerText && btns[5].innerText == btns[1].innerText && btns[8].innerText != "") {
        calScore(value, 1);
        [8,9,10,5,1].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[9].innerText == btns[10].innerText && btns[10].innerText == btns[11].innerText && btns[11].innerText == btns[6].innerText && btns[6].innerText == btns[2].innerText && btns[9].innerText != "") {
        calScore(value, 1);
        [9,10,11,6,2].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[13].innerText == btns[14].innerText && btns[14].innerText == btns[15].innerText && btns[15].innerText == btns[10].innerText && btns[10].innerText == btns[6].innerText && btns[13].innerText != "") {
        calScore(value, 1);
        [13,14,15,10,6].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText && btns[8].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[0].innerText != "") {
        calScore(value, 1);
        [0,4,8,5,6].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[1].innerText == btns[5].innerText && btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[6].innerText && btns[6].innerText == btns[7].innerText && btns[1].innerText != "") {
        calScore(value, 1);
        [1,5,9,6,7].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[2].innerText == btns[6].innerText && btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[4].innerText && btns[4].innerText == btns[5].innerText && btns[2].innerText != "") {
        calScore(value, 1);
        [2,6,10,4,5].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[3].innerText == btns[7].innerText && btns[7].innerText == btns[11].innerText && btns[11].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[3].innerText != "") {
        calScore(value, 1);
        [3,7,11,5,6].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[4].innerText == btns[8].innerText && btns[8].innerText == btns[12].innerText && btns[12].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[4].innerText != "") {
        calScore(value, 1);
        [4,8,12,9,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[13].innerText && btns[13].innerText == btns[10].innerText && btns[10].innerText == btns[11].innerText && btns[5].innerText != "") {
        calScore(value, 1);
        [5,9,13,10,11].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[14].innerText && btns[14].innerText == btns[8].innerText && btns[8].innerText == btns[9].innerText && btns[6].innerText != "") {
        calScore(value, 1);
        [6,10,14,8,9].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[7].innerText == btns[11].innerText && btns[11].innerText == btns[15].innerText && btns[15].innerText == btns[9].innerText && btns[9].innerText == btns[10].innerText && btns[7].innerText != "") {
        calScore(value, 1);
        [7,11,15,9,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[1].innerText == btns[4].innerText && btns[4].innerText == btns[5].innerText && btns[5].innerText == btns[6].innerText && btns[6].innerText == btns[9].innerText && btns[1].innerText != "") {
        calScore(value, 1);
        [1,4,5,6,9].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[2].innerText == btns[6].innerText && btns[6].innerText == btns[5].innerText && btns[5].innerText == btns[7].innerText && btns[7].innerText == btns[10].innerText && btns[2].innerText != "") {
        calScore(value, 1);
        [2,6,5,7,10].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }

    else if (btns[5].innerText == btns[9].innerText && btns[9].innerText == btns[8].innerText && btns[8].innerText == btns[10].innerText && btns[10].innerText == btns[13].innerText && btns[5].innerText != "") {
        calScore(value, 1);
        [5,9,8,10,13].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
    else if (btns[6].innerText == btns[10].innerText && btns[10].innerText == btns[14].innerText && btns[14].innerText == btns[9].innerText && btns[9].innerText == btns[11].innerText && btns[6].innerText != "") {
        calScore(value, 1);
        [6,10,14,9,11].forEach(i => btns[i].classList.add('winner-flash'));
        winner.innerText = `${value} won!\nClick\n Next Round`;
        winner.classList.remove('hide-winner');
        already_win = 1;
        return 1;
    }
// ...existing code...
    else if (
        btns[0].innerText != "" &&
        btns[1].innerText != "" &&
        btns[2].innerText != "" &&
        btns[3].innerText != "" &&
        btns[4].innerText != "" &&
        btns[5].innerText != "" &&
        btns[6].innerText != "" &&
        btns[7].innerText != "" &&
        btns[8].innerText != "" &&
        btns[9].innerText != "" &&
        btns[10].innerText != "" &&
        btns[11].innerText != "" &&
        btns[12].innerText != "" &&
        btns[13].innerText != "" &&
        btns[14].innerText != "" &&
        btns[15].innerText != ""
    ) {
         winner.innerText="Match Draw!\nClick\n Next Round";
         winner.classList.remove("hide-winner");
        calScore(value, 0);
        return 1;
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
    }
    else if (value = "O" && plus == 1) {
        scoreO += plus;
        document.getElementById("scoreO").innerText = scoreO;
        usr1_turn = false;
        usr2_turn = true;
    }
    else if (value="X"){
        usr1_turn = false;
        usr2_turn = true;
    }
    else if (value="O"){
        usr1_turn = true;
        usr2_turn = false;
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
    already_win = 0;
    winner.classList.add("hide-winner");
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
};
// three_btn = document.getElementById("three");
// four_btn = document.getElementById("four");
// three_board = document.getElementById("three_board");
// four_board = document.getElementById("four_board");
// three_btn.addEventListener("onclick", render3x3());
// function render3x3() {
//     console.log("3x3 clicked");
//     three_board.classList.add("show");
//     three_board.classList.remove("hide");
//     four_board.classList.add("hide");
//     four_board.classList.remove("show");

// }
// four_btn.addEventListener("onclick", render4x4())
// function render4x4() {
//     console.log("4x4 clicked");
//     three_board.classList.add("hide");
//     three_board.classList.remove("show");
//     four_board.classList.add("show");
//     four_board.classList.remove("hide");

// }

