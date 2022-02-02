window.addEventListener('DOMContentLoaded', inIt, false);

function inIt() {
    
    // variables

    let smallNumber = document.querySelector('#smallestNumber');
    let bigNumber = document.querySelector('#biggestNumber');

    let guess = document.querySelector('#guess');
    // buttons
    let button = document.querySelector('#button');
    let generate = document.querySelector('#generate');


    let rightText = document.querySelector('#rightText');
    let wrongText = document.querySelector('#wrongText');

    let number = 0;


    // events

    generate.addEventListener('click', generateClick, false);
    button.addEventListener('click', check, false);
    

    // functions
    

    function generateClick(e) {

        numGen(Number(smallNumber.value),Number(bigNumber.value));

        e.preventDefault();
    }

    function numGen(min, max) {
        number = Math.round(Math.random() * (max - min) + min);
        console.log('gerador = ', number);
    }

    function check(e) {
        if (Number(guess.value) === number) {
            rightText.classList.add('show')
            wrongText.classList.remove('show')
        } else {
            wrongText.classList.add('show')
        
        }
        e.preventDefault();
    }


}

