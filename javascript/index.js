function showAnswer(id) {
    //alert(document.getElementById(id).querySelector(".main__question-card__answer").className.)
    document.getElementById(id).querySelector(".main__question-card__answer").style.visibility = "visible";
    document.getElementById(id).querySelector(".main__question-card__show-answer").classList.add("revealed");
}