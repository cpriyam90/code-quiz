//Define variables to link to HTML elements
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainer = document.getElementById("questions-container")
var highscoreButton = document.getElementById("highscore-btn")
var homePage = document.getElementById("home")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var timerEl = document.getElementById("timer");
var time = 45

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
    timerEl.classList.remove("hide");
    setTime()
}

function setTime(){
    counter = setInterval(function(){
        time--;
        timer.textContent = time;
        if (time===0){
            clearInterval(setTime);
            }
        },1000)
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
    timerEl.classList.add("hide")
    clearInterval(setTime)
    highscoreButton.classList.remove("hide")
    prompt("Quiz has ended.Well Done!")
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
      question: 'What are string values enclosed within when being assigned to variables in JS?',
      answers: [
        { text: 'parenthesis', correct: true },
        { text: 'curly brackets', correct: false },
        { text: 'exclamation points', correct: false },
        { text: 'uppercase', correct: false }
      ]
    },
    {
      question: 'Which symbol identifies ID in JS?',
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
      question: 'What does DOM stand for?',
      answers: [
        { text: 'Hyper Type Median Language', correct: false },
        { text: 'Document Object Model', correct: true },
        { text: 'Dell Tenth Made Language', correct: false },
        { text: 'Head The Main Language', correct: false },
      ]
    }
  ]