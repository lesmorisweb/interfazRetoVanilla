const btnEnviar=document.querySelector(".sent");
const outputText= document.querySelector("#textToFind");

btnEnviar.addEventListener("click", ()=>{
    console.log("kshdka")
    const inputFind= document.querySelector("#toFind");
    
    outputText.innerText= inputFind.value
});