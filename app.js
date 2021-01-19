var txtInput=document.querySelector("#txt-Input")
var bTranslate=document.querySelector("button")
var txtOutput=document.querySelector("#txt-Output")

function clickEventListener()
{
    console.log(txtInput.value);
    txtOutput.innerText=txtInput.value;
}

bTranslate.addEventListener("click", clickEventListener);
