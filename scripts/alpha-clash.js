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



function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
}
    