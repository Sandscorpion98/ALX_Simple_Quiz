




function checkAnswer() {
    const correctAnswer = "4";
    document.querySelector('input[name="quiz"]:checked');
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
     
    if (correctAnswer === userAnswer) {
    
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }
    else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}


document.getElementById("submit-answer").addEventListener("click", checkAnswer)

