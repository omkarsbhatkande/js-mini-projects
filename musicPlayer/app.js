let progress = document.getElementById("progress");

let song = document.getElementById("song");

let control = document.getElementById("ctrlI");


song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPaus(){
  if(control.classList.contains("fa-pause")){
    song.pause();
    control.classList.remove("fa-pause")
    control.classList.add("fa-play")
  }
  else{
    song.play();
    control.classList.add("fa-pause")
    control.classList.remove("fa-play")
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500)
}

progress.onchange= function(){
  song.play();
  song.currentTime = progress.value;
  control.classList.add("fa-pause")
    control.classList.remove("fa-play")
}