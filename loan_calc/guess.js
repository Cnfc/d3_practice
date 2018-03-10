// // Create variables
// const minNum = document.querySelector(".min-num"),
//       maxNum = document.querySelector(".max-num"),
//       submit = document.querySelector("#guess-btn"),
//       input = document.querySelector("#guess-input"),
//       message = document.querySelector(".message");
//
// let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Submit event listener
submit.addEventListener("click", function(){
    // Check if correct number is typed in
    if(! isNaN() ||input.value < min || input.value > max){
        message.textContent = "Please enter a number in the range";
        message.style.color = "red";
    }

    // If won
    if(parseInt(input.value) === winningNum){
        message.textContent = "Congrats. You won!!";
        message.style.color = "green";
        input.style.borderColor = "green";
    }else {
        // If wrong guess but has more guesses
        if(guessesLeft){
            message.textContent = "Please try again";
            message.style.color = "red";
            guessesLeft -= 1;
        }else {
            message.textContent = "You ran out of guesses. Please play again!"
            message.style.color = "red";
        }
    }
});
