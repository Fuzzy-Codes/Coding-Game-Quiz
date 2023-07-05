var infobox = document.querySelector(".info-box")
var timer = document.querySelector(".timer")
var startbtn = document.querySelector("#startbtn")
var title = document.querySelector("#title")
var choices = document.querySelector("#choices")
var initialBox = document.querySelector(".initial-box")
var initial = document.querySelector("#initial")
var inBtn = document.querySelector("#in-btn")
var quizBox = document.querySelector(".quiz-box")
var printedHighScores = document.querySelector(".high-score")
var highScoreBtn = document.querySelector(".score-button")
var timeLeft = 75
var questionIndex = 0
var clockId = 0
var users = []
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
}

var questions = [{
    title: "What is HTML?",
    choices: ["Hypertext Markdown Language", "Hypertext Moxy List", "Hypertext Markup Language", "None Of The Above"],
    answer: 2
}, {
    title: "What is CSS?",
    choices: ["Cascading Style Sheets", "Coding Style Setup", "Computer Style Setup", "Computer Style Sheets"],
    answer: 0
}, {
    title: "In HTML, which set of data is reflected visualy on the page?",
    choices: ["The HEAD", "The BODY", "The LEGS", "The TORSO"],
    answer: 1
}, {
    title: "What is an API",
    choices: ["Application Programming Interface", "Application Programming Input", "Application Provided Information", "All Parties Involved"],
    answer: 0
}, {
    title: "Which is NOT an example of a Coding Language?",
    choices: ["JavaScript", "CS.R.US", "Python", "C/C++"],
    answer: 1
}]
startbtn.addEventListener("click", startQuiz)
function startQuiz() {
    infobox.classList.add("hide")
    clockId = setInterval(startTimer, 1000)
    displayQuestion()
}
function startTimer() {
    timer.textContent = timeLeft
    timeLeft = timeLeft - 1
    if (timeLeft < 0) {
        clearInterval(clockId)
    }
    

}


function displayQuestion() {
    title.textContent = questions[questionIndex].title
    choices.textContent = ""
    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li")
        var btn = document.createElement("button")
        btn.style.backgroundColor = "yellow"
        btn.style.margin = "5px"
        btn.textContent = questions[questionIndex].choices[i]
        li.appendChild(btn)
        choices.appendChild(li)
        btn.addEventListener("click", nextQuestion)
    }
}
function nextQuestion() {
    var answerIndex = questions[questionIndex].answer
    if (questions[questionIndex].choices[answerIndex] === this.textContent) {
        alert("Correct")
    }
    else {
        alert("Incorrect")
        timeLeft = timeLeft - 10
    }
    questionIndex++
    if (questionIndex < questions.length) {
        displayQuestion()
    }
    else {
        clearInterval(clockId)
        endGame()
    }

}
function endGame() {
    initialBox.style.display = "block"
    quizBox.style.display = "none"


}

function initialInput() {
    var name = initial.value
    users.push({
        name, timeLeft
    })
    localStorage.setItem("users", JSON.stringify(users))

}
inBtn.addEventListener("click", initialInput)


