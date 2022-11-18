// Add js here.
let video = document.getElementById("videoplayer");
video.load();
video.autoplay = false;
video.loop = false;

let play = document.getElementById("play");
play.addEventListener("click", playthevideo);

function playthevideo(){
    video.play();
}

let pause = document.getElementById("pause");
pause.addEventListener("click", pausethevideo);

function pausethevideo(){
    video.pause();
}

let slower = document.getElementById("slower");
slower.addEventListener("click", slowerthevideo);

let speed = 1;

function slowerthevideo(){
    speed = speed / 2;
    if(speed < 0.5){
        window.alert("Video is at slowest speed!");
        return false;
    }
    else{
        video.playbackRate = speed;
    }
}

let faster = document.getElementById("faster");
faster.addEventListener("click", fasterthevideo);

function fasterthevideo(){
    speed = speed * 2;
    if(speed > 2){
        window.alert("Video is at fastest speed!");
        return false;
    }
    else{
        video.playbackRate = speed;
    }
}

let current = 0;

let skip = document.getElementById("skip");
skip.addEventListener("click", skipahead);

function skipahead(){
    current = video.currentTime + 15;
    if(current > video.duration)
    {
        current = 0;
    }
    video.currentTime = current;
}

let mute = document.getElementById("mute");
mute.addEventListener("click", mutethevideo);

let ismute = false;

function mutethevideo(){
    if(ismute == false)
    {
        video.muted = true;
        ismute = true;
        document.getElementById('mute').innerHTML = 'Unmute';
    }
    else{
        video.muted = false;
        ismute = false;
        document.getElementById('mute').innerHTML = 'Mute';
    }
}

let slider = document.getElementById("slider");
let output = document.getElementById("volume");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    video.volume = slider.value / 100;
}