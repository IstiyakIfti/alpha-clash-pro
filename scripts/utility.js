function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementID){
    const element = document.getElementById(elementID);
    element.classList.add("bg-orange-500");
}
function removeBackgroundColorById(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove("bg-orange-500");
}

function getTextElementValueById(elementID){
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    // get or create a alphabet array
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet ;
}