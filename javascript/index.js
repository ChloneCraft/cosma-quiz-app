const questionCard = document.querySelector(".main__question-card");
const bookmarkButton = document.querySelector(".main__question-card__bookmark");

function showAnswer(event) {
  const answer = event.target.parentElement.querySelector(
    ".main__question-card__answer"
  );

  const showAnswerButton = event.target;

  showAnswerButton.classList.toggle("revealed");

  if (showAnswerButton.classList.contains("revealed")) {
    showAnswerButton.innerHTML = "Hide Answer";
  } else {
    showAnswerButton.innerHTML = "Show Answer";
  }

  const visible = showAnswerButton.classList.contains("revealed")
    ? "visible"
    : "";
  if (visible) {
    answer.classList.add("revealAnswer");
  } else {
    answer.classList.remove("revealAnswer");
  }
  // answer.style.visibility = visible;
}

function toggleBookmark(event) {
  event.target.classList.toggle("bookmarked");
}
