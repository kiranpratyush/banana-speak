"use strict";
let btntranslate = document.querySelector("#translate"); // selecting the button click me
let textAreaValue = document.querySelector("textarea[name='english-sentence']"); // selecting the text area valur by attribute selector
let outputDiv = document.querySelector("#output"); //selecting the output div

function errorHandler(error) {
  console.log("Error", error);
}
function translationUrl(text) {                    // creating a function to add text to be sent the request
  let serverUrl =
    "https://api.funtranslations.com/translate/minion.json";
  return serverUrl + "?" + "text=" + text;
}
function click() {
  let value = textAreaValue.value;
  fetch(translationUrl(value))
    .then((value) => value.json())        //The following function first fetch the request then convert the value to json then extract the translated contents from the json
    .then((value) => {
      let translated = value.contents.translated;
      outputDiv.textContent = translated;
    })
    .catch(errorHandler);
}
translate.addEventListener("click", click);
