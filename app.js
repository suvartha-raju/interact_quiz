const quizForm = document.querySelector("#quizForm");
const resultContainer = document.querySelector("#result-container");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedAnswers = Array.from(quizForm.elements).filter(element => element.checked);
  const score = selectedAnswers.reduce((total, answer) => total + parseInt(answer.value), 0);

  resultContainer.textContent = `Your score is ${score} out of 2.`;
});