
function init() {
    
    var totalScoreElement = document.querySelector(".score-area .score");
    var subjectsNames = document.querySelectorAll(".subject-name span");
    var subjectsIcons = document.querySelectorAll(".subject-name img");
    var subjectsScores = document.querySelectorAll(".subject-score b");

    var totalScore = 0;
    data.forEach((element, index) => {
        subjectsNames[index].innerHTML = element['category'];
        subjectsIcons[index].src = element['icon'];
        subjectsScores[index].innerHTML = element['score'];
        totalScore += element['score'];
    });

    totalScoreElement.innerHTML = parseInt(totalScore / subjectsIcons.length);
}

window.addEventListener('load', init);