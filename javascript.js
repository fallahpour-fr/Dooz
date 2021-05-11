'use strict'

let arrBtn = [];
let arrCheckWinner = [0, 0]
let k = 0;
let j=0;
let buttons = Array.from(document.querySelectorAll('.btn'));
let player0EL = document.querySelector('.player__one ');
let player1EL = document.querySelector('.player__two');
let currentPlayer = 'x';
let activePlayer = 0;
let multiplied = document.querySelector('#multiplied');
let circle = document.querySelector('#circle');
let resetBtn = document.querySelector('.Reset-btn');
let gamesizeBtn = document.querySelector('.Gamesize-btn');
let line=document.querySelector('.line');

function switchPlayer() {
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

buttons.forEach((items) => {
    items.addEventListener('click', clickButton)
})

function clickButton(e) {
    let items = e
        .target;
    let id = e.target.id;
    if (activePlayer == 0) {
        items.textContent = 'X';
        arrBtn[id] = 'x';
        activePlayer = 1;
        currentPlayer = 'x'
    } else {
        items.textContent = 'O';
        arrBtn[id] = 'o';
        activePlayer = 0;
        currentPlayer = 'o';
    }

    console.log(arrBtn, currentPlayer);
    checkArray(arrBtn, currentPlayer);
    switchPlayer();
}


function checkArray(arr, currentPlayer) {

    if (arr[0] == currentPlayer && arr[1] == currentPlayer && arr[2] == currentPlayer) {
        console.log('hi');
        checkWinner(currentPlayer);
    }
    if (arr[3] == currentPlayer && arr[4] == currentPlayer && arr[5] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
    if (arr[6] == currentPlayer && arr[7] == currentPlayer && arr[8] == currentPlayer) {
        console.log('ho', currentPlayer)
        checkWinner(currentPlayer);
    }
    if (arr[0] == currentPlayer && arr[3] == currentPlayer && arr[6] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
    if (arr[1] == currentPlayer && arr[4] == currentPlayer && arr[7] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
    if (arr[2] == currentPlayer && arr[5] == currentPlayer && arr[8] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
    if (arr[0] == currentPlayer && arr[4] == currentPlayer && arr[8] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
    if (arr[2] == currentPlayer && arr[4] == currentPlayer && arr[6] == currentPlayer) {
        console.log('he')
        checkWinner(currentPlayer);
    }
}

function checkWinner(currentPlayer) {
    if (currentPlayer == 'x') {
        k++;
        arrCheckWinner[0] += k;
        multiplied.textContent = arrCheckWinner[0];
        k=0;
    } else {
        j++;
        arrCheckWinner[1] += j;
        circle.textContent = arrCheckWinner[1];
        j=0;
        
    }
    console.log(arrCheckWinner);
}

resetBtn.addEventListener('click', resetFunction);

function resetFunction() {

    buttons.forEach((items) => {
        items.innerText = ''
    })
    
    arrBtn=[];

    if(activePlayer==1){
        activePlayer=0
    }
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    
}

