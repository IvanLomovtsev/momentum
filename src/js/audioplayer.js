import playList from './playlist.js';

const playTrack = document.querySelector('.play');
const nextTrack = document.querySelector('.play-next');
const prevTrack = document.querySelector('.play-prev');
let isPlay = false;
let numTrack = 0;
const audio = new Audio();

function playAudio() {
  audio.src = playList[numTrack].src;
  audio.currentTime = 0;
  console.log(isPlay)
  !isPlay ? audio.pause() : audio.play();
}

function nextAudio(){
    numTrack < playList.length-1 ? numTrack++ : numTrack = 0;
    isPlay = true;
    playTrack.classList.add('pause');
    playAudio()
}
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
