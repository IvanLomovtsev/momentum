import playList from './playlist.js';

//current track information
const trackTitle = document.querySelector('.track-title');
const timeline = document.querySelector ('.timeline');
const trackCurrentTime =document.querySelector('.current');
const trackLengthTime =document.querySelector('.length');
const progressBar = document.querySelector('.progress');

//controls
const playTrack = document.querySelector('.play');
const nextTrack = document.querySelector('.play-next');
const prevTrack = document.querySelector('.play-prev');

//play audio
let isPlay = false;
let numTrack = 0;
trackTitle.textContent = playList[numTrack].title;
trackLengthTime.textContent = playList[numTrack].duration;
const audio = new Audio();
audio.src = playList[numTrack].src;

//playlist
const playListContainer = document.querySelector('.play-list');

//create play-list on page
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    playListContainer.append(li)
    li.textContent = el.title;
  })

//play or pause a track
function playAudio(audio) {
  trackTitle.textContent = playList[numTrack].title
  trackLengthTime.textContent = playList[numTrack].duration;
  !isPlay ? audio.pause() : audio.play();
}

//switch to the next track
function nextAudio(){
    numTrack < playList.length-1 ? numTrack++ : numTrack = 0;
    audio.src = playList[numTrack].src;
    isPlay = true;
    playTrack.classList.add('pause');
    trackCurrentTime.textContent = getTimeCodeFromNum(0);
    progressBar.style.width = 0;
    playAudio(audio)
}

//switch to the previous track
function prevAudio(){
    numTrack === 0 ? numTrack = playList.length-1 : numTrack--;
    audio.src = playList[numTrack].src;
    isPlay = true;
    playTrack.classList.add('pause');
    trackCurrentTime.textContent = getTimeCodeFromNum(0);
    progressBar.style.width;
    playAudio(audio)
}

//get current of audio
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  let hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

//progress and current time of track
function progressAudio() {
  trackCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);
  progressBar.style.width = audio.currentTime/audio.duration*100 + '%';
  if (audio.currentTime === audio.duration) {
    nextAudio()
  }
}

timeline.addEventListener("click", placeOfClick => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = placeOfClick.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
});

setInterval(progressAudio, 500);

playTrack.addEventListener('click', ()=>{
    playTrack.classList.toggle('pause');
    isPlay = !isPlay;
    playAudio(audio);
});
nextTrack.addEventListener('click', nextAudio);
prevTrack.addEventListener('click', prevAudio);