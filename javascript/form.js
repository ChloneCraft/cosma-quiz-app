const form = document.querySelector(".addCardForm");
const questionInputField = document.querySelector("#yourQuestion");
const answerInputField = document.querySelector("#yourAnswer");
const tagInput = document.querySelector("#tags");

answerInputField.addEventListener("input", (event) => {
  updateCharactersLeft(event.target);
});
questionInputField.addEventListener("input", (event) => {
  updateCharactersLeft(event.target);
});

function updateCharactersLeft(field) {
  field.parentElement.querySelector("span").textContent =
    150 - field.value.length + " characters left";
  if (field.value.length == 150) {
    field.parentElement.querySelector("span").style.color = "red";
  }
}

//tag input

// tagInput.addEventListener("input", (event) => {
//   if (event.data == )
//   console.log(event.data);
// });

//tag input

//---------------------

// function revealAnswer(event) {
//   const answer = event.target.parentElement.querySelector(
//     ".main__question-card__answer"
//   );

//   const showAnswerButton = event.target;

//   showAnswerButton.classList.toggle("revealed");

//   if (showAnswerButton.classList.contains("revealed")) {
//     showAnswerButton.innerHTML = "Hide Answer";
//   } else {
//     showAnswerButton.innerHTML = "Show Answer";
//   }

//   const visible = showAnswerButton.classList.contains("revealed")
//     ? "visible"
//     : "";

//   answer.style.visibility = visible;
// }
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
  if (visible) {
    answer.classList.add("revealAnswer");
  } else {
    answer.classList.remove("revealAnswer");
  }
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

  questionInputField.parentElement.querySelector("span").textContent =
    150 + " characters left";
  answerInputField.parentElement.querySelector("span").textContent =
    150 + " characters left";

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
