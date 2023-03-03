import playList from './playlist.js';

const playTrack = document.querySelector('.play');
const nextTrack = document.querySelector('.play-next');
const prevTrack = document.querySelector('.play-prev');
let isPlay = false;
let numTrack = 0;
const audio = new Audio();
const playListContainer = document.querySelector('.play-list');

//create play-list on page
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    playListContainer.append(li)
    li.textContent = el.title;
  })

//play or pause a track
function playAudio() {
  audio.src = playList[numTrack].src;
  audio.currentTime = 0;
  !isPlay ? audio.pause() : audio.play();
}

//switch to the next track
function nextAudio(){
    numTrack < playList.length-1 ? numTrack++ : numTrack = 0;
    isPlay = true;
    playTrack.classList.add('pause');
    playAudio()
}

//switch to the next track
function prevAudio(){
    numTrack === 0 ? numTrack = playList.length-1 : numTrack--;
    isPlay = true;
    playTrack.classList.add('pause');
    playAudio()
}

playTrack.addEventListener('click', ()=>{
    playTrack.classList.toggle('pause');
    isPlay = !isPlay;
    playAudio();
});
nextTrack.addEventListener('click', nextAudio);
prevTrack.addEventListener('click', prevAudio);
