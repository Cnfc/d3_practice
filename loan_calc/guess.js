
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function(e) {
    if(e.target.className === "play-again") {
        window.location.reload();
    }
});

guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // WINNN
    if(isNaN(guess) || guess< min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    if(guess === winningNum) {
        gameOver(true, `You win !!!${winningNum} is correct`);
    }
    else {
        // Wrong num
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            gameOver(false, `You loose the game. Correct num was ${winningNum}`);
        }
        else {
            guessInput.style.borderColor = "red";
            guessInput.value = "";
            setMessage(`${guess} is not correct, you have ${guessesLeft} times`);
        }

    }


});
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

function setMessage(msg, color) {

    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color= "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
}

























































































//
