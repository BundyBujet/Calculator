// this Project was for a simble calc with vanilla js only

let degit = document.querySelectorAll(".degit");
let creen = document.querySelector("#screen");
let screenValues = [];
let result = 0;

window.addEventListener("click", function (e) {
  //degit btns
  if (e.target.classList.value === "degit") {
    if (
      screenValues.includes(creen.innerText) ||
      creen.innerHTML === `${result}`
    ) {
      creen.innerText = "";
      creen.innerText += e.target.innerText;
    } else {
      creen.innerText += e.target.innerText;
    }
  }
  //operator btns
  if (e.target.classList.value === "opr") {
    screenValues.push(creen.innerText);
    screenValues.push(e.target.innerText);
  }
  //result btn
  if (e.target.classList.value === "reslt") {
    screenValues.push(creen.innerText);
    add();
    sum();
    mult();
    div();
    creen.innerText = result;
    screenValues = [];
  }
  if (e.target.classList.value === "clear") {
    creen.innerText = "";
    screenValues = [];
  }
});

//opr function
function add() {
  if (screenValues[1] === "+" && screenValues.length === 3) {
    return (result =
      Number(screenValues[0]) + Number(screenValues[screenValues.length - 1]));
  }
}
function sum() {
  if (screenValues[1] === "-" && screenValues.length === 3) {
    return (result =
      Number(screenValues[0]) - Number(screenValues[screenValues.length - 1]));
  }
}

function mult() {
  if (screenValues[1] === "*" && screenValues.length === 3) {
    return (result =
      Number(screenValues[0]) * Number(screenValues[screenValues.length - 1]));
  }
}

function div() {
  if (screenValues[1] === "/" && screenValues.length === 3) {
    return (result =
      Number(screenValues[0]) / Number(screenValues[screenValues.length - 1]));
  }
}
