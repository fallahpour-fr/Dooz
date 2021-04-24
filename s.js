'use strict'

let arrBtn = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


let buttons = document.querySelectorAll('.btn');
let player0EL = document.querySelector('.player__one ');
let player1EL = document.querySelector('.player__two');
let activePlayer = 0;

function switchPlayer() {
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}


buttons.forEach((items) => {
    items.addEventListener('click', function () {
        if (activePlayer == 0) {
            items.style.backgroundColor = "red";
            activePlayer = 1
            if (this.id == 0) {
                arrBtn[0][0] = 1;
            }
            if (this.id == 1) {
                arrBtn[0][1] = 1;
            }
            if (this.id == 2) {
                arrBtn[0][2] = 1;
            }
            if (this.id == 3) {
                arrBtn[1][0] = 1;
            }
            if (this.id == 4) {
                arrBtn[1][1] = 1;
            }
            if (this.id == 5) {
                arrBtn[1][2] = 1;
            }
            if (this.id == 6) {
                arrBtn[2][0] = 1;
            }
            if (this.id == 7) {
                arrBtn[2][1] = 1;
            }
            if (this.id == 8) {
                arrBtn[2][2] = 1;
            }
        } else {
            items.style.backgroundColor = "yellow";
            activePlayer = 0;
        }

        checkFunction(arrBtn);
        switchPlayer();
    })
})


function horisontalFunction(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let multisum = 0;
        arr[i].forEach(element => {
            multisum += element;
        });

        if (multisum == arr.length) {
            return multisum;
        } else {
            continue;
        }
    }
}

function verticalFunction(arr) {
    let sum = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
        for (let i = 0; i <= arr.length - 1; i++) {
            sum = sum + arr[i][j];
        }
        if (sum == arr.length) {
            return sum;
        }
        sum = 0;
    }
}

function MultiplicationFunction(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i][i]
    }
    if (sum == arr.length) {
        return sum;
    }
}

function MultiplicationFunction1(arr) {
    let sum = 0;
    let i = arr.length - 1;
    let k = 0;
    while (0 <= i && k <= arr.length - 1) {
        sum += arr[i][k];
        i--;
        k++;
    }
    if (sum == arr.length) {
        return sum;
    }
}

function checkFunction(arr) {

    if (horisontalFunction(arr) == 3) {
        console.log('hi')
    } else if (verticalFunction(arr) == 3) {
        console.log('he')
    } else if (MultiplicationFunction(arr) == 3) {
        console.log('ha')
    } else if (MultiplicationFunction1(arr) == 3) {
        console.log('hj')
    }
}