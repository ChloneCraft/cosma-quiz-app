const form = document.querySelector(".addCardForm");
const questionInputField = document.querySelector("#yourQuestion");
const answerInputField = document.querySelector("#yourAnswer");
// const questionCharactersLeft = document.querySelector(
//   ".questionCharactersLeft"
// );
// const answerCharactersLeft = document.querySelector(".answerCharactersLeft");

// questionInputField.addEventListener("input", () => {
//   questionCharactersLeft.textContent =
//     150 - questionInputField.value.length + " characters left";
// });
// answerInputField.addEventListener("input", () => {
//   answerCharactersLeft.textContent =
//     150 - answerInputField.value.length + " characters left";
// });
answerInputField.addEventListener("input", (event) => {
  updateCharactersLeft(event.target);
});
questionInputField.addEventListener("input", (event) => {
  updateCharactersLeft(event.target);
});

function updateCharactersLeft(field) {
  field.parentElement.querySelector("span").textContent =
    150 - field.value.length + " characters left";
}

//---------------------

function revealAnswer(event) {
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

  answer.style.visibility = visible;
}

//---------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const questionInput = data.yourQuestion;
  const answerInput = data.yourAnswer;
  const tagsInput = data.tags;
  console.log(
    "question:",
    questionInput,
    "answer: ",
    answerInput,
    "tags:",
    tagsInput
  );
  form.reset();

  createDomElement(questionInput, answerInput, tagsInput);
});

//---------------------

function createDomElement(questionInput, answerInput, tagsInput) {
  const newCard = document.createElement("section");
  newCard.classList.add("main__question-card");

  const bookmark = document.createElement("img");
  bookmark.src = "./images/bookmarkBackgroundColor.png";
  bookmark.alt = "Bookmark";
  bookmark.classList.add("main__question-card__bookmark");
  bookmark.addEventListener("click", (event) => {
    event.target.classList.toggle("bookmarked");
  });

  const question = document.createElement("h2");
  question.textContent = questionInput;
  question.classList.add("main__question-card__question");

  const showAnswer = document.createElement("button");
  showAnswer.classList.add("main__question-card__show-answer");
  showAnswer.textContent = "Show Answer";
  showAnswer.addEventListener("click", (event) => {
    revealAnswer(event);
  });

  const answer = document.createElement("h3");
  answer.classList.add("main__question-card__answer");
  answer.textContent = answerInput;

  const tagWrapper = document.createElement("ul");
  tagWrapper.classList.add("main__question-card__tag-wrapper");
  const newLi = document.createElement("li");
  newLi.textContent = tagsInput;
  tagWrapper.append(newLi);

  newCard.append(bookmark);
  newCard.append(question);
  newCard.append(showAnswer);
  newCard.append(answer);
  newCard.append(tagWrapper);
  document.querySelector("main").append(newCard);
}

//---------------------
