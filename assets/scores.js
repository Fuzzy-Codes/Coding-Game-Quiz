




function printedHighScores() {
    var highScores = JSON.parse(localStorage.getItem("users"))
    console.log(highScores)
    for (let i = 0; i < highScores.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = highScores[i].name + highScores[i].timeLeft
        var ol = document.getElementById("highScoreList")
        ol.appendChild(listItem)
    }
}
printedHighScores()