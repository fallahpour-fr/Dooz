'use strict'

let arrBtn = [
  0,0,0,0,0,0,0,0,0
];


let buttons =Array.from(document.querySelectorAll('.btn'));
let player0EL = document.querySelector('.player__one ');
let player1EL = document.querySelector('.player__two');
let currentPlayer ='x';
let activePlayer =0;
function switchPlayer() {
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}


buttons.forEach((items) => {
    items.addEventListener('click', clickButton , {once:true} )
})

function clickButton(e){
    let items=e.target;
    let id=e.target.id;
    console.log(id);
    if (activePlayer == 0) {
        items.style.backgroundColor = "red";
        arrBtn[id]= 'x';
        activePlayer = 1; 
        currentPlayer = 'x'      
       
    } else {
        items.style.backgroundColor = "yellow";
        arrBtn[id]= 'o';
        activePlayer = 0;
        currentPlayer= 'o';
    }

    console.log(arrBtn , currentPlayer );
    checkArray(arrBtn ,currentPlayer);
    switchPlayer();
}


function checkArray(arr ,currentPlayer ) {

    if(arr[0]==currentPlayer && arr[1]==currentPlayer && arr[2]==currentPlayer){        
        console.log('hi');
    }
    if(arr[3]==currentPlayer && arr[4]==currentPlayer && arr[5]==currentPlayer){
        console.log('he')
    }
    if(arr[6]==currentPlayer && arr[7]==currentPlayer && arr[8]==currentPlayer){
        console.log('ho')
    }
    if(arr[0]==currentPlayer && arr[3]==currentPlayer && arr[6]==currentPlayer){
        console.log('he')
    }
    if(arr[1]==currentPlayer && arr[4]==currentPlayer && arr[7]==currentPlayer){
        console.log('he')
    }
    if(arr[2]==currentPlayer && arr[5]==currentPlayer && arr[8]==currentPlayer){
        console.log('he')
    }
    if(arr[0]==currentPlayer && arr[4]==currentPlayer && arr[8]==currentPlayer){
        console.log('he')
    }
    if(arr[2]==currentPlayer && arr[4]==currentPlayer && arr[6]==currentPlayer){
        console.log('he')
    }
}