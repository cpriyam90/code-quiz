//Define variables to link to HTML elements
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainer = document.getElementById("questions-container")
var highscoreButton = document.getElementById("highscore-btn")
var homePage = document.getElementById("home")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click",startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
  })

//Create a function to start game
function startGame (){
    startButton.classList.add("hide")
    highscoreButton.classList.add("hide")
    homePage.classList.add("hide")
    questionContainer.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

//Create a function to display next questions
function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
      })
}

//Create function to reset to question with multiple answers once correct answer selected
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer (e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

//Set class status to correct or wrong to change color based on answer selected
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add("correct")
    } else {
      element.classList.add("wrong")
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
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
      question: 'Select an example of comments/psuedo code in JS?',
      answers: [
        { text: '<!--Hello--!>', correct: false },
        { text: '//Hello', correct: true },
        { text: '/*Hello*/', correct: false },
        { text: '!Hello!', correct: false }
      ]
    },
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'Hyper Type Median Language', correct: false },
        { text: 'Hyper Text Markup Language', correct: true },
        { text: 'High Tenth Made Language', correct: false },
        { text: 'Head The Main Language', correct: false },
      ]
    }
  ]












































//   var highscoreButton = document.getElementById("highscore-btn")
//   var homePage = document.getElementById("home")

// highscoreButton.classList.add("hide")
//     homePage.classList.add("hide")







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