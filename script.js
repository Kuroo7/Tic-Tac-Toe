// console.log("Hello");

let turn = "X";
let gameOver = false;

//Function to change the turn
const changeTurn = () => {
    if (turn == "X") {
        return "O"
    }
    else {
        return "X"
    }
}

//Function to check Win
const checkWin = () => {
    let boxText = document.getElementsByClassName('box');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {

        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won";
            gameOver = true;
            document.querySelector('.imgBox').style.display = "block";
        }

    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }

    })
})

// Reseting game 
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
        turn = "X";
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        document.querySelector('.imgBox').style.display = "none";
    })
})