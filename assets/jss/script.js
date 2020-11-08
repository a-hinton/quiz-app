// Get DOM elements
let answerCounter = document.getElementById('answer-counter');
let numberCorrect = document.getElementById('number-correct');
let timerContainer = document.getElementById('timer-container');
let time = document.getElementById('countdown');
let container = document.getElementById('container');
let buttons = document.getElementById('buttons');
let start = document.getElementById('start');
let highScore = document.getElementById('high-score');

// IDs for game card
let gameCard = document.getElementById('game-card');
let question = document.getElementById('question');
let choices = document.getElementById('choices');
let choice = document.getElementsByClassName('choice');
let choiceA = document.getElementById('a');
let choiceB = document.getElementById('b');
let choiceC = document.getElementById('c');
let choiceD = document.getElementById('d');

let name = document.getElementById('name');

let scoreDisplay = document.getElementById('score-display');
let saveBtn = document.getElementById('save-score');
let scoreBtn = document.getElementById('display-scores');
let score = document.getElementById('score');
let endNotice = document.getElementById('end-game');

// Declare variables
let correct = 0;
let timeRemaining = 90;
let timeElapsed = 0;
let timer ;
let currentQuestion = 0;

// Declare quiz questions
let questionSet = [
    {
        question: "When was JavaScript created?",
        answers: {
            a: "1995",
            b: "2000",
            c: "1990",
            d: "1993",
        },
        correctAnswer: "a"
    },

    {
        question: "Which language is JavaScript related to?",
        answers: {
            a: "Java",
            b: "Python",
            c: "Bash",
            d: "None of the above",
        },
        correctAnswer: "d"
    },

    {
        question: "What is the correct syntax for calling a function in JavaScript?",
        answers: {
            a: "function functionName();",
            b: "functionName();",
            c: "(functionName);",
            d: "console.log(functionName);",
        },
        correctAnswer: "b"
    },

    {
        question: "Which of the following is not a logical operator?",
        answers: {
            a: "&&",
            b: "||",
            c: "%",
            d: "!",
        },
        correctAnswer: "c"
    },

    {
        question: "Before being renamed, JavaScript was known as which of the following?",
        answers: {
            a: "Mosaic",
            b: "NavigatorScript",
            c: "LiveScript",
            d: "Scheme",
        },
        correctAnswer: "c"
    },

    {
        question: "What is JavaScript's primary function on the web?",
        answers: {
            a: "Adding interactivity to websites",
            b: "Displaying inputs to a web browser",
            c: "Interacting with a database",
            d: "Adding security to websites",
        },
        correctAnswer: "a"
    },

    {
        question: "Web APIs are used to do what?",
        answers: {
            a: "Load content from an external repository",
            b: "Use code from a different site",
            c: "Interface with an underlying code base regardless of the format of the code base",
            d: "Embed media",
        },
        correctAnswer: "c"
    }
];

const lastQuestionIndex = questionSet.length - 1;

function startGame() {
    // Upon game start, hide Start and high score buttons
    buttons.style.display = "none";

    // Display first question
    displayQuestion();

    // Reveal game card section
    gameCard.style.display = "block";

    // start timer
    timerCountdown();
    timer = setInterval(timerCountdown, 1000);
};

// Timer Function
function timerCountdown(){
    timeRemaining--;
    time.textContent=timeRemaining;
    if (timeRemaining<=0){
        gameOver();
    }
};

// Triggers game over condition
function gameOver() {
    // Display score on screen
    score.textContent = timeRemaining;

    // Hide uneeded portions
    gameCard.style.display = "none";

    // display end-card div
    endNotice.style.display = "block";

    // Reset interval counter and timer
    clearInterval(timer);
    timeRemaining=0
};

// Display game questions
function displayQuestion() {
    // choose current question from array of questions
    let q = questionSet[currentQuestion];

    // display current question and answers in HTML element
    question.textContent = q.question;
    choiceA.textContent = q.answers.a;
    choiceB.textContent = q.answers.b;
    choiceC.textContent = q.answers.c;
    choiceD.textContent = q.answers.d;
}


// Check answer
function checkAnswers(event) {
    if (event.target === questionSet.correctAnswer) {
        correct++;
        numberCorrect.textContent = correct;
        currentQuestion++;
        displayQuestion();
    }
    else {
        timeRemaining -= 10;
        currentQuestion++;
        displayQuestion();
    }
};

// Log endgame results
function logScore() {
    localStorage.setItem("name", name.value);
};

// Display high scores
function displayScores() {
    localStorage.getItem("name");
};

// Loop button options
for (let i=0; i <= choice.length -1; i++){
    choice[i].addEventListener("click", checkAnswers);
}

// Event listeners
start.addEventListener("click", startGame);
highScore.addEventListener("click", displayScores);
saveBtn.addEventListener("click", logScore);
scoreBtn.addEventListener("click", displayScores);