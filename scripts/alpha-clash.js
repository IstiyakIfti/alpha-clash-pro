// function play() {
//     // step-1: hide the home screen. To hide the screen add the class hidden to the home section 
//     // show the playground


//     // console.log('clicked');
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }


function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    // stop the game if pressed "Esc"
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get expected to pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check match or not

    if(playerPressed === expectedAlphabet){
        console.log('you get a extra point');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1 ;
        setTextElementValueById('current-score',updatedScore);

        // ------------------------------------------
        // update score:
        // 1. get the correct score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore =parseInt(currentScoreText);
        // console.log(currentScore);
        // 2. increase the score by one
        // const newScore = currentScore + 1 ;
        // 3. show the update score
        // currentScoreElement.innerText = newScore;
        // start a new round
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1 ;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver()
        }
        // -----------------------------------------------
        // // step-1: get the correct live number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1 ;
        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
        // console.log('you missed. You lost a life');
    }

}
document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    // step-1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabets to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet); 
}

function play(){
    // hide everything show only the playground
    hideElementByID('home-screen');
    hideElementByID('final-score'); 
    showElementByID('play-ground');
    
    // reset score and life
    setTextElementValueById('current-life' , 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver(){
    hideElementByID('play-ground');
    showElementByID('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}