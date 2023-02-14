const time = document.querySelector('.time');
const date = document.querySelector('.date');

//function to display the current time on the page
function showTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

//function to display the current date on the page
function showDate() {
    const currentDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDateForm = currentDate.toLocaleDateString('en-En', options);
    console.log(currentDateForm)
    date.textContent = currentDateForm;
}
showTime()