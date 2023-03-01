import { getTimeOfDay } from "./greeting";

//function that returns a random number between 1 and 20
function getRandomNum() {
    return Math.floor(Math.random()*10)+10;
}

//setting the start background style
const body = document.querySelector('body');
let randomNum = getRandomNum();
setBg();

//function that set the start background style
function setBg() {
    const timeOfDay = getTimeOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`; 
    img.onload = () => {      
        body.style.backgroundImage = `url('${img.src}')`;
    };
}

//function that switches to the next picture
function getSlideNext() {
    randomNum > 19 ? randomNum = 10 : randomNum++;
    setBg();
}

//function that switches to the previous picture
function getSlidePrev() {
    randomNum < 11 ? randomNum = 20 : randomNum--;
    setBg();
}

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);