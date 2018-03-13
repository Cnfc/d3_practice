

let min = 1;
let max = 10;
let winningNum = 3;
let guessesLeft = 3;


const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    if(guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = "green";
        setMessage("You win !!!", "green");
    }
    if(isNaN(guess) || guess< min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    else {
      // Wrong
        console.log("You have faled");
    }


});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

























































































//
