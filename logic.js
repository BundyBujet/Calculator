// this Project was for a simple calc with vanilla js only
//the calculator is linear.

let degit = document.querySelectorAll(".degit");
let creen = document.querySelector("#screen");
let screenValues = [];
let result = [];

window.addEventListener("click", function (e) {
  //degit btns
  if (e.target.classList.value === "degit") {
    if (creen.innerText === result[0]) {
      result = [];
      creen.innerText = e.target.innerText;
    } else {
      creen.innerText += e.target.innerText;
    }
  }
  //operator btns
  if (e.target.classList.value === "opr") {
    if (screenValues[screenValues.length - 1] === e.target.innerText) {
      screenValues.push(creen.innerText);
      screenValues.push(e.target.innerText);

      console.log("exist");
      console.log(screenValues);
    } else {
      screenValues.push(creen.innerText);
      screenValues.push(e.target.innerText);
    }
    creen.innerText = "";
  }
  //result btn
  if (e.target.classList.value === "reslt") {
    screenValues.push(creen.innerText);
    opr(screenValues);
    creen.innerText = result[0];
    screenValues = [];
  }
  //clear btn
  if (e.target.classList.value === "clear") {
    creen.innerText = "";
    screenValues = [];
    result = [];
  }
});
//operation handler
function opr(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (result.length === 0) {
      if (arr[i] === "+") {
        result.push(`${Number(arr[i - 1]) + Number(arr[i + 1])}`);
      } else if (arr[i] === "-") {
        result.push(`${Number(arr[i - 1]) - Number(arr[i + 1])}`);
      } else if (arr[i] === "*") {
        result.push(`${Number(arr[i - 1]) * Number(arr[i + 1])}`);
      } else if (arr[i] === "/") {
        result.push(`${Number(arr[i - 1]) / Number(arr[i + 1])}`);
      }
    } else if (result.length !== 0) {
      if (arr[i] === "+") {
        result[0] = +result[0] + Number(arr[i + 1]);
      } else if (arr[i] === "-") {
        result[0] = +result[0] - Number(arr[i + 1]);
      } else if (arr[i] === "*") {
        result[0] = +result[0] * Number(arr[i + 1]);
      } else if (arr[i] === "/") {
        result[0] = +result[0] / Number(arr[i + 1]);
      }
    }
  }
}
