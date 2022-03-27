var startBtn = document.getElementById("start-btn");
var timer = document.getElementById("timer");
var questionContainer = document.getElementById("question-container");
var questionText = document.getElementById("question-text");
var answerContainer = document.getElementById("answer-container");
var nextBtn = document.getElementById("next-btn");
var questions = [
    {
        question: "1+1", 
        answers: [
            "2", "4", "6", "10"
        ],
        correctAnswer: "2"
    },
    {
        question: "2+2", 
        answers: [
            "2", "4", "6", "11"
        ],
        correctAnswer: "4"
    },
    {
        question: "3+3", 
        answers: [
            "2", "4", "6", "12"
        ],
        correctAnswer: "6"
    },
];

var questionsIndex = 0

function showQuestion(Q){
    for (var i =0; i < questions.length; i++){
        // console.log(questions[i].question);
        // console.log(questions[i].answers);
        questionText.innerHTML = questions[i].question;
        var answerslist = questions[i].answers;
    }
    for (var i=0; i < 4; i++){
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answerslist[i];
        answerContainer.appendChild(answerBtn);
    }   
}
showQuestion()
var time = 30;
var counter;
function setTime(){
    counter = setInterval(function(){
        time--;
        timer.textContent = time;
        if (time==0){
            clearInterval(time);
        }
    },1000)
    
}
setTime();