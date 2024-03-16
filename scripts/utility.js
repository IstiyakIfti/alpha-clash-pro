function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    // get or create a alphabet array
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet ;
}