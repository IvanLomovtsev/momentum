(()=>{var e={643:()=>{var e=document.querySelector(".time"),t=document.querySelector(".date");!function n(){var o,r=(new Date).toLocaleTimeString();e.textContent=r,o=(new Date).toLocaleDateString("en-En",{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}),t.textContent=o,setTimeout(n,1e3)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";n(643);var e=document.querySelector(".name");function t(){var e=(new Date).getHours();switch(Math.floor(e/6)){case 0:return"night";case 1:return"morning";case 2:return"afternoon";case 3:return"evening"}}window.addEventListener("beforeunload",(function(){localStorage.setItem("name",e.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")?e.value=localStorage.getItem("name"):e.placeholder="[Enter name]"})),function n(){var o=document.querySelector(".greeting"),r=t();e.value&&(e.placeholder="[Enter name]"),o.textContent="Good ".concat(r,","),setTimeout(n,1e3)}();var o=document.querySelector("body"),r=Math.floor(10*Math.random())+10;function a(){var e=t(),n=new Image;n.src="https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/".concat(e,"/").concat(r,".jpg'"),n.onload=function(){o.style.backgroundImage="\"url('".concat(n.src,"')\"")},console.log(n.src)}a();var c=document.querySelector(".slide-next"),u=document.querySelector(".slide-prev");c.addEventListener("click",(function(){r>19?r=10:r++,a()})),u.addEventListener("click",(function(){r<11?r=20:r--,a()}))})()})();