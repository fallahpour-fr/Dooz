'use strict'

let addBtn = document.querySelector('.addBtn');
let tab = document.querySelector('.mytab');
let size = 3;
let btnArray = new Array(9).fill(null);
let turn = 'X';
let k = 0;
let currentPlayer = 'x';
let activePlayer = 0;
let arrBtn = [];

addBtn.addEventListener('click', changeGamesize);

function changeGamesize() {

    for (let i = 0; i < size; i++) {
        let tag = document.createElement('tr')
        tab.appendChild(tag);
        for (let j = 0; j < size; j++) {
            let tdTag = document.createElement('td');
            tag.appendChild(tdTag);
            tdTag.setAttribute('id', k)
            tdTag.style = 'border:1px solid black';
            k++;
            checktable(tdTag);
        }
    }
}



function checktable(tdTag) {

    tdTag.addEventListener('click', function () {
        console.log(tdTag);
        let id = tdTag.id;
        console.log(id)
        if (activePlayer == 0) {
            arrBtn[id] = 'x';
            activePlayer = 1;
            currentPlayer = 'x'
        } else {
            arrBtn[id] = 'o';
            activePlayer = 0;
            currentPlayer = 'o';
        }

        console.log(arrBtn)
    })
}