var txtInput=document.querySelector("#txt-Input")
var bTranslate=document.querySelector("button")
var txtOutput=document.querySelector("#txt-Output")

function errorHandler(error)
{
    console.log("you have error : ", error)
    alert("try again after one hour!!!")
}
function clickEventListener()
{
    url="https://api.funtranslations.com/translate/minion.json?text=" + txtInput.value;
    fetch(url)
    .then(response=>response.json())
    .then(json=>txtOutput.innerText=json.contents.translated)
    .catch(errorHandler)
    
}

bTranslate.addEventListener("click", clickEventListener);
