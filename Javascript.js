let rating = document.querySelector('.main_container');
let thankYou = document.querySelector('.thank-main_container');
let submit = document.getElementById('btn');
let message = document.querySelector('.message');

let star = 0;

function getRating(){ 
}

function ratingSubmit(){
    thankYou.classList.remove('hide');
    rating.classList.add('hide');
    message.innerText = `you gave ${star} out of 5`;
}

submit.addEventListener('click',ratingSubmit);


function getRating(element){
    star = element.innerText;
    // element.style.background = "orange";
    // element.style.color = "white";
}

