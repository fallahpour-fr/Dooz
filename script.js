'use strict'

let addBtn = document.querySelector('.addBtn');
let tab = document.querySelector('.mytab');
let size = 4;
let arr = new Array(size);
for (var i = 0; i < size; i++) {
    arr[i] = new Array(size);
}
let k = 0;
let currentPlayer = 'x';
let activePlayer = 0;
let flag = true;
let matches = 0;




addBtn.addEventListener('click', changeGamesize);

function changeGamesize() {

    for (let i = 0; i < size; i++) {
        var tag = document.createElement('tr');
        // tag.setAttribute('id', i + 4);
        for (let j = 0; j < size; j++) {
            let tdTag = document.createElement('td');
            tdTag.setAttribute('id', `${i}${j}`);
            tdTag.style = 'border:1px solid black';
            // k++;
            tag.appendChild(tdTag);
            checktable(tdTag);
        }
        tab.appendChild(tag);
        // k = 0;
    }

}



function checktable(tdTag) {

    tdTag.addEventListener('click', function () {
        let id = tdTag.id;
        let idNumber = id.split("")
        console.log(Number(idNumber[0]), Number(idNumber[1]));

        if (activePlayer == 0) {
            arr[Number(idNumber[0])][Number(idNumber[1])] = 'X';
            tdTag.innerHTML = 'X'
            activePlayer = 1;
            currentPlayer='X';
        } else {
            arr[Number(idNumber[0])][Number(idNumber[1])] = 'O';
            activePlayer = 0;
            tdTag.innerHTML = 'O';
            currentPlayer = 'O';
        }
        console.log(arr);
        checkWinner(arr, tdTag);
    })

}



function checkWinner(arr, tdTag) {
    console.log(tdTag.innerHTML);
    //horizontal
    for (let k = 0; k < size; k++) {

        for (let n = 0; n < size; n++) {
            if (arr[k][n] === tdTag.innerHTML) {
                matches++;
                if (matches == size) {
                    console.log('horizontal win');
                }
            } else {
                matches = 0;
            }
        }
    }

    //vertical
    for (let k = 0; k < size; k++) {

        for (let n = 0; n < size; n++) {
            if (arr[n][k] === tdTag.innerHTML) {
                matches++;
                if (matches == size) {
                    console.log('vertical win')
                }
            } else {
                matches = 0;
            }
        }
    }

    //top left to bottom right
    for (let k = 0; k < size; k++) {
        for (let n = 0; n < size; n++) {
            if (k == n) {
                if (arr[n][k] === tdTag.innerHTML) {
                    matches++;
                    if (matches == size) {
                        console.log('multiplie1 win')
                    }
                } else {
                    matches = 0;
                }
            } else {
                continue;
            }
        }
    }

    //top right to bottom left matches
    for (let k = 0; k < size; k++) {
        for (let n = size - 1; 0 <= n; n--) {
            if ((n + k) == size - 1) {
                if (arr[k][n] === tdTag.innerHTML) {
                    matches++;
                    if (matches == size) {
                        console.log('multiplie2 win')
                    }
                } else {
                    matches = 0;
                }
            } else{
                continue;
            }
        }
    }
}