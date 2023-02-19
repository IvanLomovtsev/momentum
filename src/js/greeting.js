let nameOfUser = document.querySelector('.name');

//function to get time of day
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    switch (Math.floor(hours/6)){
        case 0: return 'night';
        case 1: return 'morning';
        case 2: return 'afternoon';
        case 3: return 'evening';
    }
}

//function to get greeting
function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay();
    console.log(nameOfUser)
    if (nameOfUser.value){
        nameOfUser.placeholder = '[Enter name]';
    }
    greeting.textContent = `Good ${timeOfDay},`;
    setTimeout(showGreeting, 1000);
}

//saving username after app reload
function setLocalStorage() {
    localStorage.setItem('name', nameOfUser.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

//data recovery before page load
function getLocalStorage() {
    if (localStorage.getItem('name')) {
        nameOfUser.value = localStorage.getItem('name');
    }
    else {
        nameOfUser.placeholder = '[Enter name]';
    }
  }
window.addEventListener('load', getLocalStorage)

showGreeting()