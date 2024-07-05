function  go(){
//    hide the homescreen
// show the about me section
const homeSection = document.getElementById('home-page');

homeSection.classList.scrollIntoView({ behavior: 'smooth' });
console.log(homeSection.classList)

}

function randomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
const alphabet = alphabets[index];


    return alphabet
}
console.log(randomAlphabet())