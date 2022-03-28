var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("questions-container")
var highscoreButton = document.getElementById("highscore-btn")
var homePage = document.getElementById("home")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click",startGame)

function startGame (){
    startButton.classList.add("hide")
    highscoreButton.classList.add("hide")
    homePage.classList.add("hide")
    questionContainer.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()

}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer (){

}
//Question Array
var questions = [
    {
      question: 'What does CSS stand for?',
      answers: [
        { text: 'Cascading Style Sheet', correct: true },
        { text: 'Center Stage Show', correct: false },
        { text: 'Center Sinlge Shadow', correct: false },
        { text: 'Cat Shaking Shook', correct: false }
      ]
    },
    {
      question: 'Which symbol identifies ID in css?',
      answers: [
        { text: '*', correct: false },
        { text: '%', correct: false },
        { text: '!', correct: false },
        { text: '#', correct: true }
      ]
    },
    {
      question: 'Select an example of comments in JS?',
      answers: [
        { text: '<!--Hello--!>', correct: false },
        { text: '//Hello', correct: true },
        { text: '/*Hello*/', correct: false },
        { text: '!Hello!', correct: false }
      ]
    },
    {
      question: 'What does HTML stand for',
      answers: [
        { text: 'Hyper Type Median Language', correct: false },
        { text: 'Hyper Text Markup Language', correct: true },
        { text: 'High Tenth Made Language', correct: false },
        { text: 'Head The Main Language', correct: false },
      ]
    }
  ]




















































// var startBtn = document.getElementById("start-btn");
// var timer = document.getElementById("timer");
// var questionContainer = document.getElementById("question-container");
// var questionText = document.getElementById("question-text");
// var answerContainer = document.getElementById("answer-container");
// var nextBtn = document.getElementById("next-btn");
// var questions = [
//     {
//         question: "1+1", 
//         answers: [
//             "2", "4", "6", "10"
//         ],
//         correctAnswer: "2"
//     },
//     {
//         question: "2+2", 
//         answers: [
//             "2", "4", "6", "11"
//         ],
//         correctAnswer: "4"
//     },
//     {
//         question: "3+3", 
//         answers: [
//             "2", "4", "6", "12"
//         ],
//         correctAnswer: "6"
//     },
// ];

// var questionsIndex = 0

// function showQuestion(Q){
//     for (var i =0; i < questions.length; i++){
//         // console.log(questions[i].question);
//         // console.log(questions[i].answers);
//         questionText.innerHTML = questions[i].question;
//         var answerslist = questions[i].answers;
//     }
//     for (var i=0; i < 4; i++){
//         var answerBtn = document.createElement("button");
//         answerBtn.textContent = answerslist[i];
//         answerContainer.appendChild(answerBtn);
//     }   
// }
// showQuestion()
// var time = 30;
// var counter;
// function setTime(){
//     counter = setInterval(function(){
//         time--;
//         timer.textContent = time;
//         if (time==0){
//             clearInterval(time);
//         }
//     },1000)
    
// }
// setTime();