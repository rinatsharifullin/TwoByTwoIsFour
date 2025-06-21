let num1, num2, correctAnswer, operator, level = 1, totalQuestions = 0, correctAnswers = 0;


const question = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedback = document.getElementById('feedback');
const levelDisplay = document.getElementById('level');
const scoreDisplay = document.getElementById('score');

function generateQuestion() {
    num1 = Math.floor(Math.random() * (level * 10) + 1);
    num2 = Math.floor(Math.random() * (level * 10) + 1);
    operator = Math.random() < 0.5 ? '+' : '-';

    question.textContent = `${num1} ${operator} ${num2} = ?`;
    answerInput.value = '';
    feedback.textContent = '';
    totalQuestions++;
    updateScore();
}


function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);

    if (operator === '+') {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct!';
        correctAnswers++;
        levelUp();
        generateQuestion();
    } else {
        feedback.textContent = `Incorrect. The answer is ${correctAnswer}`;
    }

    updateScore();
}

function levelUp() {
    if (correctAnswers % 10 === 0) {
        level++;
        levelDisplay.textContent = level;
    }
}


function updateScore() {
    scoreDisplay.textContent = `Level: ${level} | Score: ${correctAnswers}/${totalQuestions}`;
}


submitBtn.addEventListener('click', checkAnswer);

// Add Enter key press listener
answerInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});


generateQuestion();
