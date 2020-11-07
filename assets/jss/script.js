let results = document.getElementById('number-correct');
let time = document.getElementById('countdown');
let endNotice = document.getElementById('end-game');
let questionCard = document.getElementById('question');
let currentQuestion ;

let timeRemaining = 40;
let timeElapsed = 0;
let timer = setInterval(timerCountdown, 1000);


let questionSet = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },

    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    }
];

console.log(questionSet[1])

// Timer Function
function timerCountdown(){
    timeRemaining--;
    document.getElementById("#timer").textContent=timeRemaining;
    if (timeRemaining<=0){
        gameOver();
    }
};

// Triggers game over condition
function gameOver() {
    clearInterval(timer);
    timeRemaining=0
};

// Populate game questions
function playGame() {
    for (i=0; i<= questionSet.length; i++){
        let currentQuestion = questionSet[i];
        questionCard.textContent=currentQuestion;
    }
};

// Check answer
function checkAnswers() {

};

// Log endgame results
function logScore () {

};



document.getElementById('submitBtn').addEventListener("click," timerCountdown);