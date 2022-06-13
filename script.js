const possibleAnswers = ["s", "n", "n tbm", "nunca", "?", "quem?"];

const inputElement = document.querySelector("input");

const btnElement = document.querySelector("button");

// DISABLE BUTTON ON LOAD
window.onload = () => changingButtonState();

// ENTER BUTTON ON KEYBOARD TRIGGER BUTTON TO GENERATE ANSWER
inputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnElement.click();
  }
});

// CHECK IF INPUT VALUE TO TOGGLE BUTTON STATE
function changingButtonState() {
  if (inputElement.value.length == 0) {
    btnElement.setAttribute("disabled", true);
  } else {
    btnElement.removeAttribute("disabled");
  }
}

// GENERATE ANSWER
function answer() {
  const randomNumber = Math.floor(Math.random() * possibleAnswers.length);

  const asking = `<div>${inputElement.value}</div>`;

  const answer = document.querySelector("#answer");
  answer.innerHTML = asking + possibleAnswers[randomNumber];

  inputElement.value = "";
  changingButtonState();

  answer.style.opacity = 1;

  setTimeout(() => {
    answer.style.opacity = 0;
  }, 3000);
}
