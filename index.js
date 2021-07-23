'use strict'
let btntranslate =document.querySelector("#translate");
let textAreaValue = document.querySelector("#translator-textarea");

function click()
{
    let value = textAreaValue.value;
    console.log(value);
}
translate.addEventListener("click",click);